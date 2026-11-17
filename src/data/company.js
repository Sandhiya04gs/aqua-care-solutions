export const company = {
  name: "Aqua Care Solutions",
  tagline: "We Treat the Water Naturally...",
  heroTagline: "Pure Water, Healthy Life.",
  business: "Domestic & Industrial RO Sales and Service",
  certification: "ISO 9001:2015 Certified Company",
  contactPerson: "Giri S",
  phone1: { display: "72000 10271", tel: "+917200010271" },
  phone2: { display: "98942 40380", tel: "+919894240380" },
  email: "aquacaresolutions777@gmail.com",
  whatsappNumber: "917200010271",
  address: {
    full: "No.15, 3rd Street, Gandhi Nagar, Nandivaram, Guduvancheri, Chengalpattu, Tamil Nadu - 603 202",
    short: "Guduvancheri, Chengalpattu, Tamil Nadu, India",
  },
};

// Exact location from the Google Maps pin
export const mapInfo = {
  lat: 12.8410976,
  lng: 80.0599279,
  link: "https://maps.app.goo.gl/nH6aHxQeRGCTxy487",
};

export const navLinks = [
  { label: "Home", to: "/", end: true },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Why Choose Us", to: "/why-choose-us" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export const whyChoose = [
  { icon: "shield", title: "Quality Products", text: "Domestic to industrial RO systems selected for dependable, long-term performance." },
  { icon: "user", title: "Expert Technicians", text: "Trained technicians handle installation, servicing and repairs on site." },
  { icon: "clock", title: "Reliable Service", text: "Timely maintenance visits and quick repairs so your water supply stays on." },
  { icon: "headset", title: "Customer Support", text: "Call or WhatsApp us any time you have a question about your system." },
  { icon: "drop", title: "Suitable Solutions", text: "We match the purification system to your water source and daily usage." },
];

// Opens a WhatsApp chat with a pre-filled message
export function buildWhatsAppUrl(message) {
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
