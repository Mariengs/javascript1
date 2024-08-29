const baseUrl = "https://v2.api.noroff.dev/";
const endpoint = "rainy-days";
const productsUrl = baseUrl + endpoint;

async function fetchProducts() {
  const response = await fetch(productsUrl);
  const products = await response.json();

  const container = document.querySelector("#products-container");
  createProducts(container, products);
}

fetchProducts();

function createProducts(conatiner, products) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const div = document.createElement("div");
    div.classList.add("product");

    const h2 = document.createElement("h2");
    h2.textContent = product.title;

    const p = document.createElement("p");
    p.textContent = product.body;

    div.append(h2);
    div.append(p);
    container.append(div);
  }
}
