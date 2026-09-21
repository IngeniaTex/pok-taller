import site from "@/components/data/site";

const Stats = () => {
  return (
    <div className="stats__area">
      <div className="container">
        <div className="stats__area-card">
          {site.stats.map((stat) => (
            <div className="stats__area-item" key={stat.label}>
              <i className={stat.icon}></i>
              <div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
