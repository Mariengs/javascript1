require('dotenv').config(); // Laster miljøvariabler fra .env-filen
const fetch = require('node-fetch'); // Importer node-fetch

// Base-URL for Noroff API
const url = 'https://api.noroff.dev/api/v2/auth/login';

// Din Noroff-brukerinfo
const email = 'mareng00190@stud.noroff.no'; // Bytt ut med din faktiske e-post
const password = 'Ask2023!'; // Bytt ut med ditt faktiske passord

// Funksjon for å logge inn og få et token
async function login() {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP-feil! Status: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Innlogging vellykket. Ditt token:', data.accessToken);

    // Returnerer token for videre bruk
    return data.accessToken;
  } catch (error) {
    console.error('Innlogging feilet:', error);
  }
}

// Kall funksjonen for å logge inn
login();
