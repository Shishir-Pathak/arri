import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Search, Menu, X, Globe } from "lucide-react";

// 👉 Put your logo image in src/assets and update this path/filename
import logo from "../assets/logo.png";

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
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Add a stronger shadow / blur once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Spacer: keeps page content from hiding under the fixed navbar (same height as the bar) */}
      <div className="h-[85px] w-full" aria-hidden="true" />

      {/* fixed = always stays at the top while scrolling, no matter what parent wraps it */}
      <header
        className={`nav-drop fixed inset-x-0 top-0 z-50 w-full border-b border-brand/10 bg-gradient-to-r from-[#e9f0fd] via-[#d3e0fb] to-[#b4c9f5] backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-navy/15" : "shadow-sm"
        }`}
      >
        <style>{`
          @keyframes nav-drop {
            from { opacity: 0; transform: translateY(-100%); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes nav-menu {
            from { opacity: 0; transform: translateY(-10px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .nav-drop { animation: nav-drop .7s cubic-bezier(.22,1,.36,1) backwards; }
          .nav-menu { animation: nav-menu .3s ease-out both; }
          @media (prefers-reduced-motion: reduce) {
            .nav-drop, .nav-menu { animation: none; }
          }
        `}</style>

        {/* Main Navbar */}
        <div className="mx-auto flex h-[85px] w-full max-w-[1400px] items-center justify-between px-4 md:px-6 lg:px-10 gap-4">
          {/* Logo image: shrink-0 ensures it NEVER squishes or hides */}
          <Link to="/" onClick={closeMenu} className="shrink-0">
            <img
              src={logo}
              alt="Company logo"
              className="h-11 w-auto object-contain md:h-12 lg:h-14 transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation: hidden on mobile, flex on md and up */}
          <nav className="hidden md:flex items-center gap-1 text-[14px] lg:text-[15px] font-medium text-brand overflow-x-auto">
            {links.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-full px-3 py-2 transition-all duration-300 lg:px-4 ${
                    isActive
                      ? "bg-navy text-white shadow-md shadow-navy/25"
                      : "hover:bg-white/60 hover:-translate-y-0.5"
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
              className="grid h-10 w-10 place-items-center rounded-full border border-brand/20 bg-white/50 transition duration-300 hover:bg-white hover:shadow-md"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <span className="h-8 w-px bg-brand/30" />
            <div className="flex items-center gap-3 rounded-full border border-brand/30 bg-white/50 px-4 py-2 text-xs backdrop-blur-md">
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
            className="rounded-full bg-white/50 p-2 text-brand transition hover:bg-white md:hidden shrink-0"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown (scrolls if the screen is short) */}
        {isMenuOpen && (
          <div className="nav-menu max-h-[calc(100vh-85px)] w-full overflow-y-auto border-t border-brand/10 bg-[#e3ebfc]/95 px-6 pb-6 backdrop-blur-md md:hidden">
            <nav className="flex flex-col">
              {links.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `border-b border-brand/10 py-4 text-[15px] font-medium text-brand transition-all ${
                      isActive
                        ? "font-semibold pl-3 border-l-4 border-l-navy"
                        : "hover:pl-2 hover:opacity-80"
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
    </>
  );
}