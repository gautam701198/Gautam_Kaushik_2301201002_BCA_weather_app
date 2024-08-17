function convertTemperature() {
    // Get the value from the input field
    const celsius = parseFloat(document.getElementById('celsius').value);

    // Validate input
    if (isNaN(celsius)) {
        document.getElementById('fahrenheit').textContent = 'Please enter a valid number.';
        return;
    }

    // Convert Celsius to Fahrenheit
    const fahrenheit = (celsius * 9/5) + 32;

    // Display the result
    document.getElementById('fahrenheit').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
}
