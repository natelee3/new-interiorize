import { useState } from "react";
import logo from "./imgs/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className="navbar">
        <a href="/">
          <img src={logo} alt="interiorize logo" className="logo" />
        </a>
        <button onClick={() => setActive(!active)} className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className={!!active ? "navbar-links active" : "navbar-links"}>
          <ul>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="#">Style Quiz</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
            <li className="userProfileLink">
              {/* If user is signed in show user Profile else show Login */}
              <a href="/user-profile">User Profile</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
