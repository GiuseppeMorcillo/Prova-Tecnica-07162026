import { Link } from "react-router-dom";
import "./Settings.css";

function Settings({ darkMode, setDarkMode }) {
  return (
    <div className="settings">
      <div className="settings-header">
        <h1>Impostazioni</h1>
        <p>Personalizza la Weather Dashboard.</p>
      </div>

      <div className="settings-card">
        <div className="settings-card-text">
          <h2>Tema scuro</h2>
          <p>Attiva o disattiva la modalità scura.</p>
        </div>

        <button
          className={darkMode ? "theme-switch active" : "theme-switch"}
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Cambia tema"
        >
          <span className="switch-circle"></span>
        </button>
      </div>

      <Link to="/" className="back-button">
        ← Torna alla Dashboard
      </Link>
    </div>
  );
}

export default Settings;