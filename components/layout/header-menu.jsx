import Link from "next/link";
import site from "@/components/data/site";
import servicesData from "@/components/data/services-data";

// Menú desktop. Los items vienen de site.nav; "Servicios" despliega services-data.
const MainMenu = ({ onNavigate }) => {
  return (
    <ul>
      {site.nav.map((item) => {
        const isServices = item.href === "#servicios";
        return (
          <li key={item.href} className={isServices ? "menu-item-has-children" : ""}>
            <Link href={item.href} onClick={onNavigate}>
              {item.label}
              {isServices && <i className="fas fa-angle-down"></i>}
            </Link>
            {isServices && (
              <ul className="sub-menu">
                {servicesData.map((service) => (
                  <li key={service.id}>
                    <Link href={`#servicio-${service.id}`} onClick={onNavigate}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MainMenu;
