import { getCart } from "../../ui/products/cart.js";
import { createCartHTML } from "../../ui/createCartHtml.js";

export function displayCart() {
  const cart = getCart();
  const container = document.querySelector("#cart-container");

  createCartHTML(cart, container);
}
