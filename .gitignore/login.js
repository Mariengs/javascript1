require('dotenv').config(); // Laster miljøvariabler fra .env-filen
const fetch = require('node-fetch');

const loginUrl = 'https://api.noroff.dev/api/v2/auth/login';
const apiKeyUrl = 'https://api.noroff.dev/api/v2/auth/create-api-key';

// Henter e-post og passord fra .env-filen
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

async function login() {
  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP-feil! Status: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Innlogging vellykket. Ditt token:', data.accessToken);
    return data.accessToken;
  } catch (error) {
    console.error('Innlogging feilet:', error);
  }
}

async function createApiKey(token) {
  try {
    const response = await fetch(apiKeyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Legger til token i header
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP-feil! Status: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Din API-nøkkel er:', data.apiKey);
  } catch (error) {
    console.error('Feil ved oppretting av API-nøkkel:', error);
  }
}

async function main() {
  const token = await login();
  if (token) {
    await createApiKey(token);
  }
}

main();
