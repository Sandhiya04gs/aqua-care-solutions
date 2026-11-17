export const categories = [
  "Domestic RO Water Purifiers",
  "Commercial RO Systems",
  "Industrial RO Systems",
  "Water Treatment Equipment",
  "RO Spare Parts and Accessories",
];

// `image` is optional: put a photo in public/images/products/ and set e.g. "/images/products/smart.jpg".
// If it is empty or fails to load, the built-in illustration (`kind`) is shown.
export const products = [
  { id: "10-lph-ro", name: "10 LPH RO Purifier", category: categories[0], kind: "rack", image: "/images/products/10-lph-ro.jpg",
    short: "Compact multi-stage RO purifier for homes.",
    details: ["Multi-stage RO purification for household drinking water.", "Compact design suited to kitchens and small families.", "Installation and service support from our technicians."] },
  { id: "smart-ro", name: "Smart RO Purifier", category: categories[0], kind: "smart", image: "/images/products/smart-ro.jpg",
    short: "Wall-mount RO purifier with a modern, sleek body.",
    details: ["Stylish wall-mount domestic RO purifier.", "Built for everyday household drinking water.", "Guidance on filter replacement schedules."] },
  { id: "water-pia", name: "Water Pia RO Purifier", category: categories[0], kind: "tall", image: "/images/products/water-pia.jpg",
    short: "Slim tall-body RO purifier with a large storage tank.",
    details: ["Slim body that fits narrow wall spaces.", "Suitable for homes and small offices.", "Installation and annual maintenance available."] },
  { id: "prolife-ro", name: "Prolife RO Purifier", category: categories[0], kind: "prolife", image: "/images/products/prolife-ro.jpg",
    short: "Domestic RO purifier with a visible filter chamber.",
    details: ["Domestic RO with transparent filter window.", "Easy to check and service.", "Spare parts and filters available on request."] },
  { id: "whale-ro", name: "Whale RO Purifier", category: categories[0], kind: "whale", image: "/images/products/whale-ro.jpg",
    short: "High-capacity domestic RO with a patterned storage tank.",
    details: ["Larger storage for bigger families.", "Domestic RO purification with reliable service support.", "Ask us about the best model for your water source."] },
  { id: "kyk-hydrogen-alkaline", name: "KYK Hydrogen / Alkaline Purifier", category: categories[0], kind: "alkaline", image: "/images/products/kyk-hydrogen-alkaline.jpg",
    short: "Hydrogen and alkaline water system with digital display.",
    details: ["Alkaline / hydrogen water system with a digital control panel.", "Premium option for health-focused households.", "Contact us for model details and a demonstration."] },

  { id: "50-100-lph-commercial-ro", name: "50 LPH & 100 LPH Commercial RO", category: categories[1], kind: "rack", image: "/images/products/50-100-lph-commercial-ro.jpg",
    short: "Rack-mounted RO systems for shops, clinics, schools and offices.",
    details: ["Available in 50 LPH and 100 LPH capacities.", "Suitable for commercial drinking water needs.", "Complete installation, commissioning and servicing."] },

  { id: "500-lph-industrial-ro", name: "500 LPH & Above Industrial RO", category: categories[2], kind: "plant", image: "/images/products/500-lph-industrial-ro.jpg",
    short: "Industrial RO plants with pressure vessels and pump skid.",
    details: ["Capacities from 500 LPH and above, built to your requirement.", "Suitable for factories, hospitals, hotels and institutions.", "Site survey and water testing guidance."] },
  { id: "packaged-drinking-water-plant", name: "Packaged Drinking Water Plant Project", category: categories[2], kind: "pdw", image: "/images/products/packaged-drinking-water-plant.jpg",
    short: "Turnkey packaged drinking water plant projects.",
    details: ["Complete plant projects for packaged drinking water.", "Planning, supply, installation and commissioning support.", "Contact us to discuss capacity and requirements."] },
  { id: "stp-etp-plants", name: "STP / ETP Plants", category: categories[2], kind: "stp", image: "/images/products/stp-etp-plants.jpg",
    short: "Sewage and effluent treatment plants for industry and housing.",
    details: ["Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP).", "Designed around your site and discharge needs.", "Installation and service support."] },

  { id: "automatic-softener", name: "Automatic Water Softener", category: categories[3], kind: "softener", image: "/images/products/automatic-softener.jpg",
    short: "Automatic softener to remove hardness from water.",
    details: ["Reduces hardness to protect pipes, heaters and RO membranes.", "Automatic regeneration with a brine tank.", "For homes, apartments and industries."] },
  { id: "iron-remover-plant", name: "Iron Remover Plant", category: categories[3], kind: "plant", image: "/images/products/iron-remover-plant.jpg",
    short: "Removes excess iron from borewell and tank water.",
    details: ["Helps with iron-rich water and staining.", "Often used before RO or softener systems.", "Sizing based on your water analysis."] },

  { id: "ro-membrane", name: "RO Membranes", category: categories[4], kind: "parts", image: "/images/products/ro-membrane.jpg",
    short: "Replacement RO membranes for domestic and industrial units.",
    details: ["Replacement membranes for different RO capacities.", "Fitted by our technicians on request.", "Message us your purifier model for the right part."] },
  { id: "filter-cartridges", name: "Filter Cartridges & Accessories", category: categories[4], kind: "parts", image: "/images/products/filter-cartridges.jpg",
    short: "Sediment and carbon cartridges, pumps, SMPS and fittings.",
    details: ["Sediment and carbon filters, pumps, SMPS and fittings.", "Spares for common RO brands.", "Send your model name on WhatsApp to check availability."] },
];

export const getProduct = (id) => products.find((p) => p.id === id);
