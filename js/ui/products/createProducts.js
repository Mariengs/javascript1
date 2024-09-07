export function createProducts(container, products) {
  let parent = container;

  if (typeof container === "string") {
    parent = document.querySelector(container);
  }

  if (products.data.length === 0) {
    parent.innerHTML = "<p>No products found</p>";
    return;
  }

  parent.innerHTML = "";
  for (let i = 0; i < products.data.length; i++) {
    const product = products.data[i];

    const productLink = document.createElement("a");
    productLink.href = `details/?id=${product.id}`;
    productLink.classList.add("product-link");

    const h2 = document.createElement("h2");
    h2.textContent = product.title;

    const p = document.createElement("p");
    p.textContent = product.description;

    const price = document.createElement("p");
    price.textContent = `Price: ${product.price}kr`;

    const img = document.createElement("img");
    img.src = product.image.url;
    img.alt = product.image.alt || product.title;

    const gender = document.createElement("p");
    gender.textContent = `Gender: ${product.gender}`;

    const sizes = document.createElement("p");
    sizes.textContent = `Available sizes: ${product.sizes.join(", ")}`;

    productLink.append(h2);
    productLink.append(img);
    productLink.append(p);
    productLink.append(gender);
    productLink.append(sizes);
    productLink.append(price);
    container.append(productLink);
  }
}
