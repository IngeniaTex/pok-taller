import Link from "next/link";
import site from "@/components/data/site";
import servicesData from "@/components/data/services-data";
import Social from "@/components/common/social";

const Footer = () => {
  return (
    <footer className="footer__area">
      <div className="container">
        <div className="row gy-5 justify-content-between">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="footer__widget">
              <Link href="#inicio" className="footer__logo">
                <img src={site.brand.logoLight} alt={site.brand.name} />
              </Link>
              <p>{site.footer.about}</p>
              <Social />
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
            <div className="footer__widget">
              <h4>Servicios</h4>
              <ul className="footer__links">
                {servicesData.map((service) => (
                  <li key={service.id}>
                    <Link href={`#servicio-${service.id}`}><i className="fas fa-angle-right"></i>{service.shortTitle}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
            <div className="footer__widget">
              <h4>Enlaces</h4>
              <ul className="footer__links">
                {site.footer.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}><i className="fas fa-angle-right"></i>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer__widget">
              <h4>Contacto</h4>
              <ul className="footer__contact">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{site.contact.address}</span>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <a href={site.contact.phoneHref}>{site.contact.phone}</a>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="footer__copyright-inner">
            <p>{site.footer.copyright}</p>
            {site.footer.credit && (
              <a href={site.footer.credit.href} target="_blank" rel="noopener noreferrer">{site.footer.credit.label}</a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
