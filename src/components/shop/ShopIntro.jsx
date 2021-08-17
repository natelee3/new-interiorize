// import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./shopIntro.css"


const ShopIntro = () => {

    return (
        <>
            <div className="mainContainer">
                <div className="title">
                    <h1 className="titleName">Shop By Room</h1>  
                </div>

                
                <div className="shopNav">
                    <div className="shopList">

                        <Link className="shopRoomLinks" to="/shop-intro/shop">
                            <div className="roomCard">
                                <div className="livingCard">
                                    <div className="nameBox">
                                        <h2 className="roomName">Living Room</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>        
                        
                        <Link className="shopRoomLinks" to="/shop-intro/shop">
                            <div className="roomCard">
                                <div className="bedroomCard">
                                    <div className="nameBox">
                                        <h2 className="roomName">Bedroom</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link className="shopRoomLinks" to="/shop-intro/shop">
                            <div className="roomCard">
                                <div className="bathCard">
                                    <div className="nameBox">
                                        <h2 className="roomName">Bathroom</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link className="shopRoomLinks" to="/shop">
                            <div className="roomCard">
                                <div className="kitchenCard">
                                    <div className="nameBox">
                                        <h2 className="roomName">Kitchen</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link className="shopRoomLinks" to="/shop-intro/shop">
                            <div className="roomCard">
                                <div className="patioCard">
                                    <div className="nameBox">
                                        <h2 className="roomName">Patio</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link className="shopRoomLinks" to="/shop-intro/shop">
                            <div className="roomCard">
                                <div className="allRoomCard">
                                    <div className="nameBox">
                                        <h2 className="roomName">All Rooms</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </>
        )
    }

    export default ShopIntro