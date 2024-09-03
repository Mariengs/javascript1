import { jacketUrl } from "./constants/api.js";

async function fetchProduct() {
  const response = await fetch(jacketUrl);
  const product = await response.json();

  const container = document.querySelector("#product-container");
}

fetchProduct();
