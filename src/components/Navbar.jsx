import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Search, Menu, X } from 'lucide-react'
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-brand/10 bg-gradient-to-b from-[#f4f7ff] to-[#eaf0fd] shadow-sm">

      {/* Main Navbar */}
      <div className="mx-auto flex h-[85px] max-w-[1400px] items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-[15px] font-medium text-brand lg:flex">
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `border-b-2 py-2 ${
                  isActive
                    ? 'border-brand'
                    : 'border-transparent hover:opacity-70'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-4 text-brand lg:flex">

          {/* Search */}
          <Search size={18} />

          {/* Divider */}
          <span className="h-8 w-px bg-brand/30" />

          {/* Language Selector */}
          <div className="flex items-center gap-3 rounded-full border border-brand/30 px-5 py-2 text-xs">
            <Search size={14} />

            <span className="font-medium">
              ENG
            </span>

            <span className="h-4 w-px bg-brand/40" />

            <span>
              नेपाली
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md p-2 text-brand lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-brand/10 bg-gradient-to-b from-[#f4f7ff] to-[#eaf0fd] px-6 pb-6 lg:hidden">

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col">

            {links.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `border-b border-brand/10 py-4 text-[15px] font-medium text-brand ${
                    isActive
                      ? 'font-semibold'
                      : 'hover:opacity-70'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

          </nav>

          {/* Mobile Language Selector */}
          <div className="mt-5 flex justify-center">

            <div className="flex items-center gap-3 rounded-full border border-brand/30 px-5 py-2 text-xs text-brand">

              <Search size={14} />

              <span className="font-medium">
                ENG
              </span>

              <span className="h-4 w-px bg-brand/40" />

              <span>
                नेपाली
              </span>

            </div>

          </div>

        </div>
      )}

    </header>
  )
}