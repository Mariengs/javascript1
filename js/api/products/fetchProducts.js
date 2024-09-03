import { productsUrl } from "../../constants/api.js";

export async function fetchProducts() {
  const response = await fetch(productsUrl);

  if (response.ok) {
    const products = await response.json();
    return products;
  }

  throw new Error("Failed to fetch products");
}
