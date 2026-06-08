function convertToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function convertToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

let tempInCelsius = 25;
let tempInFahrenheit = convertToFahrenheit(tempInCelsius);
console.log(`${tempInCelsius}°C is equal to ${tempInFahrenheit}°F`);

let tempInFahrenheit2 = 77;
let tempInCelsius2 = convertToCelsius(tempInFahrenheit2);
console.log(`${tempInFahrenheit2}°F is equal to ${tempInCelsius2}°C`);