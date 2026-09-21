import Link from "next/link";
import site from "@/components/data/site";

// Sección "Nuestro material": muestrario de melamina + ventajas del material.
const Materials = () => {
  const { materials } = site;
  return (
    <section className="materials__area section-padding" id="materiales">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-xl-5 col-lg-6">
            <div className="materials__image">
              <img src={materials.image} alt={materials.imageAlt} />
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="materials__content">
              <span className="subtitle-one">{materials.subtitle}</span>
              <h2>{materials.title}</h2>
              <p>{materials.text}</p>
              <ul className="materials__list">
                {materials.features.map((feature) => (
                  <li key={feature.title}>
                    <i className={feature.icon}></i>
                    <div>
                      <h5>{feature.title}</h5>
                      <p>{feature.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="materials__bottom">
                <Link href={materials.cta.href} className="btn-one">
                  {materials.cta.label}<i className="fas fa-arrow-right"></i>
                </Link>
                <span className="materials__note">{materials.note}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
