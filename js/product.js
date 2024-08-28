async function fetchProduct() {
  const response = await fetch(
    "https://v2.api.noroff.dev/rainy-days/b8b528fc-6c60-41f6-a5a9-9a8b27a9482a"
  );
  const product = await response.json();
  console.log(product);
}

fetchProduct();
