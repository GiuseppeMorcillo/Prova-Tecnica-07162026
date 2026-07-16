import { getWeatherInfo } from "../data/weatherCodes";

function CurrentWeather({ current, currentUnits }) {
  const weatherInfo = getWeatherInfo(
    current.weather_code,
    current.is_day === 1
  );

  const formattedDate = new Intl.DateTimeFormat("it-IT", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(current.time));

  return (
    <section className="current-weather weather-panel">
      <div className="current-weather-header">
        <div>
          <p className="eyebrow">Meteo attuale</p>
          <h1>Lodi, Italia</h1>
          <p className="current-date">{formattedDate}</p>
        </div>

        <div className="location-badge">
          <span aria-hidden="true">📍</span>
          Lombardia
        </div>
      </div>

      <div className="current-weather-main">
        <div
          className="main-weather-icon"
          role="img"
          aria-label={weatherInfo.description}
        >
          {weatherInfo.icon}
        </div>

        <div className="temperature-wrapper">
          <p className="main-temperature">
            {Math.round(current.temperature_2m)}
            <span>{currentUnits.temperature_2m}</span>
          </p>

          <p className="weather-description">
            {weatherInfo.description}
          </p>

          <p className="feels-like">
            Temperatura percepita:{" "}
            <strong>
              {Math.round(current.apparent_temperature)}
              {currentUnits.apparent_temperature}
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeather;