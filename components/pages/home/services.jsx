"use client";
import Link from "next/link";
import servicesData from "@/components/data/services-data";
import SectionTitle from "@/components/common/section-title";

// Muestra todos los servicios de services-data. Cada tarjeta tiene ancla #servicio-<id>.
// "Cotizar este servicio" lleva a #cotizar y avisa al formulario (evento quote-service) qué servicio preseleccionar.
const Services = () => {
  const selectService = (id) => window.dispatchEvent(new CustomEvent("quote-service", { detail: id }));

  return (
    <section className="services__area section-padding" id="servicios">
      <div className="container">
        <SectionTitle
          subtitle="Nuestros servicios"
          title="Todo lo que tu casa o negocio necesita, en un solo taller"
        />
        <div className="row gy-4">
          {servicesData.map((service) => (
            <div className="col-xl-4 col-lg-4 col-md-6 d-flex" key={service.id} id={`servicio-${service.id}`}>
              <div className="services__card w-100">
                <div className="services__card-icon"><i className={service.icon}></i></div>
                <h4>{service.title}</h4>
                <p>{service.des}</p>
                <ul className="services__card-list">
                  {service.features.map((feature) => (
                    <li key={feature}><i className="fas fa-check"></i>{feature}</li>
                  ))}
                </ul>
                <Link href="#cotizar" className="btn-three" onClick={() => selectService(service.id)}>
                  Cotizar este servicio<i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
