export function createDetails(container, details) {
  container.innerHTML = "";

  const { title, description, gender, sizes, image, price } = details;

  const productLink = document.createElement("div");
  productLink.classList.add("product-details");

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const p = document.createElement("p");
  p.textContent = description;

  const priceElement = document.createElement("p");
  priceElement.textContent = `Price: ${price}kr`;

  const img = document.createElement("img");
  img.src = image.url;

  const genderElement = document.createElement("p");
  genderElement.textContent = `Gender: ${gender}`;

  const sizesElement = document.createElement("p");
  sizesElement.textContent = `Available sizes: ${sizes.join(", ")}`;

  productLink.append(h2);
  productLink.append(img);
  productLink.append(p);
  productLink.append(genderElement);
  productLink.append(sizesElement);
  productLink.append(priceElement);
  container.append(productLink);
}
