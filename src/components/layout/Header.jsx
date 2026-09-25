import { useState } from "react";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "../../Icons.jsx";
import { navLinks } from "../../data/portfolio.js";

const Header = ({
  activeSection,
  onSetActiveSection,
  onScrollToTop,
  theme,
  onToggleTheme,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="nav-group">
          <button
            type="button"
            className="brand"
            onClick={onScrollToTop}
            aria-label="Scroll to top"
          >
            Home
          </button>

          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${
                  activeSection === link.href.substring(1) ? "active" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="topbar-actions">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
        <nav>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`mobile-nav-link ${
                activeSection === link.href.substring(1) ? "active" : ""
              }`}
              onClick={(event) => {
                event.preventDefault();

                const sectionId = link.href.substring(1);

                onSetActiveSection(sectionId);
                setIsMobileMenuOpen(false);

                document.getElementById(sectionId)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
