import site from "@/components/data/site";
import WhatsappButton from "@/components/common/whatsapp-button";

const Cta = () => {
  const { cta, contact } = site;
  return (
    <section className="cta__area">
      <div className="container">
        <div className="cta__inner">
          <div className="cta__content">
            <h3>{cta.title}</h3>
            <p>{cta.text}</p>
          </div>
          <div className="cta__buttons">
            <a href={contact.phoneHref} className="btn-two">
              <i className="fas fa-phone-alt"></i>{contact.phone}
            </a>
            <WhatsappButton variant="dark" label="WhatsApp" compact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
