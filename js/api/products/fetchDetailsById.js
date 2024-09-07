import { productsUrl } from "./constants/api.js";

export async function fetchDetailsById(id) {
  const url = `${productsUrl}${id}`;

  const response = await fetch(url);

  if (response.ok) {
    const details = await response.json();
    return details;
  } else {
    throw new Error("Failed to fetch details");
  }
}
