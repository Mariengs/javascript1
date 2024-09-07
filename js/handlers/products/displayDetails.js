import { fetchDetailsById } from "../../api/products/fetchDetailsById.js";
import { displayMessage } from "../../ui/products/common/displayMessage.js";
import { createDetails } from "../../ui/products/createDetails.js";
import { getQueryParam } from "../../helpers/getQueryParam.js";

export async function displayDetails() {
  const id = getQueryParam("id");
  document.addEventListener("DOMContentLoaded", async () => {});

  if (!id) {
    window.location.href = "/";
  }

  try {
    const detailsContainer = document.querySelector("#details-container");
    const details = await fetchDetailsById(id);
    createDetails(detailsContainer, details);
  } catch (error) {
    console.error(error);
    displayMessage(container, "error", error.message);
  }
}
