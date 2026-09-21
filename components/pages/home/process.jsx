import site from "@/components/data/site";
import SectionTitle from "@/components/common/section-title";

const Process = () => {
  const { process } = site;
  return (
    <section className="process__area section-padding" id="proceso">
      <div className="container">
        <SectionTitle subtitle={process.subtitle} title={process.title} light />
        <div className="row gy-4">
          {process.steps.map((step, index) => (
            <div className="col-xl-3 col-lg-3 col-md-6" key={step.title}>
              <div className="process__card">
                <span className="process__card-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="process__card-icon"><i className={step.icon}></i></div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
