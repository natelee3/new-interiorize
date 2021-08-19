import React from "react";
import { Link } from 'react-router-dom';
import "./footer.css";
// import logo from "./imgs/logo.png";

const Footer = () => {

    return (
        <>
        <footer className="footerContainer">
            <div className="importantLinks">
                <div class="area1">
                    <p className="companyFooter">Interiorize, Inc.</p>
                </div>
                <div class="area2">
                    <h2 className="footerTitle">Company</h2>
                    <hr className="line" />
                    <Link to="/user-profile" className="footerLinks">My Profile</Link>
                    <Link to="/user-profile" className="footerLinks">Recent Orders</Link>
                    <Link to="/style-quiz" className="footerLinks">Style Quiz</Link>
                </div>
                <div class="area3">
                    <h2 className="footerTitle">Dev Github</h2>
                    <hr className="line" />
                    <div className="c-box">
                        <div className="c-1">
                            <a href="https://github.com/natelee3/interiorize" target="_blank" rel="noreferrer" className="footerNames">Project</a>
                            <br />
                            <a href="https://github.com/logancooper" target="_blank" rel="noreferrer" className="footerNames">Logan</a>
                            <br />
                            <a href="https://github.com/natelee3" target="_blank" rel="noreferrer" className="footerNames">Nate</a>
                        </div>
                        <div className="c-2">
                            <a href="https://github.com/sarahdepalo" target="_blank" rel="noreferrer" className="footerNames">Sarah</a>
                            <br />
                            <a href="https://github.com/zach-a-g" target="_blank" rel="noreferrer" className="footerNames">Zach</a>
                        </div>    
                    </div>

                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;