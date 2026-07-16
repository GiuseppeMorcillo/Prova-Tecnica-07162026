import { useEffect, useState } from "react";
import weatherCodes from "../data/weatherCodes";
import "./Dashboard.css";

function Dashboard() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    function getWeather() {
        setLoading(true);

        fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=45.314&longitude=9.503&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Europe%2FRome"
        )
            .then((response) => response.json())
            .then((data) => {
                setWeather(data);
                //console.log(data)
                setLoading(false);
            })
            .catch((error) => {
                console.error("Errore:", error);
                setLoading(false);
            });
    }
    useEffect(() => {
        getWeather();
    }, []);
    function formatDate(date) {
        return new Date(date).toLocaleDateString("it-IT");
    }
    if (loading) {
        return <h2>Caricamento...</h2>;
    }

    const currentWeather =
        weatherCodes[weather.current.weather_code] || {
            icon: "🌤️",
            description: "Condizioni non disponibili",
        };

    return (
        <div className="dashboard">
            <h1>Weather Dashboard</h1>

            <h2>📍 Lodi, Italia</h2>

            <button onClick={getWeather}>Aggiorna meteo</button>

            <div className="current-weather">
                <div className="weather-icon">{currentWeather.icon}</div>

                <h3>
                    {Math.round(weather.current.temperature_2m)}
                    {weather.current_units.temperature_2m}
                </h3>

                <p className="weather-description">
                    {currentWeather.description}
                </p>

                <p>
                    Umidità: {weather.current.relative_humidity_2m}
                    {weather.current_units.relative_humidity_2m}
                </p>

                <p>
                    Vento: {Math.round(weather.current.wind_speed_10m)}{" "}
                    {weather.current_units.wind_speed_10m}
                </p>
            </div>

            <h2>Previsioni</h2>

            <div className="forecast">
                {weather.daily.time.map((day, index) => {
                    const formatDay = new Date(day).toLocaleDateString("it-IT");
                    const dailyWeather =
                        weatherCodes[weather.daily.weather_code[index]] || {
                            icon: "🌤️",
                            description: "Meteo non disponibile",
                        };

                    return (
                        <div className="forecast-card" key={formatDay}>
                            <h4>{formatDay}</h4>

                            <div className="forecast-icon">
                                {dailyWeather.icon}
                            </div>

                            <p>{dailyWeather.description}</p>

                            <p>
                                Max:{" "}
                                {Math.round(
                                    weather.daily.temperature_2m_max[index]
                                )}
                                {weather.daily_units.temperature_2m_max}
                            </p>

                            <p>
                                Min:{" "}
                                {Math.round(
                                    weather.daily.temperature_2m_min[index]
                                )}
                                {weather.daily_units.temperature_2m_min}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Dashboard;