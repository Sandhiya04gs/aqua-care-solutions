import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import TopBar from "./components/TopBar";
import FloatingActions from "./components/FloatingActions";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import WhyChoose from "./pages/WhyChoose";
import Privacy from "./pages/Privacy";
import Quote from "./pages/Quote";
import ServiceRequest from "./pages/ServiceRequest";
import FindRo from "./pages/FindRo";
import Guide from "./pages/Guide";
import Reviews from "./pages/Reviews";
export default function App() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/why-choose-us" element={<WhyChoose />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/service-request" element={<ServiceRequest />} />
          <Route path="/find-ro" element={<FindRo />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
