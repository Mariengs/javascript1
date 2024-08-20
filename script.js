const apiBaseUrl = 'https://api.noroff.dev/api/v1/rainy-days';

async function fetchProducts() {
    try {
        const response = await fetch(`${apiBaseUrl}/products`);
        const products = await response.json();

        const productContainer = document.getElementById('product-container');

        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <a href="product/index.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p>${product.price} NOK</p>
                </a>
            `;
            productContainer.appendChild(productElement);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        alert('Kunne ikke laste inn produktene.');
    }
}

document.addEventListener('DOMContentLoaded', fetchProducts);
