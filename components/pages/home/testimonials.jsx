import site from "@/components/data/site";
import SectionTitle from "@/components/common/section-title";

const Testimonials = () => {
  const { testimonials } = site;
  return (
    <section className="testimonials__area section-padding" id="testimonios">
      <div className="container">
        <SectionTitle subtitle={testimonials.subtitle} title={testimonials.title} />
        <div className="row gy-4">
          {testimonials.items.map((item) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={item.name}>
              <div className="testimonials__card">
                <i className="fas fa-quote-right testimonials__card-quote"></i>
                <div className="testimonials__card-rating">
                  {Array.from({ length: item.rating }).map((_, n) => <i className="fas fa-star" key={n}></i>)}
                </div>
                <p>“{item.text}”</p>
                <div className="testimonials__card-author">
                  <img src={item.avatar} alt={item.name} />
                  <div>
                    <h5>{item.name}</h5>
                    <span>{item.service}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
