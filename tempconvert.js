const tempForm = document.getElementById("tempForm");
tempForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the input values
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = parseFloat(fahrenheitInput.value);

  // Convert Celsius to Fahrenheit if Celsius input is provided
  if (!isNaN(celsius)) {
    const fahrenheitResult = (celsius * 9) / 5 + 32;
    document.getElementById(
      "result"
    ).innerHTML = `${celsius} Celsius = ${fahrenheitResult.toFixed(
      2
    )} Fahrenheit`;
  }

  // Convert Fahrenheit to Celsius if Fahrenheit input is provided
  if (!isNaN(fahrenheit)) {
    const celsiusResult = ((fahrenheit - 32) * 5) / 9;
    document.getElementById(
      "result"
    ).innerHTML = `${fahrenheit} Fahrenheit = ${celsiusResult.toFixed(
      2
    )} Celsius`;
  }
});
