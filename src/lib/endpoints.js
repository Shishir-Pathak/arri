import { get, postJson, postForm } from './api';

// Site config
export const fetchSite = (opts) => get('/site/', undefined, opts);

// Page content
export const fetchHomePage      = (opts) => get('/pages/home/',      undefined, opts);
export const fetchAboutPage     = (opts) => get('/pages/about/',     undefined, opts);
export const fetchProjectsPage  = (opts) => get('/pages/projects/',  undefined, opts);
export const fetchInvestorsPage = (opts) => get('/pages/investors/', undefined, opts);
export const fetchCareersPage   = (opts) => get('/pages/careers/',   undefined, opts);
export const fetchMediaPage     = (opts) => get('/pages/media/',     undefined, opts);
export const fetchContactPage   = (opts) => get('/pages/contact/',   undefined, opts);

// Projects
export const fetchProjects = (filters = {}, opts) => get('/projects/', filters, opts);
export const fetchProject  = (slug, opts)          => get(`/projects/${slug}/`, undefined, opts);

// Notices
export const fetchNotices          = (filters = {}, opts) => get('/notices/', filters, opts);
export const fetchLatestNotice     = (opts) => get('/notices/latest/', undefined, opts);
export const fetchNoticeCategories = (opts) => get('/notices/categories/', undefined, opts);

// Media
export const fetchNews    = (filters = {}, opts) => get('/news/', filters, opts);
export const fetchGallery = (filters = {}, opts) => get('/gallery/', filters, opts);
export const fetchVideos  = (filters = {}, opts) => get('/videos/', filters, opts);

// Investors
export const fetchCapitalStructure = (opts) => get('/investors/capital-structure/', undefined, opts);
export const fetchPublicOffering   = (opts) => get('/investors/public-offering/',   undefined, opts);
export const fetchFinancials       = (opts) => get('/investors/financials/',        undefined, opts);

// Documents
export const fetchDocuments = (category, opts) => get('/documents/', { category }, opts);

// Careers
export const fetchOpenings = (filters = {}, opts) => get('/careers/openings/', filters, opts);
export const submitApplication = (payload, opts) => {
  const fd = new FormData();
  if (payload.opening)      fd.append('opening', payload.opening);
  fd.append('full_name',    payload.full_name);
  fd.append('email',        payload.email);
  fd.append('phone',        payload.phone);
  if (payload.cover_letter) fd.append('cover_letter', payload.cover_letter);
  fd.append('cv',           payload.cv);
  fd.append('website',      payload.website ?? '');
  return postForm('/careers/apply/', fd, opts);
};

// Contact
export const submitContact = (payload, opts) =>
  postJson('/contact/', payload, opts);

// People, FAQs, Legal, Search
export const fetchPeople    = (filters = {}, opts) => get('/people/', filters, opts);
export const fetchFaqs      = (opts)     => get('/faqs/', undefined, opts);
export const fetchLegalPage = (slug, opts) => get(`/legal/${slug}/`, undefined, opts);
export const fetchSearch    = (q, opts)  => get('/search/', { q }, opts);