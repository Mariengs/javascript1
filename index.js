const apiUrl = 'https://api.noroff.dev/api/v1/rainy-days';

// Funksjon for å hente alle produkter
async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const products = await response.json(); // Konverterer responsen til JSON
        displayProducts(products); // Viser produktene
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Funksjon for å vise produktene i HTML
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <img src="${product.imageUrl}" alt="${product.name}">
        `;
        productList.appendChild(productItem);
    });
}

// Hent og vis produktene når siden lastes
fetchProducts();