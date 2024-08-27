const endpoint1 = "rainy-days/b8b528fc-6c60-41f6-a5a9-9a8b27a9482a";
const url = process.env.BASE_URL + endpoint1;

fetch(endpoint1)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was an error with the fetch operation:', error);
  });
