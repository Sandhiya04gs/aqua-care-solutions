import Icon from "./Icon";
import { company } from "../data/company";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <span className="topbar__iso"><Icon name="shield" size={14} />{company.certification}</span>
        <span className="topbar__links">
          <a href={`tel:${company.phone1.tel}`}><Icon name="phone" size={14} />{company.phone1.display}</a>
          <a href={`tel:${company.phone2.tel}`}><Icon name="phone" size={14} />{company.phone2.display}</a>
          <a href={`mailto:${company.email}`}><Icon name="mail" size={14} />{company.email}</a>
        </span>
      </div>
    </div>
  );
}
