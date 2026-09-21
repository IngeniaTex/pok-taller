import site from "@/components/data/site";
import SectionTitle from "@/components/common/section-title";

const Materials = () => {
  const { materials } = site;
  return (
    <section className="materials__area section-padding" id="materiales">
      <div className="container">
        <SectionTitle subtitle={materials.subtitle} title={materials.title} text={materials.text} />
        <div className="row gy-4 justify-content-center">
          {materials.items.map((item) => (
            <div className="col-lg-6 col-md-6" key={item.title}>
              <div className="materials__card">
                <div className="materials__card-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="materials__card-body">
                  <div className="materials__card-icon"><i className={item.icon}></i></div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <ul className="materials__card-tags">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
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
