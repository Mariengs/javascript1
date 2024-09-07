import { fetchProducts } from "../../api/products/fetchProducts.js";
import { displayMessage } from "../../ui/products/common/displayMessage.js";
import { createProducts } from "../../ui/products/createProducts.js";
import { handleGenderChange } from "../handleGenderChange.js";
import { filterProducts } from "./filterProducts.js";

export async function displayProducts() {
  const container = document.querySelector("#products-container");

  try {
    const products = await fetchProducts();
    createProducts(container, products);
    filterProducts(products);
    handleGenderChange(products);
  } catch (error) {
    console.error(error);
    displayMessage("container", "error", error.message);
  }
}
