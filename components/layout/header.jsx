"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import site from "@/components/data/site";
import MainMenu from "./header-menu";
import MobileMenu from "./mobile-menu";
import Social from "@/components/common/social";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={`header__area ${isSticky ? "header__area--sticky" : ""}`}>
        <div className="header__top">
          <div className="container">
            <div className="header__top-inner">
              <ul className="header__top-info">
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <a href={site.contact.phoneHref}>{site.contact.phone}</a>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                </li>
              </ul>
              <Social />
            </div>
          </div>
        </div>
        <div className="header__main">
          <div className="container">
            <div className="header__main-inner">
              <div className="header__logo">
                <Link href="#inicio">
                  <img src={site.brand.logo} alt={site.brand.name} />
                </Link>
              </div>
              <nav className="header__menu d-none d-lg-block" aria-label="Navegación principal">
                <MainMenu />
              </nav>
              <div className="header__actions">
                <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="header__whatsapp d-none d-md-inline-flex" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <Link href="#cotizar" className="btn-one d-none d-sm-inline-flex">
                  Cotizar ahora<i className="fas fa-arrow-right"></i>
                </Link>
                <button type="button" className="header__burger d-lg-none" onClick={() => setMenuOpen(true)} aria-label="Abrir menú">
                  <i className="fas fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />
    </>
  );
};

export default Header;
