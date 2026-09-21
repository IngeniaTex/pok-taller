import site from "@/components/data/site";

// Botón flotante de WhatsApp (esquina inferior izquierda).
const WhatsappFloat = () => {
  const message = `Hola, me gustaría solicitar un presupuesto con ${site.brand.name}.`;
  return (
    <a
      href={`https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Escribir por WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
      <span>¿Te cotizamos?</span>
    </a>
  );
};

export default WhatsappFloat;
