import site from "@/components/data/site";

const WhyUs = () => {
  const { whyUs } = site;
  return (
    <section className="why-us__area section-padding" id="por-que-elegirnos">
      <div className="container">
        <div className="row align-items-center gy-5 flex-lg-row-reverse">
          <div className="col-xl-5 col-lg-6">
            <div className="why-us__image">
              <img src={whyUs.image} alt="Equipo de trabajo" />
              <div className="why-us__image-highlight">
                <strong>{whyUs.highlight.value}</strong>
                <span>{whyUs.highlight.label}</span>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="why-us__content">
              <span className="subtitle-one">{whyUs.subtitle}</span>
              <h2>{whyUs.title}</h2>
              <p>{whyUs.text}</p>
              <div className="row gy-4">
                {whyUs.features.map((feature) => (
                  <div className="col-md-6" key={feature.title}>
                    <div className="why-us__feature">
                      <div className="why-us__feature-icon"><i className={feature.icon}></i></div>
                      <div>
                        <h5>{feature.title}</h5>
                        <p>{feature.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
