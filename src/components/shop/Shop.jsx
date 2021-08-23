import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./menu.css";
import "./shop.css";

const Shop = () => {
    const [shopData, setShopData] = useState([]);
    const [active1, setActive1] = useState(false);
    const [designArray, setDesignArray] = useState([]);
    const [categoryArray, setCategoryArray] = useState([parseInt(localStorage.getItem('Room choice'))]);  
    const [colorArray, setColorArray] = useState([]);
    const [priceTierArray, setPriceTierArray] = useState([]);

   
    const getShopSearchData = async () => {
        //const localurl = `http://localhost:3333/items/shop-search?designArray=${designArray}&categoryArray=${categoryArray}&colorArray=${colorArray}&priceTierArray=${priceTierArray}`;
        const url = `https://api.interiorize.design/items/shop-search?designArray=${designArray}&categoryArray=${categoryArray}&colorArray=${colorArray}&priceTierArray=${priceTierArray}`;
        const response = await fetch(url).then((response) => response.json());
        //console.log(response);
        setShopData(response);
    };

    useEffect(() => {
        const getShopData = async () => {
            //const localurl = "http://localhost:3333/items";
            const url = "https://api.interiorize.design/items";
            const response = await fetch(url).then((response) => response.json());
            setShopData(response);
        };

        const getShopSearchData = async () => {
            //const localurl = `http://localhost:3333/items/shop-search?designArray=${designArray}&categoryArray=${categoryArray}&colorArray=${colorArray}&priceTierArray=${priceTierArray}`;
            const url = `https://api.interiorize.design/items/shop-search?designArray=${designArray}&categoryArray=${categoryArray}&colorArray=${colorArray}&priceTierArray=${priceTierArray}`;
            const response = await fetch(url).then((response) => response.json());
            //console.log(response);
            setShopData(response);
        };

        if (categoryArray[0] === 6) {
            getShopData();
        } else {
            getShopSearchData();
        }
    
    }, [categoryArray, colorArray, priceTierArray, designArray]);

    const handleDesignChange = (event) => {
        if (event.target.checked && !designArray.includes(event.target.value)) {
          setDesignArray([...designArray, parseInt(event.target.value)]);
        } else {
          let filteredAry = designArray.filter(
            (e) => parseInt(e) !== parseInt(event.target.value)
          );
          setDesignArray(filteredAry);
        }
      };

      const handleCategoryChange = (event) => {
        if (event.target.checked && !categoryArray.includes(event.target.value)) {
          setCategoryArray([...categoryArray, parseInt(event.target.value)]);
        } else {
          let filteredAry = categoryArray.filter(
            (e) => parseInt(e) !== parseInt(event.target.value)
          );
          setCategoryArray(filteredAry);
        }
      };

      const handleColorChange = (event) => {
        if (event.target.checked && !colorArray.includes(event.target.value)) {
          setColorArray([...colorArray, parseInt(event.target.value)]);
        } else {
          let filteredAry = colorArray.filter(
            (e) => parseInt(e) !== parseInt(event.target.value)
          );
          setColorArray(filteredAry);
        }
      };

      const handlePriceTierChange = (event) => {
        if (event.target.checked && !priceTierArray.includes(event.target.value)) {
          setPriceTierArray([...priceTierArray, parseInt(event.target.value)]);
        } else {
          let filteredAry = priceTierArray.filter(
            (e) => parseInt(e) !== parseInt(event.target.value)
          );
          setPriceTierArray(filteredAry);
        }
      };

      const clearShopData = () => {
          setCategoryArray([]);
          setColorArray([]);
          setDesignArray([]);
          setPriceTierArray([]);
      }

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

                        <div className="sideBarSections">
                            <h3 className="detailTitle">Design Style</h3>
                            <div className="sideSection">
                                <div>
                                    <input type="checkbox" name="style-check-1" value="18" id="style-check-1" checked={!!designArray.includes(18)} onChange={(event) => handleDesignChange(event)}/>
                                    <label className="sideLabel" htmlFor="style-check-1">Bohemian</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="style-check-2" value="17" id="style-check-2" checked={!!designArray.includes(17)} onChange={(event) => handleDesignChange(event)}/>
                                        <label className="sideLabel" htmlFor="style-check-2">Contemporary</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="style-check-3" value="16" id="style-check-3" checked={!!designArray.includes(16)} onChange={(event) => handleDesignChange(event)}/>
                                    <label className="sideLabel" htmlFor="style-check-3">Farmhouse</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="style-check-4" value="15" id="style-check-4" checked={!!designArray.includes(15)} onChange={(event) => handleDesignChange(event)}/>
                                        <label className="sideLabel" htmlFor="style-check-4">Modern</label>
                                </div>
                            </div>
                            
                        </div>
                        <hr className="navLine"/>

                        <div className="sideBarSections">
                            <h3 className="detailTitle">Room</h3>
                            <div className="sideSection">
                                <div>
                                    <input type="checkbox" name="room-check-1" value="3" id="room-check-1" checked={!!categoryArray.includes(3)} onChange={(event) => handleCategoryChange(event)}/>
                                    <label className="sideLabel" htmlFor="room-check-1">Bathroom</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="room-check-2" value="2" id="room-check-2" checked={!!categoryArray.includes(2)} onChange={(event) => handleCategoryChange(event)}/>
                                    <label className="sideLabel" htmlFor="room-check-2">Bedroom</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="room-check-3" value="4" id="room-check-3" checked={!!categoryArray.includes(4)} onChange={(event) => handleCategoryChange(event)}/>
                                        <label className="sideLabel" htmlFor="room-check-3">Kitchen</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="room-check-4" value="1" id="room-check-4" checked={!!categoryArray.includes(1)} onChange={(event) => handleCategoryChange(event)}/>
                                    <label className="sideLabel" htmlFor="room-check-4">Living Room</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="room-check-5" value="5" id="room-check-5" checked={!!categoryArray.includes(5)} onChange={(event) => handleCategoryChange(event)}/>
                                        <label className="sideLabel" htmlFor="room-check-5">Patio</label>
                                </div>
                            </div>
                            
                        </div>
                        <hr className="navLine" />

                        <div className="sideBarSections">
                            <h3 className="detailTitle">Color</h3>
                            <div className="sideSection">
                                <div>
                                    <input type="checkbox" name="color-check-1" value="3" id="color-check" checked={!!colorArray.includes(3)} onChange={(event) => handleColorChange(event)}/>
                                    <label className="sideLabel" htmlFor="color-check-1">Black</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="color-check-2" value="2" id="color-check" checked={!!colorArray.includes(2)} onChange={(event) => handleColorChange(event)}/>
                                        <label className="sideLabel" htmlFor="color-check-2">Blue</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="color-check-3" value="6" id="color-check" checked={!!colorArray.includes(6)} onChange={(event) => handleColorChange(event)}/>
                                    <label className="sideLabel" htmlFor="color-check-3">Green</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="color-check-4" value="8" id="color-check" checked={!!colorArray.includes(8)} onChange={(event) => handleColorChange(event)}/>
                                        <label className="sideLabel" htmlFor="color-check-4">Orange</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="color-check-5" value="7" id="color-check" checked={!!colorArray.includes(7)} onChange={(event) => handleColorChange(event)}/>
                                    <label className="sideLabel" htmlFor="color-check-5">Purple</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="color-check-6" value="1" id="color-check" checked={!!colorArray.includes(1)} onChange={(event) => handleColorChange(event)}/>
                                    <label className="sideLabel" htmlFor="color-check-6">Red</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="color-check-7" value="4" id="color-check" checked={!!colorArray.includes(4)} onChange={(event) => handleColorChange(event)}/>
                                        <label className="sideLabel" htmlFor="color-check-7">White</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="color-check-8" value="5" id="color-check" checked={!!colorArray.includes(5)} onChange={(event) => handleColorChange(event)}/>
                                    <label className="sideLabel" htmlFor="color-check-8">Yellow</label>
                                </div>
                            </div>
                        </div>
                        <hr className="navLine"/>

                        <div className="sideBarSections">
                            <h3 className="detailTitle">Price</h3>
                            <div className="sideSection">
                                <div>
                                    <input type="checkbox" name="price-check-1" value="1" id="price-check-1" checked={!!priceTierArray.includes(1)} onChange={(event) => handlePriceTierChange(event)}/>
                                    <label className="sideLabel" htmlFor="price-check-1">$0 - $39</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="check-2" value="2" id="price-check-2" checked={!!priceTierArray.includes(2)} onChange={(event) => handlePriceTierChange(event)}/>
                                        <label className="sideLabel" htmlFor="price-check-2">$40 - $79</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="check-3" value="3" id="price-check-3" checked={!!priceTierArray.includes(3)} onChange={(event) => handlePriceTierChange(event)}/>
                                    <label className="sideLabel" htmlFor="price-check-3">$80 - $120</label>
                                </div>
                            </div>
                            
                        </div>
                
                    </div>
                    <br />
                    {/* <button id="button1" onClick={() => {getShopSearchData();}}>
                        Get Items
                    </button> */}
                    <button onClick={()=> {clearShopData();}}>
                        Clear Selections
                    </button>
                    <br />
                
                </div>
                </div>
            </nav>
                
            <div className="itemContainer">
                <div className="itemContent">
                    <ul className="itemList">
                        
                    {shopData.length > 0 ?(
                        shopData.map((item, id) => (
                        <>
                            <Link to={`/shop-intro/shop/${item.id}`}>
                                <div className="itemCard">
                                    <ul className="itemUl">
                                        <li className="itemLi" key={id}>
                                            <div className="pictureBox1">
                                                <img className="itemImg" src={`https://api.interiorize.design/images/${item.img_src}`} alt="Img of Item" />
                                            </div>
                                            <p className="itemName">{item.item_name}</p>
                                            <p className="itemPrice">${item.price}</p>
                                            <button className="moreButton primaryBtn">View More</button>
                                        </li>
                                    </ul>
                                </div>
                            </Link>
                        </>
                        ))
                    ): <p>Sorry, we don't have any items matching that criteria.</p>}
                    </ul> 
                </div>
            </div>
         </div>
        </>
    )
}

export default Shop