import React from 'react';
import { useState } from "react";
import "./menu.css";

const Menu = () => {
    const [active1, setActive1] = useState(false)
    
    return (
        <>
            <nav className="navbar1">
                <button onClick={() => setActive1(!active1)} className="toggle-button1">
                <span className="bar1"></span>
                <span className="bar1"></span>
                <span className="bar1"></span>
                </button>
                <div className={!!active1 ? "navbar-links1 active1" : "navbar-links1"}>
                    <ul>
                        <li>
                            This is the menu
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )  
}

export default Menu;