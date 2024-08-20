const apiBaseUrl = 'https://api.noroff.dev/api/v1/rainy-days';

// Funksjon for å hente og vise produktene på startsiden
async function fetchProducts() {
    const loadingElement = document.getElementById('loading');
    const productContainer = document.getElementById('product-container');
    
    try {
        // Vis lastemelding
        loadingElement.style.display = 'block';
        productContainer.style.display = 'none';
        
        // Hent produktdata fra API-et
        const response = await fetch(`${apiBaseUrl}/products`);
        const products = await response.json();
        

    } catch (error) {
        console.error('Feil ved henting av produkter:', error);
        alert('Kunne ikke laste inn produktene. Prøv igjen senere.');
    }
}

// Kjør fetchProducts når siden lastes inn
document.addEventListener('DOMContentLoaded', fetchProducts);