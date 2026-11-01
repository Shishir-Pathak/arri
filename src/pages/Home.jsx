import { useApi } from '../lib/useApi';
// 1. Import fetchNotices instead of fetchLatestNotice
import { fetchHomePage, fetchNotices } from '../lib/endpoints'; 
import Hero from '../components/Hero';
import FeatureStrip from '../components/FeatureStrip';
import AboutProject from '../components/AboutProject';
import LeadershipNotices from '../components/LeadershipNotices';

export default function Home() {
  // Fetch the home page data (hero slides, stats, etc.)
  const { data: pageData, loading: pageLoading, error: pageError } = useApi(fetchHomePage);
  
  // 2. Fetch a LIST of notices (ordered by newest) instead of just the latest one
  const { data: noticesData, loading: noticeLoading } = useApi(() => fetchNotices({ ordering: '-date' }));

  // Show a loading screen while fetching
  if (pageLoading) {
    return <div className="text-center py-20 text-xl font-semibold">Loading website data...</div>;
  }

  // Show an error screen if the backend is down
  if (pageError) {
    return (
      <div className="text-center py-20 text-red-600">
        <h1 className="text-2xl font-bold">Failed to connect to backend</h1>
        <p>{pageError.message}</p>
        <p className="mt-4 text-sm text-gray-500">Make sure Django is running on port 8000.</p>
      </div>
    );
  }

  return (
    <>
      <Hero slides={pageData.hero_slides} stats={pageData.stats} />
      <FeatureStrip stats={pageData.stats} />
      
      {/* 3. Added stats={pageData.stats} to AboutProject */}
      <AboutProject intro={pageData.featured_projects_intro} stats={pageData.stats} />
      
      {/* 4. Passed the notices array to LeadershipNotices */}
      <LeadershipNotices notices={noticesData?.results || []} />
    </>
  );
}