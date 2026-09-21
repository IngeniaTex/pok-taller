import site from "@/components/data/site";

const Social = () => {
  return (
    <ul className="social-links">
      {site.social.map((item) => (
        <li key={item.id}>
          <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
            <i className={item.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
