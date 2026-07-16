import { getWeatherInfo } from "../data/weatherCodes";

function Forecast({ daily, dailyUnits }) {
  const forecastDays = daily.time.map((date, index) => ({
    date,
    weatherCode: daily.weather_code[index],
    maxTemperature: daily.temperature_2m_max[index],
    minTemperature: daily.temperature_2m_min[index],
    precipitation: daily.precipitation_probability_max[index],
    sunrise: daily.sunrise[index],
    sunset: daily.sunset[index],
  }));

  function formatDay(date) {
    return new Intl.DateTimeFormat("it-IT", {
      weekday: "short",
      day: "numeric",
    }).format(new Date(`${date}T12:00:00`));
  }

  function formatTime(dateTime) {
    return new Intl.DateTimeFormat("it-IT", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateTime));
  }

  return (
    <section className="forecast-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Prossimi giorni</p>
          <h2>Previsioni settimanali</h2>
        </div>
      </div>

      <div className="forecast-grid">
        {forecastDays.map((day, index) => {
          const weatherInfo = getWeatherInfo(day.weatherCode);

          return (
            <article
              className={`forecast-card ${
                index === 0 ? "forecast-card-today" : ""
              }`}
              key={day.date}
            >
              <div className="forecast-card-heading">
                <p className="forecast-day">
                  {index === 0 ? "Oggi" : formatDay(day.date)}
                </p>

                {index === 0 && (
                  <span className="today-badge">Oggi</span>
                )}
              </div>

              <div
                className="forecast-icon"
                role="img"
                aria-label={weatherInfo.description}
              >
                {weatherInfo.icon}
              </div>

              <p className="forecast-description">
                {weatherInfo.description}
              </p>

              <div className="forecast-temperatures">
                <strong>
                  {Math.round(day.maxTemperature)}
                  {dailyUnits.temperature_2m_max}
                </strong>

                <span>
                  {Math.round(day.minTemperature)}
                  {dailyUnits.temperature_2m_min}
                </span>
              </div>

              <div className="forecast-extra">
                <p>
                  <span aria-hidden="true">💧</span>
                  {day.precipitation ??
                    0}
                  {dailyUnits.precipitation_probability_max}
                </p>

                <p>
                  <span aria-hidden="true">🌅</span>
                  {formatTime(day.sunrise)}
                </p>

                <p>
                  <span aria-hidden="true">🌇</span>
                  {formatTime(day.sunset)}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Forecast;