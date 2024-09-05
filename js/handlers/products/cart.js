export function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(productId);
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((id) => id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function displayCartSummary() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  // Generer HTML for å vise handlekurvoppsummeringen
}
