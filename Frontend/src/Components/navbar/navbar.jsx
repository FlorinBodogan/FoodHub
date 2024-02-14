import "./navbar.css";
import { useAuth } from "../../AuthContext";

const NavBar = () => {
  const { token, logout } = useAuth();

  return (
    <nav className="nav-bar">
      <div className="logo-box">
        <p className="logo">
          Food<strong>hub</strong>
        </p>
      </div>
      <div className="main-nav">
        <ul className="main-nav-list">
          {token ? (
            <>
              <li>
                <a href="/posts" className="nav-item">
                  Posts
                </a>
              </li>
              <li>
                <a href="/account" className="nav-item">
                  Account
                </a>
              </li>
              <li>
                <button onClick={logout} className="logout-button">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/register" className="nav-item">
                  Register
                </a>
              </li>
              <li>
                <a href="/login" className="nav-item">
                  Login
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
