import React from "react";
import "./footer.css";
import logo from "./imgs/logo.png";

const Footer = () => {

    return (
        <>
        <footer className="footerContainer">
            <div className="importantLinks">
                <p className="footerLinks">@2021 Interiorize, Inc.</p>
                <a href="/user-profile" className="footerLinks">My Profile</a>
                <a href="/user-profile" className="footerLinks">Recent Orders</a>
                {/* <a href="/" className="footerLogoBox">
                    <img src={logo} alt="Logo" className="footerLogo"/>
                </a> */}
                <a href="#" className="footerLinks">Contact Us</a>
                <a href="#" className="footerLinks">About Us</a>
                <a href="#" className="footerLinks">Link</a>
            </div>
        </footer>
        </>
    )
}

export default Footer;