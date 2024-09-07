import { fetchDetailsById } from "../../api/products/fetchDetailsById.js";
import { displayMessage } from "../../ui/products/common/displayMessage.js";

export async function displayDetails() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  console.log("id", id);

  if (!id) {
    window.location.href = "/";
  }
  const container = document.querySelector("#details-container");
  try {
    const details = await fetchDetailsById(id);
  } catch (error) {
    console.error(error);
    displayMessage(container, "error", error.message);
  }
}
// if id - fetch by id
//create HTML for the details
//wrap in try/catch
