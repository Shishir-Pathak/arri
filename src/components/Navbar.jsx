import { NavLink, Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import Logo from './Logo'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Investor Relations', to: '/investor-relations' },
  { label: 'Notices', to: '/notices' },
  { label: 'Media', to: '/media' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand/10 bg-gradient-to-b from-[#f4f7ff] to-[#eaf0fd] shadow-sm">
      <div className="mx-auto flex h-[85px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link to="/"><Logo /></Link>

        <nav className="hidden items-center gap-8 text-[15px] font-medium text-brand lg:flex">
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `border-b-2 py-2 ${isActive ? 'border-brand' : 'border-transparent hover:opacity-70'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-brand">
          <Search size={18} className="hidden sm:block" />
          <span className="hidden h-8 w-px bg-brand/30 sm:block" />
          <div className="flex items-center gap-3 rounded-full border border-brand/30 px-5 py-2 text-xs">
            <Search size={14} />
            <span className="font-medium">ENG</span>
            <span className="h-4 w-px bg-brand/40" />
            <span>नेपाली</span>
          </div>
        </div>
      </div>
    </header>
  )
}