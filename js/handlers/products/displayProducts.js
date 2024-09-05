import { fetchProducts } from "../../api/products/fetchProducts.js";
import { displayMessage } from "../../ui/products/common/displayMessage.js";
import { createProducts } from "../../ui/products/createProducts.js";

export function displayProducts() {
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const productsContainer = document.querySelector("#products-container");
      const products = await fetchProducts();
      createProducts(productsContainer, products);
    } catch (error) {
      console.error(error);
      displayMessage("container", "error", error.message);
    }
  });
}
