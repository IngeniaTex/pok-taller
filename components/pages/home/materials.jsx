import site from "@/components/data/site";
import SectionTitle from "@/components/common/section-title";

// Tarjetas de materiales. `image`, `badge` y `tags` son opcionales:
// sin imagen la tarjeta usa un encabezado decorativo con el icono.
const Materials = () => {
  const { materials } = site;
  return (
    <section className="materials__area section-padding" id="materiales">
      <div className="container">
        <SectionTitle subtitle={materials.subtitle} title={materials.title} text={materials.text} />
        <div className="row gy-4 justify-content-center">
          {materials.items.map((item) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={item.title}>
              <div className="materials__card">
                <div className={`materials__card-image ${item.image ? "" : "materials__card-image--blank"}`}>
                  {item.image ? (
                    <img src={item.image} alt={item.title} loading="lazy" />
                  ) : (
                    <i className={item.icon}></i>
                  )}
                  {item.badge && <span className="materials__card-badge">{item.badge}</span>}
                </div>
                <div className="materials__card-body">
                  <div className="materials__card-icon"><i className={item.icon}></i></div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <ul className="materials__card-list">
                    {item.benefits.map((benefit) => (
                      <li key={benefit}><i className="fas fa-check"></i>{benefit}</li>
                    ))}
                  </ul>
                  {item.tags && (
                    <ul className="materials__card-tags">
                      {item.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
