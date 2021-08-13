import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./shop.css"
import "./shopDetails.css"


const Shop = () => {

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
                        <ul>
                            <li>Blue</li>
                            <li>White</li>
                            <li>Yellow</li>
                            <li>Red</li>
                        </ul>
                        <div>
                            <div>
                                <input type="checkbox" name="check-1" value="check-1" id="check-1" />
                                <label for="check-1">Black</label>
                            </div>
                            <div>
                                <input type="checkbox" name="check-2" value="check-2" id="check-2" />
                                    <label for="check-2">Blue</label>
                            </div>
                            <div>
                                <input type="checkbox" name="check-3" value="check-3" id="check-3" />
                                <label for="check-3">Green</label>
                            </div>
                            <div>
                                <input type="checkbox" name="check-2" value="check-2" id="check-2" />
                                    <label for="check-2">Red</label>
                            </div>
                            <div>
                                <input type="checkbox" name="check-3" value="check-3" id="check-3" />
                                <label for="check-3">Green</label>
                            </div>
                        </div>
                        <hr />
                        <h2 className="detailTitle">Price</h2>
                        <ul >
                            <li>$0 - $40</li>
                            <li>$40 - $80</li>
                            <li>$80 - $120</li>
                        </ul>
                    </div>
                </div>
                <div className="itemContainer">
                    <div className="itemCard">
                        <div className="itemImg">
                            <img></img>
                        </div>
                        <div className="itemDescription">
                            <p>Name</p>
                            <p>Description. Button sends to item description page. Or just flips card?</p>
                            <button type="button">See More</button>
                        </div>
                    </div>
                    <div className="itemCard">
                        <div className="itemImg">
                            <img></img>
                        </div>
                        <div className="itemDescription">
                            <p>Name</p>
                            <p>Description. Button sends to item description page. Or just flips card?</p>
                            <button type="button">See More</button>
                        </div>
                    </div>
                    <div className="itemCard">
                        <div className="itemImg">
                            <img></img>
                        </div>
                        <div className="itemDescription">
                            <p>Name</p>
                            <p>Description. Button sends to item description page. Or just flips card?</p>
                            <button type="button">See More</button>
                        </div>
                    </div>
                    <div className="itemCard">
                        <div className="itemImg">
                            <img></img>
                        </div>
                        <div className="itemDescription">
                            <p>Name</p>
                            <p>Description. Button sends to item description page. Or just flips card?</p>
                            <button type="button">See More</button>
                        </div>
                    </div>
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