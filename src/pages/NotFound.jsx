import usePageTitle from "../hooks/usePageTitle";
import Button from "../components/Button";

export default function NotFound() {
  usePageTitle("Page not found | Aqua Care Solutions", "The page you are looking for does not exist.");
  return (
    <section className="section">
      <div className="container center notfound">
        <p className="notfound__code">404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <div className="hero__btns" style={{ justifyContent: "center" }}>
          <Button to="/">Go to Home</Button>
          <Button to="/products" variant="outline">View Products</Button>
        </div>
      </div>
    </section>
  );
}
