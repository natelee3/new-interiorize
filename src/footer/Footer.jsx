import React from "react";
import { Link } from 'react-router-dom';
import "./footer.css";
// import logo from "./imgs/logo.png";

const Footer = () => {

    return (
        <>
        <footer className="footerContainer">

            <h3 className="footerTitle">Developer Links</h3>
            <div className="name-box">
                <div className="name-row">
                    <div className="devLink">
                        <a href="https://github.com/natelee3/interiorize" target="_blank" rel="noreferrer" className="footerNames">Site Repository</a>
                    </div>
                        <div className="devLink">
                    <a href="https://github.com/logancooper" target="_blank" rel="noreferrer" className="footerNames">Logan</a>
                    </div>
                    <div className="devLink">
                        <a href="https://github.com/natelee3" target="_blank" rel="noreferrer" className="footerNames">Nate</a>
                    </div>
                    <div className="devLink">
                        <a href="https://github.com/sarahdepalo" target="_blank" rel="noreferrer" className="footerNames">Sarah</a>
                    </div>
                    <div className="devLink">
                        <a href="https://github.com/zach-a-g" target="_blank" rel="noreferrer" className="footerNames">Zach</a>
                    </div>
                </div>    
            </div>


        </footer>
        </>
    )
}

export default Footer;