import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Modal from './Modal';
import "./userprofile.css";

const UserProfile = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="shipmentCol">
            <h1>Your Account</h1>
            <h2>Recent Shipment</h2>
            {/* Ternary statement Displays: 'you've got items on the way' or 'schedule an order!' based on status */}
            <p>You've got items on the way! </p>
            <div className="shipmentContainer">
          
              <div className="productContainer">
                <img
                  src="https://api.interiorize.design/images/desoto_oriental_area_rug.jpeg"
                  alt="item on the way"
                  className="productImage"
                />
                <button>View More</button>
              </div>
              <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div className="productContainer">
                  <img
                    src="https://api.interiorize.design/images/bohemian_landscape_painting.jpg"
                    alt="item on the way"
                    className="productImage"
                  />
                  <button onClick={(event) => handleClick(event)}>
                    View More
                  </button>
                </div>
                <div className="productContainer">
                  <h3>Product Name Goes Here</h3>
                  <p>
                    Product Description: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Quisque eget sapien ipsum. Suspendisse eget
                    aliquet quam, vel venenatis elit. Etiam lacinia sit amet
                    urna vel semper.
                  </p>
                  <button onClick={(event) => handleClick(event)}>
                    Return
                  </button>
                </div>
              </ReactCardFlip>
              <div className="productContainer">
                <img
                  src="https://api.interiorize.design/images/desoto_oriental_area_rug.jpeg"
                  alt="item on the way"
                  className="productImage"
                />
                <button>View More</button>
              </div>
            </div>
            <button type="button" className="primaryBtn">
              Schedule An Order
            </button>
            <h2>Past Deliveries</h2>
            {/* Add a ternary for if they have no past deliveries - 'You don't have any past deliveries or just don't show the past deliveries div at all. */}
            <div className="shipmentContainer">
              <div className="productContainer">
                <img
                  src="https://api.interiorize.design/images/farmhouse_wall-mounted_chalkboard.jpeg"
                  alt="item on the way"
                  className="productImage"
                />
                <button>Leave a Review</button>
              </div>
              <div className="productContainer">
                <img
                  src="https://api.interiorize.design/images/coronita_southwestern_area_rug.jpeg"
                  alt="item on the way"
                  className="productImage"
                />
                <button>Leave a Review</button>
              </div>
              <div className="productContainer">
                <img
                  src="https://api.interiorize.design/images/cowie_18_table_lamp.jpeg"
                  alt="item on the way"
                  className="productImage"
                />
                <button>Leave a Review</button>
              </div>
              <div className="productContainer">
                <img
                  src="https://api.interiorize.design/images/2_piece_cement_metal_table_vase_set.jpg"
                  alt="item on the way"
                  className="productImage"
                />
                <button>Leave a Review</button>
              </div>
            </div>
          </div>
          <div className="userPreferencesCol">
            <h2>Your Style Preferences</h2>
            <div className="preferencesRow">
              <div>
                <h3>Budget</h3>
                <p>Average - $80</p>
                <h3>Color Palette</h3>
                <p>White, blue, red</p>
                <h3>Style</h3>
                <p>Bohemian</p>
              </div>
              <div className="stylesCol">
                <h3>Room</h3>
                <p>Living Room</p>
                <h3>Avoid</h3>
                <p>Animal print, paisley</p>
              </div>
            </div>
            <Modal/>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
