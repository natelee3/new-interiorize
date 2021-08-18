import React from "react";
import { Link } from 'react-router-dom';
import "./footer.css";
// import logo from "./imgs/logo.png";

const Footer = () => {

    return (
        <>
        <footer className="footerContainer">
            <div className="importantLinks">
                <p className="footerLinks">@2021 Interiorize, Inc.</p>
                <Link to="/user-profile" className="footerLinks">My Profile</Link>
                <Link to="/user-profile" className="footerLinks">Recent Orders</Link>
                {/* <a href="/" className="footerLogoBox">
                    <img src={logo} alt="Logo" className="footerLogo"/>
                </a> */}
                <Link to="/" className="footerLinks">Contact Us</Link>
                <Link to="/" className="footerLinks">About Us</Link>
                <Link to="/" className="footerLinks">Link</Link>
            </div>
        </footer>
        </>
    )
}

export default Footer;