"use client";
import { useState } from "react";
import site from "@/components/data/site";
import servicesData from "@/components/data/services-data";
import SectionTitle from "@/components/common/section-title";

// Galería con filtro por categoría. Solo se muestran las categorías que tienen proyectos.
const Projects = () => {
  const { projects } = site;
  const [active, setActive] = useState("todos");

  const categories = servicesData.filter((service) =>
    projects.items.some((item) => item.category === service.id)
  );
  const visible = active === "todos" ? projects.items : projects.items.filter((item) => item.category === active);
  const categoryName = (id) => servicesData.find((service) => service.id === id)?.shortTitle ?? id;

  return (
    <section className="projects__area section-padding" id="proyectos">
      <div className="container">
        <SectionTitle subtitle={projects.subtitle} title={projects.title} />
        <div className="projects__filter">
          <button type="button" className={active === "todos" ? "active" : ""} onClick={() => setActive("todos")}>Todos</button>
          {categories.map((category) => (
            <button
              type="button"
              key={category.id}
              className={active === category.id ? "active" : ""}
              onClick={() => setActive(category.id)}
            >
              {category.shortTitle}
            </button>
          ))}
        </div>
        <div className="row gy-4">
          {visible.map((item) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={item.title}>
              <div className="projects__card">
                <img src={item.image} alt={item.title} />
                <div className="projects__card-overlay">
                  <span>{categoryName(item.category)}</span>
                  <h5>{item.title}</h5>
                  <p><i className="fas fa-map-marker-alt"></i>{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
