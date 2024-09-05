import { jacketUrl } from "../../constants/api.js";

export async function fetchJacket() {
  const response = await fetch(jacketUrl);

  if (response.ok) {
    const jacket = await response.json();
    return jacket;
  }

  throw new Error("Failed to fetch product");
}
