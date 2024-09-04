import { fetchJacket } from "../../api/products/fetchJacket.js";
import { displayMessage } from "../../ui/products/common/displayMessage.js";
import { createJacket } from "../../ui/products/createJacket.js";

export function displayJacket() {
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const productContainer = document.querySelector("#product-container");
      const product = await fetchJacket();
      createJacket(productContainer, product);
    } catch (error) {
      console.error(error);
      displayMessage("#product-container", "error", error.message);
    }
  });
}
