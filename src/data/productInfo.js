import { categories } from "./products";

/* Extra content shown on each product's "View Details" page.
   Edit the text here. Add real specifications when you have them from your supplier. */

const priceFaq = { q: "What is the price?", a: "Price depends on the model and your requirement. Send us a WhatsApp message or call and we will share a quote." };

export const categoryInfo = {
  [categories[0]]: {
    stagesTitle: "How a domestic RO purifier works",
    stages: [
      ["Sediment filter", "Removes dust, sand and visible particles from incoming water."],
      ["Carbon filter", "Reduces chlorine, odour and taste problems."],
      ["RO membrane", "Reduces dissolved salts (TDS) and other contaminants."],
      ["Storage tank and tap", "Keeps purified water ready for drinking and cooking."],
    ],
    included: ["Advice on the right model for your water", "Installation by our technicians", "Demo on usage and filter care", "Maintenance, repair and spares support"],
    faqs: [
      { q: "Do you install the purifier?", a: "Yes. Our technicians install it at your home and explain how to use and maintain it." },
      { q: "How often should filters be changed?", a: "It depends on your water quality and usage. We will suggest a service schedule when we install it." },
      priceFaq,
    ],
  },
  [categories[1]]: {
    stagesTitle: "How a commercial RO system works",
    stages: [
      ["Pre-filtration", "Sediment and carbon filters protect the membrane."],
      ["Pump and RO membrane", "Pressurised water passes through the RO membrane to reduce dissolved salts."],
      ["Storage and dispensing", "Treated water is stored and dispensed for daily use."],
    ],
    included: ["Site visit and water source check", "Installation and commissioning", "Operator guidance", "Maintenance, repair and spares support"],
    faqs: [
      { q: "Which capacity do I need?", a: "It depends on how many people use the water and for what. Tell us your daily usage and we will suggest 50 LPH, 100 LPH or higher." },
      { q: "Do you offer service contracts?", a: "Yes. Ask us about regular maintenance visits for your system." },
      priceFaq,
    ],
  },
  [categories[2]]: {
    stagesTitle: "How an industrial plant is delivered",
    stages: [
      ["Requirement and water check", "We understand your water source, quality and daily volume."],
      ["Design and supply", "The plant is sized and supplied to match your requirement."],
      ["Installation and commissioning", "Our team installs the plant and runs it to confirm performance."],
      ["Service and support", "Maintenance, repairs and spares after handover."],
    ],
    included: ["Requirement discussion and site survey", "Plant supply and installation", "Commissioning and operator guidance", "Maintenance, repair and spares support"],
    faqs: [
      { q: "Can the plant be customised?", a: "Yes. Capacity and configuration are planned around your requirement and water quality." },
      { q: "How long does a project take?", a: "It depends on the size and type of plant. Contact us with your requirement for a timeline." },
      priceFaq,
    ],
  },
  [categories[3]]: {
    stagesTitle: "Where it fits in a water treatment setup",
    stages: [
      ["Raw water", "Borewell, tank or municipal supply."],
      ["Treatment equipment", "Softener or iron remover treats the water for hardness or iron."],
      ["RO or direct use", "Treated water goes to your RO system, or is used directly for general needs."],
    ],
    included: ["Water check and advice", "Installation by our technicians", "Regeneration and usage guidance", "Maintenance and spares support"],
    faqs: [
      { q: "How do I know if I need this?", a: "Hard water, scale on taps and heaters, or rust-coloured water are common signs. We can check your water and advise." },
      { q: "Can it be used with my RO purifier?", a: "Yes. It is often fitted before an RO system to protect the membrane." },
      priceFaq,
    ],
  },
  [categories[4]]: {
    stagesTitle: "How to order spare parts",
    stages: [
      ["Send your model", "Message us the purifier brand, model and the part you need."],
      ["We confirm availability", "We check the right part and share the price."],
      ["Pick up or fitting", "Collect the part, or ask our technician to fit it."],
    ],
    included: ["Part check against your purifier model", "Fitting by our technicians on request", "Availability confirmed on WhatsApp"],
    faqs: [
      { q: "How do I know which part I need?", a: "Send a photo of your purifier or its model name on WhatsApp and we will help you identify it." },
      { q: "Can your technician fit it?", a: "Yes, fitting and servicing are available on request." },
      priceFaq,
    ],
  },
};

export const productInfo = {
  "10-lph-ro": {
    overview: "A compact, rack-style RO purifier for homes that want safe drinking water at an affordable price. Its open design keeps the filters easy to see and easy to service.",
    features: ["Multi-stage RO purification", "Compact, space-saving design", "Easy access to filters for servicing", "Installation and service by our team"],
    suitable: ["Homes and apartments", "Small families", "Kitchens with limited space"],
    specs: [["Type", "Domestic RO (Reverse Osmosis)"], ["Capacity", "10 LPH (litres per hour)"], ["Installation", "By our technicians"], ["Service support", "Maintenance, repair and spares"]],
  },
  "smart-ro": {
    overview: "A wall-mount domestic RO purifier with a smooth, modern body and a clear storage tank. A good fit for families who want a purifier that looks good in the kitchen.",
    features: ["Wall-mount domestic RO", "Modern, easy-to-clean body", "Built for daily household use", "Filter replacement guidance"],
    suitable: ["Homes and apartments", "Families", "Kitchens where looks matter"],
    specs: [["Type", "Domestic RO (Reverse Osmosis)"], ["Mounting", "Wall mount"], ["Installation", "By our technicians"], ["Service support", "Maintenance, repair and spares"]],
  },
  "water-pia": {
    overview: "A slim, tall-body RO purifier that fits narrow wall spaces. Suitable for homes and small offices that need a neat, reliable purifier.",
    features: ["Slim body for narrow spaces", "Domestic RO purification", "Neat, wall-mount look", "Annual maintenance available"],
    suitable: ["Homes", "Small offices", "Compact kitchens"],
    specs: [["Type", "Domestic RO (Reverse Osmosis)"], ["Design", "Slim, tall body"], ["Installation", "By our technicians"], ["Service support", "Maintenance, repair and spares"]],
  },
  "prolife-ro": {
    overview: "A domestic RO purifier with a transparent filter chamber, so you can see the filters at a glance. Easy to check, easy to service.",
    features: ["Visible filter chamber", "Domestic RO purification", "Simple to service", "Spare parts available on request"],
    suitable: ["Homes", "Families who like to see filter condition", "Small offices"],
    specs: [["Type", "Domestic RO (Reverse Osmosis)"], ["Design", "Wall mount with filter window"], ["Installation", "By our technicians"], ["Service support", "Maintenance, repair and spares"]],
  },
  "whale-ro": {
    overview: "A domestic RO purifier with a large storage tank and a patterned body. Suitable for larger families that use more drinking water.",
    features: ["Larger storage tank", "Domestic RO purification", "Attractive patterned body", "Reliable after-sales service"],
    suitable: ["Larger families", "Homes with high water usage", "Small offices"],
    specs: [["Type", "Domestic RO (Reverse Osmosis)"], ["Storage", "Large tank"], ["Installation", "By our technicians"], ["Service support", "Maintenance, repair and spares"]],
  },
  "kyk-hydrogen-alkaline": {
    overview: "A hydrogen / alkaline water system with a digital control panel, for households that want a premium water solution. Ask us for a demonstration and full model details.",
    features: ["Hydrogen / alkaline water system", "Digital control panel", "Premium, modern design", "Demonstration on request"],
    suitable: ["Health-conscious households", "Homes wanting a premium system", "Customers who want a demo before buying"],
    specs: [["Type", "Hydrogen / Alkaline water system"], ["Control", "Digital display panel"], ["Installation", "By our technicians"], ["Model details", "Contact us"]],
  },
  "50-100-lph-commercial-ro": {
    overview: "Rack-mounted commercial RO systems in 50 LPH and 100 LPH capacities, built for businesses and institutions that need a steady supply of purified drinking water.",
    features: ["Available in 50 LPH and 100 LPH", "Sturdy rack-mounted frame", "Suited to daily commercial use", "Installation and servicing included in our support"],
    suitable: ["Shops, clinics and offices", "Schools and hostels", "Small factories and canteens"],
    specs: [["Type", "Commercial RO (Reverse Osmosis)"], ["Capacity", "50 LPH and 100 LPH"], ["Mounting", "Rack-mounted"], ["Service support", "Maintenance, repair and spares"]],
  },
  "500-lph-industrial-ro": {
    overview: "Industrial RO plants from 500 LPH and above, with pressure vessels and a pump skid. Planned around your water quality and daily requirement.",
    features: ["Capacities from 500 LPH and above", "Pressure vessels and pump skid", "Built to your requirement", "Site survey and water testing guidance"],
    suitable: ["Factories and industries", "Hospitals and hotels", "Institutions and large campuses"],
    specs: [["Type", "Industrial RO (Reverse Osmosis)"], ["Capacity", "500 LPH and above"], ["Configuration", "Built to requirement"], ["Service support", "Maintenance, repair and spares"]],
  },
  "packaged-drinking-water-plant": {
    overview: "Turnkey packaged drinking water plant projects. We help with planning, supply, installation and commissioning, so you can start production with confidence.",
    features: ["Complete plant project", "Planning and supply", "Installation and commissioning", "Support after handover"],
    suitable: ["Packaged water businesses", "New plant projects", "Expansion of existing plants"],
    specs: [["Type", "Packaged drinking water plant"], ["Scope", "Project based"], ["Capacity", "As per your requirement"], ["Service support", "Maintenance, repair and spares"]],
  },
  "stp-etp-plants": {
    overview: "Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP) designed around your site and discharge needs, for industries, apartments and institutions.",
    features: ["STP and ETP options", "Designed around your site", "Installation support", "Service and maintenance support"],
    suitable: ["Apartments and housing complexes", "Industries and factories", "Hotels and institutions"],
    specs: [["Type", "STP / ETP treatment plant"], ["Scope", "Project based"], ["Capacity", "As per your requirement"], ["Service support", "Maintenance and repair"]],
  },
  "automatic-softener": {
    overview: "An automatic water softener that reduces hardness to protect your pipes, water heaters and RO membranes. Comes with a brine tank for automatic regeneration.",
    features: ["Reduces water hardness", "Automatic regeneration with brine tank", "Protects pipes, heaters and RO membranes", "Suitable for homes and industry"],
    suitable: ["Homes and apartments", "Hotels and hostels", "Industries with hard water"],
    specs: [["Type", "Automatic water softener"], ["Components", "Softener tank and brine tank"], ["Installation", "By our technicians"], ["Service support", "Maintenance and spares"]],
  },
  "iron-remover-plant": {
    overview: "An iron remover plant for borewell and tank water that is high in iron. Helps with rust-coloured water and staining, and is often fitted before RO or softener systems.",
    features: ["Reduces excess iron in water", "Helps with staining", "Works well before RO or softener", "Sized from your water analysis"],
    suitable: ["Borewell water users", "Homes and apartments", "Industries and institutions"],
    specs: [["Type", "Iron remover plant"], ["Sizing", "Based on water analysis"], ["Installation", "By our technicians"], ["Service support", "Maintenance and spares"]],
  },
  "ro-membrane": {
    overview: "Replacement RO membranes for domestic and industrial systems. Send us your purifier model and we will confirm the right membrane.",
    features: ["For domestic and industrial RO units", "Model check before you buy", "Fitting by our technicians on request", "Helps restore water quality"],
    suitable: ["Existing RO purifier owners", "Offices and shops", "Industrial RO plants"],
    specs: [["Part", "RO membrane"], ["Fits", "Depends on your model"], ["Fitting", "On request"], ["Availability", "Confirm on WhatsApp"]],
  },
  "filter-cartridges": {
    overview: "Sediment and carbon cartridges, pumps, SMPS and fittings for common RO brands. Message us your model name to check availability.",
    features: ["Sediment and carbon cartridges", "Pumps, SMPS and fittings", "Spares for common RO brands", "Fitting by our technicians on request"],
    suitable: ["Home RO owners", "Offices and shops", "Service technicians"],
    specs: [["Parts", "Cartridges, pumps, SMPS, fittings"], ["Fits", "Depends on your model"], ["Fitting", "On request"], ["Availability", "Confirm on WhatsApp"]],
  },
};
