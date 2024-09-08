export function createDetails(container, details) {
  container.innerHTML = "";

  const { id, title, description, gender, sizes, image, price } = details;

  const productLink = document.createElement("div");
  productLink.classList.add("product-details");

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const p = document.createElement("p");
  p.textContent = description;

  const priceElement = document.createElement("p");
  priceElement.textContent = `Price: ${price}kr`;

  const genderElement = document.createElement("p");
  genderElement.textContent = `Gender: ${gender}`;

  // const img = document.createElement("img");
  // img.src = product.image.url;
  // img.alt = product.image.alt || product.title;

  const sizeElement = document.createElement("p");
  sizeElement.textContent = `Sizes: ${sizes}`;

  const cartIcon = document.createElement("i");
  cartIcon.classList.add("fa-solid", "fa-cart-plus");
  cartIcon.id = "cart-icon";
  cartIcon.dataset.id = details.id;
  cartIcon.dataset.title = title;
  cartIcon.dataset.price = price;

  productLink.append(h2);
  productLink.append(p);
  // productLink.append(img);
  productLink.append(sizeElement);
  productLink.append(genderElement);
  productLink.append(priceElement);
  productLink.append(cartIcon);
  container.append(productLink);
}
