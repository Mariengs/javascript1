import { createProducts } from "../ui/products/createProducts.js";

export function handleGenderChange(product) {
  const genderSelect = document.querySelector("#gender");

  if (genderSelect) {
    genderSelect.addEventListener("change", respondToGenderChange);
  }

  function respondToGenderChange(event) {
    const selectedGender = event.target.value;

    const filterProducts = product.filter((product) => {
      if (product.gender === selectedGender) {
        return true;
      }
    });

    createProducts("#products-container", filterProducts);
  }
}
