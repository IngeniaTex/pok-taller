import Link from "next/link";
import site from "@/components/data/site";

const About = () => {
  const { about } = site;
  return (
    <section className="about__area section-padding" id="nosotros">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-xl-6 col-lg-6">
            <div className="about__image">
              <img src={about.images[0]} alt="Nuestro taller" className="about__image-main" />
              <img src={about.images[1]} alt="Trabajo en obra" className="about__image-secondary" />
              <div className="about__image-badge">
                <strong>{about.badge.value}</strong>
                <span>{about.badge.label}</span>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about__content">
              <span className="subtitle-one">{about.subtitle}</span>
              <h2>{about.title}</h2>
              <p>{about.text}</p>
              <ul className="about__content-list">
                {about.points.map((point) => (
                  <li key={point}><i className="fas fa-check-circle"></i>{point}</li>
                ))}
              </ul>
              <div className="about__content-bottom">
                <Link href={about.cta.href} className="btn-one">
                  {about.cta.label}<i className="fas fa-arrow-right"></i>
                </Link>
                <div className="about__content-owner">
                  <strong>{about.owner.name}</strong>
                  <span>{about.owner.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
