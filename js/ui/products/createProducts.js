export function createProducts(container, products) {
  console.log(products);
  console.log(products.data.length);

  for (let i = 0; i < products.data.length; i++) {
    const product = products.data[i];
    const div = document.createElement("div");
    div.classList.add("product");

    const h2 = document.createElement("h2");
    h2.textContent = product.title;

    const p = document.createElement("p");
    p.textContent = product.description;

    if (product.image && product.image.url) {
      const img = document.createElement("img");
      img.src = product.image.url;
      img.alt = product.image.alt || product.title;
      div.append(img);
    } else {
      console.warn(`No image available for product: ${product.title}`);
    }

    if (product.gender) {
      const genderP = document.createElement("p");
      genderP.textContent = `Gender: ${product.gender}`;
      div.append(genderP);
    }

    if (product.sizes && product.sizes.length > 0) {
      const sizesP = document.createElement("p");
      sizesP.textContent = `Available sizes: ${product.sizes.join(", ")}`;
      div.append(sizesP);
    }

    div.append(h2);
    div.append(p);
    container.append(div);
  }
}
