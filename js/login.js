const endpoint = "auth/login";
const url = process.env.BASE_URL + endpoint;

const body = {
    "email": process.env.EMAIL, // Required
    "password": process.env.PASSWORD, // Required
}

async function login() {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
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
login().then(data => console.log(data));

// Har sendt request til API med await/async

// 1. Må få til export av login
// 2. Må hente accessToken fra data, .then(data => accesstoken)?? samme oppskrift for å hente varer osv. fra andre api endepunkt