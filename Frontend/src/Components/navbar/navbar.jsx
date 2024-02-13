import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo-box">
        <p className="logo">
          Food<strong>hub</strong>
        </p>
      </div>
      <div className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="#" className="nav-item">
              Register
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
