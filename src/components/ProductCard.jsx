import Button from "./Button";
import Icon from "./Icon";
import ProductImage from "./ProductImage";
import { buildWhatsAppUrl } from "../data/company";

export default function ProductCard({ product }) {
  const msg = `Hello Aqua Care Solutions, I would like to enquire about: ${product.name}. Please share details.`;
  return (
    <article className="card product-card">
      <ProductImage product={product} />
      <div className="card__body">
        <span className="chip">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.short}</p>
        <div className="card__actions">
          <Button to={`/products/${product.id}`} variant="outline" size="sm">View Details</Button>
          <Button href={buildWhatsAppUrl(msg)} variant="green" size="sm"><Icon name="whatsapp" size={16} />Enquire Now</Button>
        </div>
      </div>
    </article>
  );
}
