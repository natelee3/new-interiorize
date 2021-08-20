import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import "./menu.css";
import "./shop.css";

const Shop = (props) => {

    const [shopData, setShopData] = useState([]);
    const [active1, setActive1] = useState(false);
    const [designArray, setDesignArray] = useState([]);
    const [categoryArray, setCategoryArray] = useState([]);
    const [colorArray, setColorArray] = useState([]);
    const [priceTierArray, setPriceTierArray] = useState([]);

    const getShopData = () => {
        const localurl = "http://localhost:3333/items";
        //const url = "https://api.interiorize.design/items";
        axios({
        method: "GET",
        url: localurl,
        })
        .then((response) => {
            console.log("Response is: ", response.data);  
            setShopData(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const getShopSearchData = async () => {
        // const localurl = "http://localhost:3333/items/shop-search";
        // //const url = "https://api.interiorize.design/items/shop-search";
        // const requestOptions = {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //       design_array: designArray,
        //       category_array: categoryArray,
        //       color_array: colorArray,
        //       priceTier_array: priceTierArray
        //     }),
        //   };
        //   const response = await fetch(localurl, requestOptions).then((response) => {
        //     console.log(response);
        //     //setShopData(response.data);
        //     return response
        //   }); 
        //   return response;

          const localurl = "http://localhost:3333/items";
          //const url = "https://api.interiorize.design/items";
          axios({
          method: "GET",
          url: localurl,
          })
          .then((response) => {
                console.log("Response is: ", response.data);  
                //FILTER DATA
                const filteredItems = filterItems(response.data);
                setShopData(filteredItems);
          })
          .catch((error) => {
                console.log(error);
          });
    };

    useEffect(() => {
        getShopData();
    }, []);

    const filterItems = (allItems) => {
        let filteredItems = [];
        let filteredItemsByDesign = [];
        const design_array = designArray;
        const category_array = categoryArray;
        const color_array = colorArray;
        const priceTier_array = priceTierArray;

        //filter by design tags
        if(design_array.length > 0)
        {
            design_array.forEach(design_tag_id => {
                allItems.forEach(item =>{
                    //If the tags of the item contain the style tag ID, add that item to the new list
                    item.tag_ids.forEach(tag_id => {
                        if(design_tag_id === tag_id)
                        {
                            filteredItemsByDesign.push(item);
                        }
                    })
                })
            })
        }
        if(filteredItemsByDesign.length > 0)
        {
            filteredItems = filteredItemsByDesign;
        }

        //filter by category tags
        let filteredItemsByDesignCategory = [];
        if(category_array.length > 0)
        {
            category_array.forEach(category_id => {
                filteredItemsByDesign.forEach(item => {
                    if(item.category_id === category_id)
                    {
                        filteredItemsByDesignCategory.push(item);
                    }
                })
            });
        }
        if(filteredItemsByDesignCategory.length > 0)
        {
            filteredItems = filteredItemsByDesignCategory;
        }

        //filter by colors
        let filteredItemsByDesignCategoryColor = [];
        if(color_array.length > 0)
        {
            color_array.forEach(color_id => {
                filteredItemsByDesignCategory.forEach(item => {
                    if(item.color_id === color_id)
                    {
                        filteredItemsByDesignCategoryColor.push(item);
                    }
                })
            })
        }
        if(filteredItemsByDesignCategoryColor.length > 0)
        {
            filteredItems = filteredItemsByDesignCategoryColor;
        }

        //filter by price tier
        let filteredItemsByDesignCategoryColorPrice = [];
        if(priceTier_array.length > 0)
        {
            priceTier_array.forEach(priceTier => {
                filteredItemsByDesignCategoryColor.forEach(item => {
                    if(priceTier === 1 && item.price >= 0 && item.price <= 40)
                    {
                        filteredItemsByDesignCategoryColorPrice.push(item);
                    }
                    if(priceTier === 2 && item.price >= 40 && item.price <= 80)
                    {
                        filteredItemsByDesignCategoryColorPrice.push(item);
                    }
                    if(priceTier === 3 && item.price >= 80 && item.price <= 120)
                    {
                        filteredItemsByDesignCategoryColorPrice.push(item);
                    }
                })

            })
        }
        if(filteredItemsByDesignCategoryColorPrice.length > 0)
        {
            filteredItems = filteredItemsByDesignCategoryColorPrice;
        }
        console.log(filteredItems);
        return filteredItems;
    }

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
                                <input type="checkbox" name="style-check-1" value="18" id="style-check-1" checked={!!designArray.includes(18)} onChange={(event) => handleDesignChange(event)}/>
                                <label className="sideLabel" for="style-check-1">Bohemian</label>
                            </div>
                            <div>
                                <input type="checkbox" name="style-check-2" value="17" id="style-check-2" checked={!!designArray.includes(17)} onChange={(event) => handleDesignChange(event)}/>
                                    <label className="sideLabel" for="style-check-2">Contemporary</label>
                            </div>
                            <div>
                                <input type="checkbox" name="style-check-3" value="16" id="style-check-3" checked={!!designArray.includes(16)} onChange={(event) => handleDesignChange(event)}/>
                                <label className="sideLabel" for="style-check-3">Farmhouse</label>
                            </div>
                            <div>
                                <input type="checkbox" name="style-check-4" value="15" id="style-check-4" checked={!!designArray.includes(15)} onChange={(event) => handleDesignChange(event)}/>
                                    <label className="sideLabel" for="style-check-4">Modern</label>
                            </div>
                        </div>
                        <hr />

                        <h3 className="detailTitle">Room</h3>
                        <div className="sideSection">
                            <div>
                                <input type="checkbox" name="room-check-1" value="3" id="room-check-1" checked={!!categoryArray.includes(3)} onChange={(event) => handleCategoryChange(event)}/>
                                <label className="sideLabel" for="room-check-1">Bathroom</label>
                            </div>
                            <div>
                                <input type="checkbox" name="room-check-2" value="2" id="room-check-2" checked={!!categoryArray.includes(2)} onChange={(event) => handleCategoryChange(event)}/>
                                <label className="sideLabel" for="room-check-2">Bedroom</label>
                            </div>
                            <div>
                                <input type="checkbox" name="room-check-3" value="4" id="room-check-3" checked={!!categoryArray.includes(4)} onChange={(event) => handleCategoryChange(event)}/>
                                    <label className="sideLabel" for="room-check-3">Kitchen</label>
                            </div>
                            <div>
                                <input type="checkbox" name="room-check-4" value="1" id="room-check-4" checked={!!categoryArray.includes(1)} onChange={(event) => handleCategoryChange(event)}/>
                                <label className="sideLabel" for="room-check-4">Living Room</label>
                            </div>
                            <div>
                                <input type="checkbox" name="room-check-5" value="5" id="room-check-5" checked={!!categoryArray.includes(5)} onChange={(event) => handleCategoryChange(event)}/>
                                    <label className="sideLabel" for="room-check-5">Patio</label>
                            </div>
                        </div>
                        <hr />

                        <h3 className="detailTitle">Color</h3>
                        <div className="sideSection">
                            <div>
                                <input type="checkbox" name="color-check-1" value="3" id="color-check" checked={!!colorArray.includes(3)} onChange={(event) => handleColorChange(event)}/>
                                <label className="sideLabel" for="color-check-1">Black</label>
                            </div>
                            <div>
                                <input type="checkbox" name="color-check-2" value="2" id="color-check" checked={!!colorArray.includes(2)} onChange={(event) => handleColorChange(event)}/>
                                    <label className="sideLabel" for="color-check-2">Blue</label>
                            </div>
                            <div>
                                <input type="checkbox" name="color-check-3" value="6" id="color-check" checked={!!colorArray.includes(6)} onChange={(event) => handleColorChange(event)}/>
                                <label className="sideLabel" for="color-check-3">Green</label>
                            </div>
                            <div>
                                <input type="checkbox" name="color-check-4" value="8" id="color-check" checked={!!colorArray.includes(8)} onChange={(event) => handleColorChange(event)}/>
                                    <label className="sideLabel" for="color-check-4">Orange</label>
                            </div>
                            <div>
                                <input type="checkbox" name="color-check-5" value="7" id="color-check" checked={!!colorArray.includes(7)} onChange={(event) => handleColorChange(event)}/>
                                <label className="sideLabel" for="color-check-5">Purple</label>
                            </div>
                            <div>
                                <input type="checkbox" name="color-check-6" value="1" id="color-check" checked={!!colorArray.includes(1)} onChange={(event) => handleColorChange(event)}/>
                                <label className="sideLabel" for="color-check-6">Red</label>
                            </div>
                            <div>
                                <input type="checkbox" name="color-check-7" value="4" id="color-check" checked={!!colorArray.includes(4)} onChange={(event) => handleColorChange(event)}/>
                                    <label className="sideLabel" for="color-check-7">White</label>
                            </div>
                            <div>
                                <input type="checkbox" name="color-check-8" value="5" id="color-check" checked={!!colorArray.includes(5)} onChange={(event) => handleColorChange(event)}/>
                                <label className="sideLabel" for="color-check-8">Yellow</label>
                            </div>
                        </div>
                        <hr />

                        <h3 className="detailTitle">Price</h3>
                        <div className="sideSection">
                            <div>
                                <input type="checkbox" name="price-check-1" value="1" id="price-check-1" checked={!!priceTierArray.includes(1)} onChange={(event) => handlePriceTierChange(event)}/>
                                <label className="sideLabel" for="price-check-1">$0 - $39</label>
                            </div>
                            <div>
                                <input type="checkbox" name="check-2" value="2" id="price-check-2" checked={!!priceTierArray.includes(2)} onChange={(event) => handlePriceTierChange(event)}/>
                                    <label className="sideLabel" for="price-check-2">$40 - $79</label>
                            </div>
                            <div>
                                <input type="checkbox" name="check-3" value="3" id="price-check-3" checked={!!priceTierArray.includes(3)} onChange={(event) => handlePriceTierChange(event)}/>
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
                                        <div className="pictureBox1">
                                            <img className="itemImg" src={`https://api.interiorize.design/images/${item.img_src}`} alt="Img of Item" />
                                        </div>
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