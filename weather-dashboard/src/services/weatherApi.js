const BASE_URL = "https://api.open-meteo.com/v1/forecast";

const LODI_COORDINATES = {
  latitude: 45.314,
  longitude: 9.503,
};

export async function getLodiWeather(temperatureUnit = "celsius") {
  const params = new URLSearchParams({
    latitude: LODI_COORDINATES.latitude.toString(),
    longitude: LODI_COORDINATES.longitude.toString(),

    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "is_day",
      "precipitation",
      "weather_code",
      "cloud_cover",
      "surface_pressure",
      "wind_speed_10m",
    ].join(","),

    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_probability_max",
      "sunrise",
      "sunset",
    ].join(","),

    temperature_unit:
      temperatureUnit === "fahrenheit" ? "fahrenheit" : "celsius",

    wind_speed_unit: "kmh",
    timezone: "Europe/Rome",
    forecast_days: "7",
  });

  const response = await fetch(`${BASE_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error(
      `Errore durante il recupero del meteo: ${response.status}`
    );
  }

  return response.json();
}