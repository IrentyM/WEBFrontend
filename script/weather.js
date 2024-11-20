// Function to fetch and display weather based on the selected city
function fetchWeather(city) {
    const weatherUrl = `https://api.weatherstack.com/current?access_key=5ac1c5d8a1541044a5fc21d37e3f7f46&query=${city}`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            if (data.success === false) {
                // Handle API error
                document.getElementById("weather-info").innerHTML = `<p>Error: ${data.error.info}</p>`;
                return;
            }

            // Weather data
            const temperature = data.current.temperature;
            const weatherDescription = data.current.weather_descriptions[0] || 'No description available';
            const weatherIcon = data.current.weather_icons[0] || 'default-icon.png';

            // Display weather information
            document.getElementById("weather-info").innerHTML = `
                <p><strong>Temperature:</strong> ${temperature}°C</p>
                <p><strong>Weather Condition:</strong> ${weatherDescription}</p>
                <img src="${weatherIcon}" alt="Weather icon">
            `;

            // BMW recommendations based on weather
            let recommendation = "";
            if (weatherDescription.includes("Snow") || weatherDescription.includes("Ice")) {
                recommendation = `
                    <h3>BMW Recommendation:</h3>
                    <p>For harsh winter conditions, vehicles with the <strong>xDrive</strong> all-wheel-drive system are perfect.</p>
                    <p>We recommend the BMW X5 or BMW 3 Series xDrive.</p>
                    <img src="images/bmw-xdrive.jpg" alt="BMW xDrive" style="width: 100%; max-width: 800px;">
                `;
            } else if (weatherDescription.includes("Rain") || weatherDescription.includes("Drizzle")) {
                recommendation = `
                    <h3>BMW Recommendation:</h3>
                    <p>Dynamic Stability Control (DSC) ensures safety in rainy weather.</p>
                    <p>We recommend the BMW 5 Series or BMW X3.</p>
                    <img src="images/bmw-dsc.jpg" alt="BMW DSC" style="width: 100%; max-width: 800px;">
                `;
            } else if (temperature > 30) {
                recommendation = `
                    <h3>BMW Recommendation:</h3>
                    <p>In hot weather, enjoy comfort with BMW's premium climate control system.</p>
                    <p>We recommend the BMW 7 Series or BMW iX for maximum comfort.</p>
                    <img src="images/bmw-climate.jpg" alt="BMW Climate Control" style="width: 100%; max-width: 800px;">
                `;
            } else {
                recommendation = `
                    <h3>BMW Recommendation:</h3>
                    <p>BMW offers reliable and comfortable vehicles.</p>
                    <p>Choose any BMW model that suits your driving style.</p>
                    <img src="images/bmw-everyday.jpg" alt="BMW Everyday" style="width: 100%; max-width: 800px;">
                `;
            }

            // Add recommendations to the page
            document.getElementById("bmw-recommendation").innerHTML = recommendation;
        })
        .catch(error => {
            // Handle fetch error
            document.getElementById("weather-info").innerHTML = "<p>Unable to fetch weather data.</p>";
            console.error("Fetch error:", error);
        });
}

// Event listener for city selection change
document.getElementById("city-select").addEventListener("change", (event) => {
    const selectedCity = event.target.value;
    fetchWeather(selectedCity);
});

// Fetch initial weather for the default city (Moscow)
fetchWeather("Moscow");
