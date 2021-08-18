import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import shoppingCart from "./imgs/shoppingCart.png";
import LoginButton from "../auth0/LoginButton";
import LogoutButton from "../auth0/LogoutButton";
import StateContext from '../../context';
import { useAuth0 } from '@auth0/auth0-react';
import logo from "./imgs/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { isAuthenticated } = useAuth0();

  const [value] = useContext(StateContext);

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="interiorize logo" className="logo" />
        </Link>
        <button onClick={() => setActive(!active)} className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className={!!active ? "navbar-links active" : "navbar-links"}>
          <ul>
            {!isAuthenticated ? (
              <>
              <li>
                <LoginButton />
              </li>
              </>
              
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
                  <Link to="/user-profile">User Profile</Link>
                </li>
                <li className="cartIcon">

                <Link to="/shopping-cart"> 

                    <img className="cartIcon" src={shoppingCart} alt="Shopping Cart" />
                    <span className={value.cart.length > 0 ? "notification" : null}>
                    </span>
                </Link>
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
