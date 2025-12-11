import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "./Header.css";

function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ];

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setIsLangOpen(false);
  };

  // Close dropdown when clicking outside and handle body scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".hamburger-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    if (isLangOpen || isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isLangOpen, isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setIsLangOpen(false);
    }
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <header className="header">
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
      <div className="header-container">
        <div className="header-logo">
          <img src="/sada-logo.png" alt="Sada TV Logo" className="logo-img" />
          <span className="logo-text">SADA TV</span>
        </div>
        <button
          className="hamburger-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {!isMobileMenuOpen ? (
            <svg
              className="menu-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          ) : (
            <svg
              className="close-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          )}
        </button>
        <nav
          className={`header-nav ${isMobileMenuOpen ? "mobile-open" : ""}`}
          ref={mobileMenuRef}
        >
          <a href="#home" className="nav-link" onClick={handleNavClick}>
            <span>{t.nav.home}</span>
          </a>
          <a href="#watch" className="nav-link" onClick={handleNavClick}>
            <span>{t.nav.watch}</span>
          </a>
          <a href="#about" className="nav-link" onClick={handleNavClick}>
            <span>{t.nav.about}</span>
          </a>
          <a href="#contact" className="nav-link" onClick={handleNavClick}>
            <span>{t.nav.contact}</span>
          </a>
          <div className="language-selector" ref={dropdownRef}>
            <button
              className="language-button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-label="Select language"
            >
              <span className="language-flag">{currentLanguage?.flag}</span>
              <svg
                className={`language-arrow ${isLangOpen ? "open" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {isLangOpen && (
              <div className="language-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`language-option ${
                      language === lang.code ? "active" : ""
                    }`}
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    <span className="language-flag">{lang.flag}</span>
                    <span className="language-name">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
