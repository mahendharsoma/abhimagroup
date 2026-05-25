"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 80) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY) {
          setIsNavHidden(true);
        } else {
          setIsNavHidden(false);
        }
      } else {
        setIsScrolled(false);
        setIsNavHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsNavOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""} ${isNavHidden ? "nav-hidden" : ""}`}>
      <div className="header-inner">
        <nav className={`nav-links ${isNavOpen ? "active" : ""}`}>
          <a href="#about" onClick={handleNavClick} className="active">
            About
          </a>
          <a href="#news" onClick={handleNavClick}>
            Entities
          </a>
          <a href="#contact" onClick={handleNavClick}>
            Contact
          </a>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
