import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-container">
                <NavLink to="/" className="navbar-logo">
                    🌤 Weather Dashboard
                </NavLink>

                <nav className="navbar-links">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? "navbar-link active" : "navbar-link"
                        }
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            isActive ? "navbar-link active" : "navbar-link"
                        }
                    >
                        Settings
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;