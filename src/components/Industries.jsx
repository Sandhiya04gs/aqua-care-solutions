import Icon from "./Icon";

const list = [
  { icon: "home", name: "Homes and villas" },
  { icon: "building", name: "Apartments" },
  { icon: "user", name: "Offices" },
  { icon: "book", name: "Schools and colleges" },
  { icon: "plus", name: "Hospitals and clinics" },
  { icon: "cup", name: "Hotels and restaurants" },
  { icon: "factory", name: "Factories and industries" },
  { icon: "building", name: "Commercial buildings" },
];

export default function Industries() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Who we serve</span>
          <h2>Pure water for every space</h2>
          <p>From a single home purifier to a full industrial plant, we have a system that fits.</p>
        </div>
        <div className="ind-grid">
          {list.map((i) => (
            <div key={i.name} className="ind-card">
              <span className="icon-badge"><Icon name={i.icon} size={24} /></span>
              <h3>{i.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
