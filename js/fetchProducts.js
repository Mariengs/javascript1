async function fetchProducts() {
  const response = await fetch(url);
  const products = await response.json();

  const container = document.querySelector("#products-container");
  createProducts(container, products);
}
