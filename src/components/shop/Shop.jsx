import React, { useState } from 'react'
import axios from "axios";
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./shop.css"
import "./shopDetails.css"


const Shop = () => {
    const [shopData, setShopData] = useState([]);
    // const [item_name, setItemName] = useState("name");
    // const [description, setDescription] = useState("description");
    // const [img_src, setImgSrc] = useState("");
    // const [price, SetPrice] = useState("");
    // const [brand, SetBrand] = useState("");
    // const [category_name, SetCategoryName] = useState("");
    // const [color_name, SetColorName] = useState("");
    // const [tags, SetTags] = useState("");

    const getShopData = () => {
        axios({
        method: "GET",
        url: `https://api.interiorize.design/items`,
        })
        .then((response) => {
            console.log("Response is: ", response.data);  

            // setItemName(response.data.item_name);
            // setDescription(response.data.description);
            // console.log("description: ", response.data.description)
            // setImgSrc(response.data.img_src);
            setShopData(response.data);

        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            
            <div className="mainContainer1">
                <div className="sideBar">
                    <div className="roomSection">
                        <h1 className="detailTitle">Filters</h1>
                        <hr />
                        <h2 className="detailTitle">Design Style</h2>
                        <ul>
                            <li>Modern</li>
                            <li>Farmhouse</li>
                            <li>Contemporary</li>
                            <li>Bohemian</li>
                        </ul>
                        <hr />

                        <h2 className="detailTitle">Color</h2>
                        <div className="sideSection">
                            <div>
                                <input type="checkbox" name="color-check-1" value="check-1" id="check-1" />
                                <label for="check-1">Black</label>
                            </div>
                            <div>
                                <input type="checkbox" name="color-check-2" value="check-2" id="check-2" />
                                    <label for="check-2">Blue</label>
                            </div>
                            <div>
                                <input type="checkbox" name="color-check-3" value="check-3" id="check-3" />
                                <label for="check-3">Green</label>
                            </div>
                            <div>
                                <input type="checkbox" name="color-check-4" value="check-2" id="check-2" />
                                    <label for="check-2">Red</label>
                            </div>
                            <div>
                                <input type="checkbox" name="color-check-5" value="check-3" id="check-3" />
                                <label for="check-3">Green</label>
                            </div>
                        </div>
                        <hr />

                        <h2 className="detailTitle">Price</h2>
                        <div className="sideSection">
                            <div>
                                <input type="checkbox" name="check-1" value="check-1" id="check-1" />
                                <label for="check-1">$0 - $40</label>
                            </div>
                            <div>
                                <input type="checkbox" name="check-2" value="check-2" id="check-2" />
                                    <label for="check-2">$40 - $80</label>
                            </div>
                            <div>
                                <input type="checkbox" name="check-3" value="check-3" id="check-3" />
                                <label for="check-3">$80 - $120</label>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="itemContainer">


                    <button id="button1" onClick={() => {
                        getShopData();
                    }}
                    >
                    Get Items
                    </button>

                    <div className="itemCard">
                        <ul className="itemList">
                        {shopData.length > 0 ?(
                            shopData.map((item, index) => (
                            <>
                                <ul className="itemUl">
                                    <li kkey={`${item.item_name}-${index}`}>
                                        <img className="itemImg" src={`https://api.interiorize.design/images/${item.img_src}`} alt="Img of Item" />
                                        <p>{item.item_name}</p>
                                        <p>Description : {item.description}</p>
                                        <button type="button">See More</button>
                                    </li>
                                </ul>
                            </>
                            ))
                        ): <></>}
                        </ul> 
                    </div>


                    {/* <div className="itemCard">
                        <div className="itemImg">
                            <img></img>
                        </div>
                        <div className="itemDescription">
                            <p>Name</p>
                            <p>Description. Button sends to item description page. Or just flips card?</p>
                            <button type="button">See More</button>
                        </div>
                    </div>  */}


                </div>


            </div>
        </>

















        // <>
        //     <Router>
        //         <Switch>

        //                 <div className="mainContainer">
        //                     <div className="title">
        //                         <h1 className="titleName">Shop By Room</h1>  
        //                     </div>

        //                     <div className="shopNav">
        //                         <div className="shopList">
        //                             <div className="roomCard">
        //                                 <div className="livingCard">
        //                                     <div className="nameBox">
        //                                         <h2 className="roomName">Living Room</h2>
        //                                     </div>
        //                                 </div>
        //                             </div>
                                    
        //                             <div className="roomCard">
        //                                 <div className="bedroomCard">
        //                                     <div className="nameBox">
        //                                         <h2 className="roomName">Bedroom</h2>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                             <div className="roomCard">
        //                                 <div className="bathCard">
        //                                     <div className="nameBox">
        //                                         <h2 className="roomName">Bathroom</h2>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                             <div className="roomCard">
        //                                 <div className="kitchenCard">
        //                                     <div className="nameBox">
        //                                         <h2 className="roomName">Kitchen</h2>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                             <div className="roomCard">
        //                                 <div className="patioCard">
        //                                     <div className="nameBox">
        //                                         <h2 className="roomName">Outdoor/Patio</h2>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                             <div className="roomCard">
        //                                 <div className="allRoomCard">
        //                                     <div className="nameBox">
        //                                         <h2 className="roomName">All Rooms</h2>
        //                                     </div>
        //                                 </div>
        //                             </div>
            
        //                         </div>
        //                     </div>
        //                     <div className="shoppingCart">
        //                         <div className="cartButton">

        //                         </div>
        //                     </div>
        //                 </div>

        //         </Switch>
        //     </Router>       
        // </>
    )
}

export default Shop