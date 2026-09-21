import site from "@/components/data/site";

// Botón de WhatsApp reutilizable. variant: "filled" (verde) | "dark" | "outline"
const WhatsappButton = ({ variant = "filled", compact = false, label = "WhatsApp", message = "", className = "" }) => {
  const href = message
    ? `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`
    : site.contact.whatsapp;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button whatsapp-button--${variant} ${compact ? "whatsapp-button--compact" : ""} ${className}`}
    >
      <i className="fab fa-whatsapp"></i>
      <span>{label}</span>
    </a>
  );
};

export default WhatsappButton;
