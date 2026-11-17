import usePageTitle from "../hooks/usePageTitle";
import Button from "../components/Button";
import Icon from "../components/Icon";

const tds = [
  ["Up to about 500 ppm", "Within the BIS desirable limit for drinking water. UF or UV may be enough, and a test tells you."],
  ["500 to 2,000 ppm", "Above the desirable limit. RO is commonly used to bring TDS down."],
  ["Above 2,000 ppm", "Very high. Needs an RO system designed for the water, often with pre-treatment."],
];
const fixes = [
  ["RO purifier or plant", "Reduces dissolved salts (TDS) and many contaminants.", "drop"],
  ["Water softener", "Removes hardness that causes scale on taps, heaters and membranes.", "filter"],
  ["Iron remover", "Reduces iron that stains water and clogs filters.", "tool"],
  ["STP / ETP plant", "Treats sewage or industrial effluent before it is reused or discharged.", "factory"],
];
const faqs = [
  ["How do I find my water TDS?", "A handheld TDS meter gives a quick reading. For a full picture, get a lab test. We can also advise on testing."],
  ["Which capacity do I need?", "It depends on how many people use the water and what for. Tell us your daily need and water source and we will size it."],
  ["Do I need a softener with RO?", "If your water is hard, a softener before the RO protects the membrane. A water test tells you."],
];

export default function Guide() {
  usePageTitle("RO Buying Guide | Aqua Care Solutions", "Simple guide to TDS, water sources, RO capacity, softeners and iron removers.");
  return (
    <>
      <section className="page-head"><div className="container"><h1>RO Buying Guide</h1><p>Simple answers before you choose a system.</p></div></section>

      <section className="section">
        <div className="container">
          <div className="section-head"><h2>What is TDS?</h2><p>TDS means Total Dissolved Solids: the salts and minerals dissolved in water, measured in ppm. Use this as a rough guide, then get your water tested.</p></div>
          <div className="grid grid--3">
            {tds.map(([r, t]) => (
              <div key={r} className="card pad"><span className="chip">{r}</span><p style={{ marginTop: 8, marginBottom: 0 }}>{t}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head"><h2>Which equipment fixes what?</h2></div>
          <div className="grid grid--4">
            {fixes.map(([t, d, i]) => (
              <div key={t} className="why"><span className="icon-badge"><Icon name={i} size={22} /></span><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col two-col--top">
          <div>
            <h2>Where does your water come from?</h2>
            <ul className="tick-list">
              <li><Icon name="check" size={18} /><span><strong>Borewell:</strong> often higher TDS and sometimes iron or hardness.</span></li>
              <li><Icon name="check" size={18} /><span><strong>Municipal supply:</strong> usually lower TDS, can vary by season and area.</span></li>
              <li><Icon name="check" size={18} /><span><strong>Water tanker:</strong> quality varies a lot, so test before you decide.</span></li>
            </ul>
          </div>
          <div>
            <h2>Choosing capacity</h2>
            <p>Homes use compact purifiers. Shops, clinics and schools often use 50 or 100 LPH systems. Factories, hotels and institutions need 500 LPH and above. Send us your daily need and we will recommend a size.</p>
            <div className="card__actions"><Button to="/find-ro">Find your RO</Button><Button to="/quote" variant="outline">Request a quote</Button></div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container faq-wrap">
          <div className="section-head"><h2>Common questions</h2></div>
          {faqs.map(([q, a]) => <details key={q} className="faq"><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </section>
    </>
  );
}
