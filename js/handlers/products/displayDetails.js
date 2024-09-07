import { fetchDetailsById } from "../../api/products/fetchDetailsById.js";
import { displayMessage } from "../../ui/products/common/displayMessage.js";
import { createDetails } from "../../ui/products/createDetails.js";
import { getQueryParam } from "../../helpers/getQueryParam.js";

export async function displayDetails() {
  document.addEventListener("DOMContentLoaded", async () => {});
  const id = getQueryParam("id");

  if (!id) {
    window.location.href = "/";
  }

  const container = document.querySelector("#details-container");

  try {
    const details = await fetchDetailsById(id);
    createDetails(container, details);
  } catch (error) {
    console.error(error);
    displayMessage(container, "error", error.message);
  }
}
