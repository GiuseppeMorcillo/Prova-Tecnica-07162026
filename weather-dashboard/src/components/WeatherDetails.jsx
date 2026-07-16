function WeatherDetails({ current, currentUnits }) {
  const details = [
    {
      label: "Umidità",
      value: `${current.relative_humidity_2m}${currentUnits.relative_humidity_2m}`,
      icon: "💧",
    },
    {
      label: "Vento",
      value: `${Math.round(current.wind_speed_10m)} ${
        currentUnits.wind_speed_10m
      }`,
      icon: "💨",
    },
    {
      label: "Pressione",
      value: `${Math.round(current.surface_pressure)} ${
        currentUnits.surface_pressure
      }`,
      icon: "🔽",
    },
    {
      label: "Nuvolosità",
      value: `${current.cloud_cover}${currentUnits.cloud_cover}`,
      icon: "☁️",
    },
    {
      label: "Precipitazioni",
      value: `${current.precipitation} ${currentUnits.precipitation}`,
      icon: "🌧️",
    },
    {
      label: "Momento",
      value: current.is_day === 1 ? "Giorno" : "Notte",
      icon: current.is_day === 1 ? "☀️" : "🌙",
    },
  ];

  return (
    <section className="details-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Informazioni</p>
          <h2>Dettagli meteo</h2>
        </div>
      </div>

      <div className="details-grid">
        {details.map((detail) => (
          <article className="detail-card" key={detail.label}>
            <span className="detail-icon" aria-hidden="true">
              {detail.icon}
            </span>

            <div>
              <p className="detail-label">{detail.label}</p>
              <p className="detail-value">{detail.value}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WeatherDetails;