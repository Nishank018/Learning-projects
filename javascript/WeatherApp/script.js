const input = document.querySelector('input');
const button = document.querySelector('button');
const weather = document.getElementById('weather');

const getWeather = async () => {
    const city = input.value.trim();

    if (!city) {
        weather.innerHTML = '<p>Please enter a city name.</p>';
        return;
    }

    weather.innerHTML = '<p>Loading...</p>';

    try {
        // Get coordinates
        const geoResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
        );

        const geoData = await geoResponse.json();

        if (!geoData.results) {
            weather.innerHTML = '<p>City not found.</p>';
            return;
        }

        const { latitude, longitude, country } = geoData.results[0];

        // Get weather
        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`
        );

        const weatherData = await weatherResponse.json();

        const temperature = weatherData.current.temperature_2m;
        const windSpeed = weatherData.current.wind_speed_10m;

        weather.innerHTML = `
<div class="weather-card">

    <div class="location">
        <i class="fa-solid fa-location-dot"></i>
        <span>${city}, ${country}</span>
    </div>

    <div class="temp">
        ${temperature}°
    </div>

    <div class="condition">
        <i class="fa-solid fa-cloud"></i>
        <span>Current Weather</span>
    </div>

    <div class="weather-stats">

        <div class="stat">
            <i class="fa-solid fa-wind"></i>
            <span>${windSpeed} km/h</span>
            <small>Wind</small>
        </div>

        <div class="stat">
            <i class="fa-solid fa-temperature-half"></i>
            <span>${temperature}°C</span>
            <small>Temperature</small>
        </div>

    </div>

</div>
`;
    } catch (error) {
        weather.innerHTML = `
            <p>Something went wrong. Please try again.</p>
        `;

        console.error(error);
    }
};

button.addEventListener('click', getWeather);