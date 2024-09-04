const endpoint = "auth/register";
const url = process.env.BASE_URL + endpoint;

const body = {
  name: process.env.USERNAME, // Required
  email: process.env.EMAIL, // Required
  password: process.env.PASSWORD, // Required
};
console.log(JSON.stringify(body));

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `HTTP-feil! Status: ${response.status}, error: ${response.statusText}`
      );
    }
    return response.json(); // Konverterer responsen til JSON
  })
  .then((data) => {
    console.log(data); // Skriv ut dataen fra API-responsen
  })
  .catch((error) => {
    console.error("Det oppstod en feil:", error); // Feilhåndtering
  });
