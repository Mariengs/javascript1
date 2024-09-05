export function showOrderConfirmation() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  // Generer HTML for å vise ordrebekreftelsen
  localStorage.removeItem("cart"); // Tøm handlekurven etter bestilling
}
