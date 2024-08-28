async function fetchProducts() {
  const response = await fetch("https://v2.api.noroff.dev/rainy-days");
  const products = await response.json();

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(product);
  }
}

fetchProducts();
