import { detailsUrl } from "./constants/api.js";

export async function fetchDetails() {
  const response = await fetch(detailsUrl);

  if (!response.ok) {
    const details = await response.json();
    return details;
  }

  throw new Error("Failed to fetch details");
}
