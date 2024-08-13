
const apiUrl = "https://docs.noroff.dev/docs/v1/e-commerce/rainy-days"; 


// Funksjon for å hente alle produkter
async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const products = await response.json(); // Henter array av produkter
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
        productItem.textContent = `Name: ${product.name}, Price: ${product.price}`;
        productList.appendChild(productItem);
    });
}

// Hent og vis produktene når siden lastes
fetchProducts();