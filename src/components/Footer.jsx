import { MapPin, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

// Fallbacks in case the backend is down
const defaultLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Media', to: '/media' },
  { label: 'Projects', to: '/projects' },
  { label: 'Careers', to: '/careers' },
  { label: 'Investor Relations', to: '/investor-relations' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Notices', to: '/notices' }
]

export default function Footer({ site }) {
  // Use backend data if available, otherwise fallback
  const contact = site?.contact || {
    address: "Kathmandu Metropolitan City,\nWard No. 31, Kathmandu, Nepal",
    phone: "+977 1 5920708 / 709",
    email: "silkpower2078@gmail.com"
  };

  const socials = site?.social_links || {};
  
  // Map API navigation, fixing the /investors route mismatch
  const links = site?.navigation?.length > 0
    ? site.navigation.map(nav => ({
        label: nav.label === "Investors" ? "Investor Relations" : nav.label,
        to: nav.url === "/investors" ? "/investor-relations" : nav.url
      }))
    : defaultLinks;

  const currentYear = new Date().getFullYear();
  const siteTitle = site?.site_title || "Arris Energy Limited";

  return (
    <footer className="bg-white text-brand border-t border-brand/30">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-10 md:grid-cols-2 lg:grid-cols-[1.1fr_1.3fr_1.2fr_1fr] lg:gap-0 lg:px-10">
        
        {/* 1. Brand & Socials */}
        <div className="flex flex-col justify-start">
          {site?.logo_footer || site?.logo ? (
            <img 
              src={site.logo_footer || site.logo} 
              alt={siteTitle} 
              className="h-12 w-auto object-contain object-left" 
            />
          ) : (
            <div className="text-lg font-bold">{siteTitle}</div>
          )}
          
          {Object.keys(socials).length > 0 && (
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-navy/70">
              {Object.entries(socials).map(([name, url]) => (
                <a key={name} href={url} target="_blank" rel="noreferrer" className="capitalize hover:text-brand transition-colors">
                  {name}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* 2. Quick Links */}
        <div className="lg:border-l lg:border-brand/30 lg:px-8">
          <h4 className="text-[15px] font-medium">Quick Links</h4>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-navy/80">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-brand transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Find Us */}
        <div className="lg:border-l lg:border-brand/30 lg:px-8">
          <h4 className="text-[15px] font-medium">Find Us</h4>
          <ul className="mt-6 space-y-4 text-sm text-navy/80">
            <li className="flex gap-3">
              <MapPin size={18} className="shrink-0 text-brand" />
              {/* whitespace-pre-line handles line breaks from the backend string */}
              <span className="whitespace-pre-line">{contact.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-brand" />
              <a href={`tel:${contact.phone}`} className="hover:text-brand transition-colors">
                {contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-brand" />
              <a href={`mailto:${contact.email}`} className="hover:text-brand transition-colors">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* 4. Tagline */}
        <div className="flex items-center lg:border-l lg:border-brand/30 lg:pl-10">
          <p className="text-[13px] font-medium leading-7 tracking-[0.3em]">
            CLEAN ENERGY<br />BRIGHTER<br />TOMORROWS
            <span className="mt-3 block h-px w-10 bg-brand" />
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand/30">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-navy/70 sm:flex-row lg:px-10">
          <p>© {currentYear} {siteTitle}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-brand transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-of-service" className="hover:text-brand transition-colors">Terms of Use</Link>
            <span>|</span>
            <Link to="/sitemap" className="hover:text-brand transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}