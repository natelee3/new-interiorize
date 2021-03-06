import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import StateContext from "../../context";
import CartModal from '../shoppingCart/CartModal';
import "./itemDetails.css";

const ItemDetails = () => {
  const [itemData, setItemData] = useState(null);
  const [value, dispatch] = useContext(StateContext);
  const [isVisible, setIsVisible] = useState(false);

  const history = useHistory();

  const _handleClick = () => {
    console.log("Item Data", itemData);
    dispatch({
      type: "ACTION_ADD_TO_CART",
      payload: itemData,
    });
    setIsVisible(!isVisible);
  };

  //Get item by id from our lovely api
  let { id } = useParams();

  //upon component mount, fetch the info for that id!
  useEffect(() => {
    const getItemInfo = async (id) => {
      try {
        const response = await fetch(
          `https://api.interiorize.design/items/single/${id}`
        ).then((response) => response.json());
        let item = response[0];
        setItemData(item);
        console.log("ITEM DATA IS:", itemData);
      } catch (error) {
        console.error(error.message);
      }
    };

    getItemInfo(id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const goBack = () => {
    history.goBack();
  }

  //We will pass this function down to the modal so it can change the state when we press the close button.
  const closeModal = (event) => {
    event.preventDefault();
    setIsVisible(!isVisible);
  }

  return (
    <>

      {itemData !== null ? (
        <div className="detailsContainer">
          <div className="imgBox">
            <img
              src={`https://api.interiorize.design/images/${itemData.img_src}`}
              alt="product"
              className="productDetailsImage"
            />
          </div>
          <div className="itemDescBox">
            <div className="itemNameBox">
              <h1 className="itemName1">{itemData.item_name}</h1>
            </div>
            <hr />
            <h3 className="itemBrand">{itemData.brand}</h3>
            <h1 className="itemPrice">${itemData.price}</h1>
            <p className="itemDesc">
              <strong>About this item:</strong>
              <br />
              {itemData.description}
            </p>
            <h3 className="itemCategory"><strong>Category:</strong> {itemData.category_name}</h3>
            <h3 className="itemColor"><strong>Color:</strong> {itemData.color_name}</h3>
            <h3 className="itemTags">
              Tags: {itemData.tags[0]}, {itemData.tags[1]}
            </h3>
            <h3 className="inStock"><strong>In Stock!</strong></h3>
            <br />

            <div className="twoBtnBox">
              <button className="addToCartButton" onClick={() => _handleClick()} type="button">
                Add To Cart
              </button>
              <button type="button" className="goBackButton" onClick={goBack}>
                &larr; Back To Results
              </button>
            </div>  
          
            <CartModal
            isVisible={isVisible}
            closeModal={closeModal}
            />
          </div>
        </div>
      ) : (
        <p>Loading Product information...</p>
      )}
    </>
  );
};

export default ItemDetails;
