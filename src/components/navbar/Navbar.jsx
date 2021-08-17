import { useState } from "react";
import logo from "./imgs/logo.png";
import "./navbar.css";
import shoppingCart from "./imgs/shoppingCart.png";
import ItemDetails from "../shop/ItemDetails";
import { Redirect } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const [cart, setCart] = useState([]);

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
              <a href="/shopping-cart"> 
              <img className="cartIcon" src={shoppingCart} alt="Shopping Cart" style={localStorage.getItem("Added To Cart") !==null ? { backgroundColor: "red" } : null  } /></a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
