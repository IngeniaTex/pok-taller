import Link from "next/link";
import site from "@/components/data/site";
import WhatsappButton from "@/components/common/whatsapp-button";

const Hero = () => {
  const { hero } = site;
  return (
    <section className="hero__area" id="inicio">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-xl-7 col-lg-6">
            <div className="hero__content">
              <span className="subtitle-one"><i className="fas fa-medal"></i>{hero.subtitle}</span>
              <h1>{hero.title}</h1>
              <p>{hero.text}</p>
              <div className="hero__content-buttons">
                <Link href={hero.primaryCta.href} className="btn-one">
                  {hero.primaryCta.label}<i className="fas fa-arrow-right"></i>
                </Link>
                <WhatsappButton variant="outline" label="Escribir por WhatsApp" />
              </div>
              <div className="hero__content-rating">
                <div className="hero__content-rating-stars">
                  {[1, 2, 3, 4, 5].map((n) => <i className="fas fa-star" key={n}></i>)}
                </div>
                <span><strong>{hero.rating.value}</strong> · {hero.rating.count}</span>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-9">
            <div className="hero__image">
              <div className="hero__image-frame"></div>
              <img src={hero.image} alt={site.brand.name} />
              <div className="hero__image-badge">
                <strong>{hero.badge.value}</strong>
                <span>{hero.badge.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
