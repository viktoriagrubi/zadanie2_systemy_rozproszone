const fetch = require("node-fetch");

async function performArithmeticOperation(url, num1, num2) {
  const data = { num1, num2 };
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const result = await response.json();
  return result.result;
}

const baseUrl = "http://localhost:5000";

// Wywołanie operacji dodawania
const num1 = 10.5;
const num2 = 5.2;
performArithmeticOperation(`${baseUrl}/add`, num1, num2)
  .then((result) => console.log(`Addition result: ${result}`))
  .catch((error) => console.error(error));

// Wywołanie operacji odejmowania
performArithmeticOperation(`${baseUrl}/subtract`, num1, num2)
  .then((result) => console.log(`Subtraction result: ${result}`))
  .catch((error) => console.error(error));

// Wywołanie operacji mnożenia
performArithmeticOperation(`${baseUrl}/multiply`, num1, num2)
  .then((result) => console.log(`Multiplication result: ${result}`))
  .catch((error) => console.error(error));

// Wywołanie operacji dzielenia
performArithmeticOperation(`${baseUrl}/divide`, num1, num2)
  .then((result) => console.log(`Division result: ${result}`))
  .catch((error) => console.error(error));
