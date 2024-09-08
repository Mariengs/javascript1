import { displayMessage } from "./displayMessage.js";

export function createCartHTML(container, cart) {
  if (cart.length === 0) {
    displayMessage(container, "info", "Your cart is empty");
  }
}
