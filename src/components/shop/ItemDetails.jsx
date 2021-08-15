import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./itemDetails.css";

const ItemDetails = () => {
  const [itemData, setItemData] = useState(null);

  //Get item by id from our lovely api
  let { id } = useParams();

  //upon component mount, fetch the info for that id!
  useEffect(() => {
    const getItemInfo = async (id) => {
      try {
        const response = await fetch(
          `https://api.interiorize.design/items/single/${id}`
        ).then((response) => response.json());
        console.log("RESPONSE", response[0]);
        let item = response[0];
        setItemData(item);
        console.log("ITEM DATA IS:", itemData);
      } catch (error) {
        console.error(error.message);
      }
    };

    getItemInfo(id);
  }, []);

  return (
    <>
      {itemData !== null ? (
        <div className="detailsContainer">
          <div className="imgBox">
            <img
              src={`https://api.interiorize.design/images/${itemData.img_src}`}
              alt="product image"
              className="productDetailsImage"
            />
          </div>
          <div className="itemDescBox">
            <h1 className="itemName">{itemData.item_name}</h1>
            <hr />
            <h3 className="itemBrand">{itemData.brand}</h3>
            <h1 className="itemPrice">${itemData.price}</h1>
            <p className="itemDesc">
              <strong>About this item:</strong>
              <br />
              {itemData.description}
            </p>
            <h3 className="itemCategory">Category: {itemData.category_name}</h3>
            <h3 className="itemColor">Color: {itemData.color_name}</h3>
            <h3 className="itemTags">
              Tags: {itemData.tags[0]}, {itemData.tags[1]}
            </h3>
            <h3 className="inStock">In Stock!</h3>
            <br />
            <button className="addToCartButton" type="button">
              Add To Cart
            </button>
            <div className="addedToCart">Notification modal pops up?</div>
          </div>
        </div>
      ) : (
        <p>Loading Product information...</p>
      )}
      <div className="goBack">
        <button type="button" className="goBackButton">
          Back To Results
        </button>
      </div>
    </>
  );
};

export default ItemDetails;
