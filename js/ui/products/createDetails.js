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
  price.textContent = `Price: ${price}kr`;

  const imgElement = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt || title;

  const genderElement = document.createElement("p");
  gender.textContent = `Gender: ${gender}`;

  const sizesElement = document.createElement("p");
  sizes.textContent = `Available sizes: ${sizes.join(", ")}`;

  productLink.append(h2);
  productLink.append(img);
  productLink.append(p);
  productLink.append(genderElement);
  productLink.append(sizesElement);
  productLink.append(priceElement);
  container.append(productLink);
}
