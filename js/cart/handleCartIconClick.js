import { addToCart, isIdInCart, removeFromCart } from "../ui/products/cart.js";

export function handleCartIconClick() {
  const cartIcon = document.querySelector("#cart-icon");

  cartIcon.addEventListener("click", respondToCartIconClick);

  function respondToCartIconClick(event) {
    const { id, title } = event.target.dataset;

    if (isIdInCart(id)) {
      removeFromCart(id);
      event.target.classlist.add("fa-cart-plus");
      event.target.classlist.remove("fa-cart-shopping", "green");
    } else {
      addToCart(id, title);
      event.target.classlist.remove("fa-cart-plus");
      event.target.classlist.add("fa-cart-shopping", "green");
    }
  }
}
