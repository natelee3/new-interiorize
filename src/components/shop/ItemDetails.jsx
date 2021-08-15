import { useParams } from "react-router-dom";
import "./itemDetails.css";

const ItemDetails = () => {

  return (
    <>
        <div className="goBack">
            <button type="button" className="goBackButton">Back To Results</button>
        </div>
        <div className="detailsContainer">

            <div className="imgBox">
                <h1 className="itemImg">Image goes here</h1>
            </div>
            <div className="itemDescBox">
                <h1 className="itemName">Name of the item goes here</h1>
                <hr />
                <h3 className="itemBrand">Brand: Brand goes here</h3>
                <h1 className="itemPrice">$59.99</h1>
                <h3 className="itemDesc"><strong>About this item:</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, dignissimos ex harum amet soluta distinctio doloribus quam aliquam possimus officia corporis illo. Vel est soluta repellendus laudantium voluptatum suscipit ratione!</h3>
                <h3 className="itemCategory">Category: Bathroom</h3>
                <h3 className="itemColor">Colors: Blue, White</h3>
                <h3 className="itemTags">Tags: Pillow</h3>
                <h3 className="inStock">In Stock!</h3>
                <br />
                <button className="addToCartButton" type="button">Add To Cart</button>
                <div className="addedToCart">
                    Notification modal pops up?
                </div>
            </div>
        </div>
    </>
  );
};

export default ItemDetails;