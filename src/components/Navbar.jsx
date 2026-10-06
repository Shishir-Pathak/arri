import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Search, Menu, X, Globe } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Investor Relations", to: "/investor-relations" },
  { label: "Notices", to: "/notices" },
  { label: "Media", to: "/media" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand/10 bg-gradient-to-b from-[#f4f7ff] to-[#eaf0fd] shadow-sm">
      {/* Main Navbar */}
      <div className="mx-auto flex h-[85px] w-full max-w-[1400px] items-center justify-between px-4 md:px-6 lg:px-10 gap-4">
        {/* Logo: shrink-0 ensures it NEVER squishes or hides */}
        <Link to="/" onClick={closeMenu} className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop Navigation: hidden on mobile, flex on md and up */}
        <nav className="hidden md:flex items-center gap-4 text-[14px] lg:text-[15px] font-medium text-brand overflow-x-auto">
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `border-b-2 py-2 whitespace-nowrap ${
                  isActive
                    ? "border-brand"
                    : "border-transparent hover:opacity-70"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex shrink-0 items-center gap-4 text-brand">
          <button
            type="button"
            className="hover:opacity-70 transition-opacity"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <span className="h-8 w-px bg-brand/30" />
          <div className="flex items-center gap-3 rounded-full border border-brand/30 px-4 py-2 text-xs">
            <Globe size={14} />
            <span className="font-medium">ENG</span>
            <span className="h-4 w-px bg-brand/40" />
            <span>नेपाली</span>
          </div>
        </div>

        {/* Mobile Menu Button: Only shows on very small screens (below md) */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md p-2 text-brand md:hidden shrink-0"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="w-full border-t border-brand/10 bg-[#f4f7ff] px-6 pb-6 md:hidden">
          <nav className="flex flex-col">
            {links.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `border-b border-brand/10 py-4 text-[15px] font-medium text-brand ${
                    isActive ? "font-semibold" : "hover:opacity-70"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
