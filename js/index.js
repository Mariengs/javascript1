require('dotenv').config(); // Laster miljøvariabler fra .env-filen

const apiKey = process.env.API_KEY; // Henter API-nøkkelen fra miljøvariabelen

// Sjekk at API-nøkkelen er riktig lastet
if (!apiKey) {
  console.error('API-nøkkel mangler. Sjekk .env-filen.');
  process.exit(1); // Avslutt hvis API-nøkkelen ikke finnes
}

var accessToken = login();

fetch('https://v2.api.noroff.dev/endpoint', {
  method: 'GET',
  headers: {
    'x-api-key': apiKey // Legg til API-nøkkelen i headeren
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP-feil! Status: ${response.status}`);
  }
  return response.json(); // Konverterer responsen til JSON
})
.then(data => {
  console.log(data); // Skriv ut dataen fra API-responsen
})
.catch(error => {
  console.error('Det oppstod en feil:', error); // Feilhåndtering
});
