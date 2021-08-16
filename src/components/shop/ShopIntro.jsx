// import React, { useState } from 'react'
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./shopIntro.css"
// import Shop from "./Shop"

const ShopIntro = () => {

    return (
        <>
            <div className="mainContainer">
                <div className="title">
                    <h1 className="titleName">Shop By Room</h1>  
                </div>

                
                <div className="shopNav">
                    <div className="shopList">

                        <a className="shopRoomLinks" href="/shop-intro/shop">
                            <div className="roomCard">
                                <div className="livingCard">
                                    <div className="nameBox">
                                        <h2 className="roomName">Living Room</h2>
                                    </div>
                                </div>
                            </div>
                        </a>        
                        
                        <a className="shopRoomLinks" href="/shop-intro/shop">
                            <div className="roomCard">
                                <div className="bedroomCard">
                                    <div className="nameBox">
                                        <h2 className="roomName">Bedroom</h2>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a className="shopRoomLinks" href="/shop-intro/shop">
                            <div className="roomCard">
                                <div className="bathCard">
                                    <div className="nameBox">
                                        <h2 className="roomName">Bathroom</h2>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a className="shopRoomLinks" href="/shop">
                            <div className="roomCard">
                                <div className="kitchenCard">
                                    <div className="nameBox">
                                        <h2 className="roomName">Kitchen</h2>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a className="shopRoomLinks" href="/shop-intro/shop">
                            <div className="roomCard">
                                <div className="patioCard">
                                    <div className="nameBox">
                                        <h2 className="roomName">Patio</h2>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a className="shopRoomLinks" href="/shop-intro/shop">
                            <div className="roomCard">
                                <div className="allRoomCard">
                                    <div className="nameBox">
                                        <h2 className="roomName">All Rooms</h2>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
                <div className="shoppingCart">
                    <div className="cartButton">

                    </div>
                </div>
            </div>
     
        </>
        )
    }

    export default ShopIntro