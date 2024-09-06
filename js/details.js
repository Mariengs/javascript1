import { detailsUrl } from "./constants/api.js";

export async function fetchDetails() {
  try {
    const response = await fetch(detailsUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch details");
    }

    const details = await response.json();
    return details;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
