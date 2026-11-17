// Future Django REST Framework integration point.
// Today the site is frontend-only: enquiries go to WhatsApp and product data is local.
// When the backend exists, set VITE_API_URL in a .env file and swap these functions
// to call the API, e.g. fetch(`${API_URL}/products/`).
import { products } from "../data/products";
import { services } from "../data/services";

export const API_URL = import.meta.env.VITE_API_URL || "";

export const fetchProducts = async () => products;
export const fetchServices = async () => services;
// export const submitEnquiry = async (data) => fetch(`${API_URL}/enquiries/`, { method: "POST", ... });
