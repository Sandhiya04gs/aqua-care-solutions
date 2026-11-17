import Button from "./Button";
import Icon from "./Icon";
import { buildWhatsAppUrl } from "../data/company";

export default function ServiceCard({ service, withButton = true }) {
  const msg = `Hello Aqua Care Solutions, I would like to enquire about your service: ${service.title}.`;
  return (
    <article className="card service-card">
      <span className="icon-badge"><Icon name={service.icon} size={26} /></span>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
      {withButton && <Button href={buildWhatsAppUrl(msg)} variant="outline" size="sm"><Icon name="whatsapp" size={16} />Enquire</Button>}
    </article>
  );
}
