import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from './pages/Projects'
import InvestorRelations from './pages/InvestorRelations'
import Notices from './pages/Notices'
import Media from './pages/Media'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

// Scrolls to top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Temporary page for links that haven't been built yet
function ComingSoon() {
  return (
    <div className="grid min-h-[50vh] place-items-center text-center text-brand">
      <div>
        <h1 className="text-4xl font-semibold">
          Coming soon
        </h1>

        <Link
          to="/"
          className="mt-4 inline-block underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="*"
            element={<ComingSoon />}
          />

          <Route path="/projects" element={<Projects />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/media" element={<Media />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}