const endpoint = "auth/create-api-key";
const url = process.env.BASE_URL + endpoint;

const body = {
    "name": "APIkey",
}

async function generateApiKey() {
    try {
        const response = await fetch(url, {
            headers: {
                'authorization': accessToken,
                'Content-Type': 'application/json'
              },
            method: 'POST',
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error(`HTTP-feil! Status: ${response.status}, error: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Login feilet:', error); // Feilhåndtering
    }
}