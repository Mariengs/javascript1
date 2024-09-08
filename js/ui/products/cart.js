const CART_KEY = "cart";

function saveToCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function isIdInCart(id) {
  const cart = getCart();
  return cart.some((item) => item.id === id);
}

export function addToCart(id) {
  const newItem = { id };

  const cart = getCart();
  cart.push(newItem);
  saveToCart(cart);
}

export function removeFromCart(id) {
  const cart = getCart();
  const newCart = cart.filter((item) => item.id !== id);
  saveToCart(newCart);
}
