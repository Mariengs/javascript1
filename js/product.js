import { productUrl } from "./constants/api.js";

async function fetchProduct() {
  const response = await fetch(productUrl);
  const product = await response.json();

  const container = document.querySelector("#product-container");
}

fetchProduct();
