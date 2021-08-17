import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Modal from "./Modal";
import "./userprofile.css";

//To do:
//1. grab the order data based on user
//2. Get the most recent order id
//3. Use that id to get the most recent order details
//4. map that data to the productCards
//5. Map the data for the other orders for the previous orders


const UserProfile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      //url to be swapped later
      const localUrl = "http://localhost:3333/quizzes/2";
      const response = await fetch(localUrl).then((response) =>
        response.json()
      );
      console.log("User Response is: ", response);
      setUserData(response);
    };

    fetchUserData();
  }, []);

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
              {/* Fake data rn later on we will do a map and send the right information to each productCard */}
              <ProductCard />
              <ProductCard />
              <ProductCard />
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
            {userData !== null ? (
              <div className="preferencesRow">
                <div>
                  <h3>Budget</h3>
                  <p>${userData.budget}</p>
                  <h3>Color Palette</h3>
                  <p>{userData.color1}, {userData.color2}, {userData.color3}</p>
                  <h3>Style</h3>
                  <p>{userData.style_name}</p>
                </div>
                <div className="stylesCol">
                  <h3>Room</h3>
                  <p>{userData.category_name}</p>
                  <h3>Avoid</h3>
                  <p>Animal print, paisley</p>
                </div>
              </div>
            ) : (
              <p>Loading your style preferences...</p>
            )}

            <Modal />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
