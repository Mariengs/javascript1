import { fetchProducts } from "../api/products/fetchProducts.js";
import { createProducts } from "../ui/products/createProducts.js";

export function displayProducts() {
  document.addEventListener("DOMContentLoaded", async () => {
    const prodctsContainer = document.querySelector("#products-container");

    const products = await fetchProducts();
    createProducts(prodctsContainer, products);
  });
}
