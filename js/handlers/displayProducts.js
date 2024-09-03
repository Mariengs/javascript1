import { fetchProducts } from "../api/products/fetchProducts.js";
import { displayMessage } from "../ui/products/common/displayMessage.js";
import { createProducts } from "../ui/products/createProducts.js";

export function displayProducts() {
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const prodctsContainer = document.querySelector("#products-container");
      const products = await fetchProducts();
      createProducts(prodctsContainer, products);
    } catch (error) {
      console.error(error);
      displayMessage("#products-container", "error", error.message);
    }
  });
}
