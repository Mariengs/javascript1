// Base URL for API-et
const apiBaseUrl = 'https://api.noroff.dev/api/v1/rainy-days';

// Funksjon for å hente produkt-ID fra URL-en
function getProductIdFromUrl() {
    const queryString = window.location.search; // Får "?id=123"
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id'); // Henter verdien av "id"
}

// Funksjon for å hente og vise produktdetaljer
async function fetchProductDetails() {
    const productId = getProductIdFromUrl();
    const loadingElement = document.getElementById('loading');
    const productDetailsContainer = document.getElementById('product-details');
    
    try {
        // Vise lastemelding
        loadingElement.style.display = 'block';
        productDetailsContainer.style.display = 'none';
        
        // Hente produktdetaljer fra API-et
        const response = await fetch(`${apiBaseUrl}/products/${productId}`);
        const product = await response.json();

        // Skjule lastemelding og vise produktdetaljer
        loadingElement.style.display = 'none';
        productDetailsContainer.style.display = 'block';

        // Generere HTML for å vise produktdetaljer
        productDetailsContainer.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}">
            <p>${product.description}</p>
            <p>Pris: ${product.price} NOK</p>
            <button id="add-to-cart">Legg til i handlekurv</button>
        `;
    } catch (error) {
        console.error('Feil ved henting av produktdetaljer:', error);
        alert('Kunne ikke laste inn produktdetaljer. Prøv igjen senere.');
    }
}

// Kjør fetchProductDetails når siden lastes inn
document.addEventListener('DOMContentLoaded', fetchProductDetails);