export function createProducts(container, products) {
  for (let i = 0; i < products.data.length; i++) {
    const product = products[i];

    const div = document.createElement("div");
    div.classList.add("products");

    const h2 = document.createElement("h2");
    h2.textContent = products.title;

    const p = document.createElement("p");
    p.textContent = products.description;

    div.append(h2);
    div.append(p);
    container.append(div);
  }
}
