export function createProducts(container, products) {
  container.innerHTML = "";

  for (let i = 0; i < products.data.length; i++) {
    const product = products.data[i];
    const div = document.createElement("div");
    div.classList.add("product");

    const h2 = document.createElement("h2");
    h2.textContent = product.title;

    const p = document.createElement("p");
    p.textContent = product.description;

    const img = document.createElement("img");
    img.src = product.image.url;
    img.alt = product.image.alt || product.title;

    const gender = document.createElement("p");
    gender.textContent = `Gender: ${product.gender}`;

    const sizes = document.createElement("p");
    sizes.textContent = `Available sizes: ${product.sizes.join(", ")}`;

    div.append(h2);
    div.append(img);
    div.append(p);
    div.append(gender);
    div.append(sizes);

    container.append(div);
  }
}
