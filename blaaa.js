function generateProductList() {
    const productContainer = document.getElementById("product-container");
  
    async function fetchProducts() {
      try {
          const response = await fetch('https://docs.noroff.dev/docs/v2/e-commerce/rainy-days');
          const products = await response.json();
          generateProductList(products);
      } catch (error) {
          console.error('Feil ved henting av produkter:', error);
      }
  }}
  
  document.addEventListener('DOMContentLoaded', fetchProducts);