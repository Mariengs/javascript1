import { login } from "./login.js";

login();

async function fetchProducts() {
  const loadingElement = document.getElementById("loading");
  const productContainer = document.getElementById("product-container");

  try {
    loadingElement.style.display = "block";
  
    const response = await fetch(apiBaseUrl/rainy-days);
    const products = await response.json();

    loadingElement.style.display = "none";

    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
      <a href="product/index.html?id=${product.id}">
          <img src="${product.image}" alt="${product.title}">
          <h2>${product.title}</h2>
          <p>${product.price} NOK</p>
          <p>${product.description}</p>
      </a>
  `;
  productContainer.appendChild(productElement);
});

if (products.length === 0) {
  productContainer.innerHTML = '<p>No products available.</p>';
}
  } catch (error) {
    console.error("Feil ved henting av produkter:", error);
    loadingElement.innerText = "The mf programming this is a stupid cow.. Try again later.";
  }
}
document.addEventListener("DOMContentLoaded", fetchProducts);