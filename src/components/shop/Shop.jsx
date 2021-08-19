import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import "./menu.css";
import "./shop.css";

const Shop = (props) => {

    const [shopData, setShopData] = useState([]);
    const [active1, setActive1] = useState(false);

    const getShopData = () => {
        axios({
        method: "GET",
        url: `https://api.interiorize.design/items`,
        })
        .then((response) => {
            console.log("Response is: ", response.data);  
            setShopData(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const getShopSearchData = () => {
        axios({
        method: "GET",
        url: `https://api.interiorize.design/items/shop-search`,
        })
        .then((response) => {
            console.log("Response is: ", response.data);  
            setShopData(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        getShopData();
    }, []);

    return (
        <>
        <div className="mainContainer1">
            <nav className="navbar1">
                <button onClick={() => setActive1(!active1)} className="toggle-button1">
                <span className="bar1"></span>
                <span className="bar1"></span>
                <span className="bar1"></span>
                </button>
                <div className={!!active1 ? "navbar-links1 active1" : "navbar-links1"}>

                <div className="sideBar">
                    <div className="sideContent">
                        <h3 className="detailTitle">Design Style</h3>
                        <div className="sideSection">
                            <div>
                                <input type="checkbox" name="style-check-1" value="style-check-1" id="style-check-1" />
                                <label className="sideLabel" for="style-check-1">Bohemian</label>
                            </div>
                            <div>
                                <input type="checkbox" name="style-check-2" value="style-check-2" id="style-check-2" />
                                    <label className="sideLabel" for="style-check-2">Contemporary</label>
                            </div>
                            <div>
                                <input type="checkbox" name="style-check-3" value="style-check-3" id="style-check-3" />
                                <label className="sideLabel" for="style-check-3">Farmhouse</label>
                            </div>
                            <div>
                                <input type="checkbox" name="style-check-4" value="style-check-4" id="style-check-4" />
                                    <label className="sideLabel" for="style-check-4">Modern</label>
                            </div>
                        </div>
                        <hr />

                        <h3 className="detailTitle">Room</h3>
                        <div className="sideSection">
                            <div>
                                <input type="checkbox" name="room-check-1" value="room-check-1" id="room-check-1" />
                                <label className="sideLabel" for="room-check-1">Bathroom</label>
                            </div>
                            <div>
                                <input type="checkbox" name="room-check-2" value="room-check-2" id="room-check-2" />
                                <label className="sideLabel" for="room-check-2">Bedroom</label>
                            </div>
                            <div>
                                <input type="checkbox" name="room-check-3" value="room-check-3" id="room-check-3" />
                                    <label className="sideLabel" for="room-check-3">Kitchen</label>
                            </div>
                            <div>
                                <input type="checkbox" name="room-check-4" value="room-check-4" id="room-check-4" />
                                <label className="sideLabel" for="room-check-4">Living Room</label>
                            </div>
                            <div>
                                <input type="checkbox" name="room-check-5" value="room-check-5" id="room-check-5" />
                                    <label className="sideLabel" for="room-check-5">Patio</label>
                            </div>
                            <div>
                                <input type="checkbox" name="room-check-6" value="room-check-6" id="room-check-6" />
                                    <label className="sideLabel" for="room-check-6">All Rooms</label>
                            </div>
                        </div>
                        <hr />

                        <h3 className="detailTitle">Color</h3>
                        <div className="sideSection">
                            <div>
                                <input type="checkbox" name="color-check-1" value="color-check-1" id="color-check" />
                                <label className="sideLabel" for="color-check-1">Black</label>
                            </div>
                            <div>
                                <input type="checkbox" name="color-check-2" value="color-check-2" id="color-check" />
                                    <label className="sideLabel" for="color-check-2">Blue</label>
                            </div>
                            <div>
                                <input type="checkbox" name="color-check-3" value="color-check-3" id="color-check" />
                                <label className="sideLabel" for="color-check-3">Green</label>
                            </div>
                            <div>
                                <input type="checkbox" name="color-check-4" value="color-check-4" id="color-check" />
                                    <label className="sideLabel" for="color-check-4">Orange</label>
                            </div>
                            <div>
                                <input type="checkbox" name="color-check-5" value="color-check-5" id="color-check" />
                                <label className="sideLabel" for="color-check-5">Purple</label>
                            </div>
                            <div>
                                <input type="checkbox" name="color-check-6" value="color-check-6" id="color-check" />
                                <label className="sideLabel" for="color-check-6">Red</label>
                            </div>
                            <div>
                                <input type="checkbox" name="color-check-7" value="color-check-7" id="color-check" />
                                    <label className="sideLabel" for="color-check-7">White</label>
                            </div>
                            <div>
                                <input type="checkbox" name="color-check-8" value="color-check-8" id="color-check" />
                                <label className="sideLabel" for="color-check-8">Yellow</label>
                            </div>
                        </div>
                        <hr />

                        <h3 className="detailTitle">Price</h3>
                        <div className="sideSection">
                            <div>
                                <input type="checkbox" name="price-check-1" value="price-check-1" id="price-check-1" />
                                <label className="sideLabel" for="price-check-1">$0 - $39</label>
                            </div>
                            <div>
                                <input type="checkbox" name="check-2" value="price-check-2" id="price-check-2" />
                                    <label className="sideLabel" for="price-check-2">$40 - $79</label>
                            </div>
                            <div>
                                <input type="checkbox" name="check-3" value="price-check-3" id="price-check-3" />
                                <label className="sideLabel" for="price-check-3">$80 - $120</label>
                            </div>
                        </div>
                        <hr />
                    </div>

                    <button id="button1" onClick={() => {getShopSearchData();}}>
                        Get Items
                    </button>
                
                </div>
                </div>
            </nav>
                
            <div className="itemContainer">
                <div className="itemContent">
                    <ul className="itemList">
                    {shopData.length > 0 ?(
                        shopData.map((item, props, id) => (
                        <>
                            <div className="itemCard">
                                <ul className="itemUl">
                                    <li className="itemLi" key={id}>
                                        <img className="itemImg" src={`https://api.interiorize.design/images/${item.img_src}`} alt="Img of Item" />
                                        <p className="itemName">{item.item_name}</p>
                                        <p className="itemPrice">${item.price}</p>
                                        <Link className="moreButton" to={`/shop-intro/shop/${item.id}`}>View More</Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                        ))
                    ): <></>}
                    </ul> 
                </div>
            </div>
         </div>
        </>
    )
}

export default Shop