"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import site from "@/components/data/site";
import servicesData from "@/components/data/services-data";
import Social from "@/components/common/social";

// Menú móvil (panel lateral). Mismos items que el desktop: site.nav + services-data.
const MobileMenu = ({ isOpen, setIsOpen }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const close = () => setIsOpen(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <>
      <div className={`menu__overlay ${isOpen ? "show" : ""}`} onClick={close}></div>
      <div className={`menu__bar-popup ${isOpen ? "show" : ""}`}>
        <div className="menu__bar-popup-top">
          <Link href="#inicio" onClick={close}>
            <img src={site.brand.logoLight} alt={site.brand.name} />
          </Link>
          <button type="button" className="menu__bar-popup-close" onClick={close} aria-label="Cerrar menú">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul className="menu__bar-popup-nav">
          {site.nav.map((item) => {
            const isServices = item.href === "#servicios";
            return (
              <li key={item.href}>
                <div className="menu__bar-popup-nav-row">
                  <Link href={item.href} onClick={close}>{item.label}</Link>
                  {isServices && (
                    <button
                      type="button"
                      className={`menu__bar-popup-expand ${servicesOpen ? "open" : ""}`}
                      onClick={() => setServicesOpen(!servicesOpen)}
                      aria-label="Ver servicios"
                    >
                      <i className="fas fa-angle-down"></i>
                    </button>
                  )}
                </div>
                {isServices && (
                  <ul className="menu__bar-popup-sub" style={{ display: servicesOpen ? "block" : "none" }}>
                    {servicesData.map((service) => (
                      <li key={service.id}>
                        <Link href={`#servicio-${service.id}`} onClick={close}>{service.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <div className="menu__bar-popup-contact">
          <a href={site.contact.phoneHref}><i className="fas fa-phone-alt"></i>{site.contact.phone}</a>
          <a href={`mailto:${site.contact.email}`}><i className="fas fa-envelope"></i>{site.contact.email}</a>
          <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="whatsapp-button whatsapp-button--filled">
            <i className="fab fa-whatsapp"></i><span>Escribir por WhatsApp</span>
          </a>
          <Social />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
