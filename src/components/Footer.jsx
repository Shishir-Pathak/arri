import { MapPin, Phone, Mail } from 'lucide-react'

const quickLinks = ['About Us', 'Media', 'Projects', 'Careers', 'Investor Relations', 'Contact Us', 'Notices']

export default function Footer() {
  return (
    <footer className="bg-white text-brand">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-10 md:grid-cols-2 lg:grid-cols-[1.1fr_1.3fr_1.2fr_1fr] lg:gap-0 lg:px-10">
        {/* brand */}
        <div className="lg:pr-8">
          <svg viewBox="0 0 64 64" className="h-14 w-14" fill="currentColor">
            <path d="M32 4a28 28 0 0 1 28 28H4A28 28 0 0 1 32 4Z" />
            <g stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
              <path d="M32 30V14M22 30l-6-12M42 30l6-12M14 30l-8-6M50 30l8-6" />
            </g>
          </svg>
          <p className="mt-1 text-4xl font-semibold tracking-tight">ARRI⚡</p>
          <p className="mt-2 text-[15px]">Arris Energy Limited</p>
          <p className="text-xl">एरिस इनर्जी लिमिटेड</p>
        </div>

        {/* quick links */}
        <div className="lg:border-l lg:border-brand/30 lg:px-8">
          <h4 className="text-[15px] font-medium">Quick Links</h4>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-navy/80">
            {quickLinks.map((l) => (
              <li key={l}><a href="#" className="hover:text-brand">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* find us */}
        <div className="lg:border-l lg:border-brand/30 lg:px-8">
          <h4 className="text-[15px] font-medium">Find Us</h4>
          <ul className="mt-6 space-y-4 text-sm text-navy/80">
            <li className="flex gap-3"><MapPin size={18} className="shrink-0 text-brand" />
              <span>Kathmandu Metropolitan City,<br />Ward No. 31, Kathmandu, Nepal</span></li>
            <li className="flex gap-3"><Phone size={18} className="shrink-0 text-brand" />+977 1 5920708 / 709</li>
            <li className="flex gap-3"><Mail size={18} className="shrink-0 text-brand" />silkpower2078@gmail.com</li>
          </ul>
        </div>

        {/* tagline */}
        <div className="flex items-center lg:border-l lg:border-brand/30 lg:pl-10">
          <p className="text-[13px] font-medium leading-7 tracking-[0.3em]">
            CLEAN ENERGY<br />BRIGHTER<br />TOMORROWS
            <span className="mt-3 block h-px w-10 bg-brand" />
          </p>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-brand/30">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-navy/70 sm:flex-row lg:px-10">
          <p>© 2025 Arris Energy Limited. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-brand">Privacy Policy</a><span>|</span>
            <a href="#" className="hover:text-brand">Terms of Use</a><span>|</span>
            <a href="#" className="hover:text-brand">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}