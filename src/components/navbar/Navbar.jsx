import { useState } from "react";
import logo from "./imgs/logo.png";
import "./navbar.css";
import shoppingCart from "./imgs/shoppingCart.png";

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
              <a href="/shop-intro">Shop</a>
            </li>
            <li>
              <a href="/style-quiz">Style Quiz</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
            <li className="userProfileLink">
              {/* If user is signed in show user Profile else show Login */}
              <a href="/user-profile">User Profile</a>
            </li>
            <li className="cartIcon">
              <a href="/user-profile">  <img className="cartIcon" src={shoppingCart} alt="Shopping Cart" /></a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
