// Encabezado de sección: etiqueta naranja + título. align: "center" | "left"
const SectionTitle = ({ subtitle, title, text, align = "center", light = false }) => {
  return (
    <div className={`section-title section-title--${align} ${light ? "section-title--light" : ""}`}>
      {subtitle && <span className="subtitle-one">{subtitle}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
};

export default SectionTitle;
