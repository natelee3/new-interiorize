import { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "./imgs/logo.png";
import "./navbar.css";
import shoppingCart from "./imgs/shoppingCart.png";
import ItemDetails from "../shop/ItemDetails";
import { Redirect } from "react-router-dom";
import LoginButton from "../auth0/LoginButton";
import LogoutButton from "../auth0/LogoutButton";
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [cart, setCart] = useState([]);

  const { isAuthenticated } = useAuth0();

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
            {!isAuthenticated ? (
              <li>
                <LoginButton />
              </li>
            ) : (
              <>
                <li>
                  <Link to="/shop-intro">Shop</Link>
                </li>
                <li>
                  <Link to="/style-quiz">Style Quiz</Link>
                </li>
                <li>
                  <LogoutButton />
                </li>
                <li className="userProfileLink">
                  {/* If user is signed in show user Profile else show Login */}
                  <Link to="/user-profile">User Profile</Link>
                </li>
                <li className="cartIcon">
                  <Link to="/shopping-cart"> 
                  <img className="cartIcon" src={shoppingCart} alt="Shopping Cart" style={localStorage.getItem("Added To Cart") !==null ? { backgroundColor: "red" } : null  } /></Link>
                </li>
              </>
            )}

            
            
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
