const apiBaseUrl = 'https://api.noroff.dev/api/v1/rainy-days';


async function fetchProducts() {
    const loadingElement = document.getElementById('loading');
    const productContainer = document.getElementById('product-container');
    
    try {

        loadingElement.style.display = 'block';
        productContainer.style.display = 'none';
        

        const response = await fetch(`${apiBaseUrl}/products`);
        const products = await response.json();
        

    } catch (error) {
        console.error('Feil ved henting av produkter:', error);
        alert('Kunne ikke laste inn produktene. Prøv igjen senere.');
    }
}

document.addEventListener('DOMContentLoaded', fetchProducts);