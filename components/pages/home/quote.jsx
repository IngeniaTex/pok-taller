"use client";
import { useEffect, useState } from "react";
import site from "@/components/data/site";
import servicesData from "@/components/data/services-data";
import WhatsappButton from "@/components/common/whatsapp-button";

const EMPTY_FORM = { name: "", phone: "", service: "", location: "", message: "" };

// Formulario de presupuesto. Al enviar hace POST a /api/cotizar (correo vía Gmail SMTP, ver app/api/cotizar/route.js).
// Si el correo falla o no está configurado, ofrece enviar el mismo mensaje por WhatsApp.
const Quote = () => {
  const { quote, contact } = site;
  const [form, setForm] = useState(EMPTY_FORM);
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");

  // Preselecciona el servicio cuando se llega desde "Cotizar este servicio" (evento de services.jsx)
  useEffect(() => {
    const onSelect = (e) => {
      if (servicesData.some((s) => s.id === e.detail)) {
        setForm((prev) => ({ ...prev, service: e.detail }));
      }
    };
    window.addEventListener("quote-service", onSelect);
    return () => window.removeEventListener("quote-service", onSelect);
  }, []);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const serviceName = servicesData.find((s) => s.id === form.service)?.title ?? form.service;
  const whatsappText = [
    `Hola ${site.brand.name}, quiero solicitar un presupuesto.`,
    `• Nombre: ${form.name}`,
    `• Teléfono: ${form.phone}`,
    `• Servicio: ${serviceName}`,
    form.location && `• Ubicación: ${form.location}`,
    `• Detalles: ${form.message}`,
  ].filter(Boolean).join("\n");
  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/cotizar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setStatus("idle");
  };

  return (
    <section className="quote__area section-padding" id="cotizar">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-xl-8 col-lg-8">
            <div className="quote__card">
              <div className="quote__card-header">
                <span className="subtitle-one">{quote.subtitle}</span>
                <h3>{quote.title}</h3>
                <p>{quote.text}</p>
              </div>
              {status === "sent" ? (
                <div className="quote__alert quote__alert--success" role="status">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>{quote.success.title}</strong>
                    <p>{quote.success.text}</p>
                    <button type="button" className="btn-three" onClick={resetForm}>{quote.success.again}</button>
                  </div>
                </div>
              ) : (
              <form onSubmit={handleSubmit}>
                <div className="row gy-3">
                  <div className="col-md-6">
                    <div className="quote__field">
                      <label htmlFor="name">Nombre *</label>
                      <input type="text" id="name" name="name" placeholder="Tu nombre" required value={form.name} onChange={update} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="quote__field">
                      <label htmlFor="phone">Teléfono / WhatsApp *</label>
                      <input type="tel" id="phone" name="phone" placeholder="+52 999 000 0000" required value={form.phone} onChange={update} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="quote__field">
                      <label htmlFor="service">¿Qué necesitas? *</label>
                      <div className="quote__select">
                        <select id="service" name="service" required value={form.service} onChange={update}>
                          <option value="" disabled>Selecciona un servicio</option>
                          {servicesData.map((service) => (
                            <option key={service.id} value={service.id}>{service.title}</option>
                          ))}
                          <option value="Varios servicios">Varios servicios</option>
                          <option value="Aún no lo sé">Aún no lo sé, necesito asesoría</option>
                        </select>
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="quote__field">
                      <label htmlFor="location">Colonia / zona</label>
                      <input type="text" id="location" name="location" placeholder="¿Dónde es el trabajo?" value={form.location} onChange={update} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="quote__field">
                      <label htmlFor="message">Cuéntanos del proyecto *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Medidas aproximadas, material que te gustaría, fecha en que lo necesitas o cualquier detalle que nos ayude a cotizar."
                        required
                        value={form.message}
                        onChange={update}
                      ></textarea>
                    </div>
                  </div>
                </div>
                {status === "error" && (
                  <div className="quote__alert quote__alert--error" role="alert">
                    <i className="fas fa-exclamation-circle"></i>
                    <div>
                      <strong>{quote.error.title}</strong>
                      <p>{quote.error.text}</p>
                      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-three">
                        <i className="fab fa-whatsapp"></i>{quote.error.whatsapp}
                      </a>
                    </div>
                  </div>
                )}
                <div className="quote__footer">
                  <button type="submit" className="btn-one" disabled={status === "sending"}>
                    <i className={status === "sending" ? "fas fa-spinner fa-spin" : "fas fa-paper-plane"}></i>
                    {status === "sending" ? quote.sendingLabel : quote.submitLabel}
                  </button>
                  <p className="quote__privacy"><i className="fas fa-lock"></i>{quote.privacy}</p>
                </div>
              </form>
              )}
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="quote__aside">
              <h4>{quote.aside.title}</h4>
              <p>{quote.aside.text}</p>
              <WhatsappButton variant="filled" label="Escribir por WhatsApp" className="w-100 justify-content-center" />
              <ul className="quote__aside-list">
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <span>Llámanos</span>
                    <a href={contact.phoneHref}>{contact.phone}</a>
                  </div>
                </li>
                <li>
                  <i className="fas fa-map-marked-alt"></i>
                  <div>
                    <span>Zona de servicio</span>
                    <strong>{contact.serviceArea}</strong>
                  </div>
                </li>
                <li>
                  <i className="fas fa-reply"></i>
                  <div>
                    <span>Tiempo de respuesta</span>
                    <strong>{quote.aside.responseTime}</strong>
                  </div>
                </li>
              </ul>
              {contact.mapEmbed && (
                <div className="quote__aside-map">
                  <iframe src={contact.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación" allowFullScreen></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
