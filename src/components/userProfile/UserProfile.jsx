import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import PreviousOrderCard from "./PreviousOrderCard";
import Modal from "./Modal";
import "./userprofile.css";

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [avoidArray, setAvoidArray] = useState([]);
  const [recentOrder, setRecentOrder] = useState([]);
  const [previousOrders, setPreviousOrders] = useState({});

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
    const fetchAvoidArray = async () => {
      const localUrl = "http://localhost:3333/users/avoid/string/2";
      const response = await fetch(localUrl).then((response) =>
        response.json()
      );
      let commaSeparated = response.join(", ");
      setAvoidArray(commaSeparated);
    };

    const fetchOrders = async () => {
      const localUrl = "http://localhost:3333/orders/2";
      const response = await fetch(localUrl).then((response) =>
        response.json()
      );

      console.log("FETCH ORDERS RESPONSE", response);
      const allOrders = response;
      const newestOrder = response.shift();
      const recentOrderId = newestOrder.id;
      fetchRecentOrder(recentOrderId);
      fetchPreviousOrders(allOrders);
    };

    fetchUserData();
    fetchAvoidArray();
    fetchOrders();
  }, []);

  const fetchRecentOrder = async (recentOrderId) => {
    const localUrl = `http://localhost:3333/items/byid/${recentOrderId}`;
    const response = await fetch(localUrl).then((response) => response.json());
    console.log("SINGLE ORDER: ", response);
    setRecentOrder(response);
  };

  const fetchPreviousOrders = async (allOrders) => {
    console.log("ALL ORDERS: ", allOrders);
    let pastOrders;
    if (allOrders.length > 3) {
      pastOrders = allOrders.slice(1, 4);
    } else {
      pastOrders = allOrders;
    }
    //need to somehow push each array into an object to map through?
    for (const order of pastOrders) {
      let orderId = order.id;
      const localUrl = `http://localhost:3333/items/byid/${orderId}`;
      const response = await fetch(localUrl).then((response) =>
        response.json()
      );
      console.log("fetch response is:", response);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="shipmentCol">
            <h1>Your Account</h1>
            <h2>Recent Shipment</h2>
            <p>You've got items on the way! </p>
            <div className="shipmentContainer">
              {recentOrder.length > 0 ? (
                recentOrder.map((order, index) => (
                  <ProductCard
                    index={index}
                    description={order.description}
                    img={order.img_src}
                    name={order.item_name}
                  />
                ))
              ) : (
                <p>
                  You don't have any recent shipments, place your first order
                  today!
                </p>
              )}
            </div>
            <button type="button" className="primaryBtn">
              Schedule An Order
            </button>
            <h2>Past Deliveries</h2>
            <div className="shipmentContainer">
              {previousOrders.length > 0 ? (
                previousOrders.map((order, index) => (
                  <PreviousOrderCard index={index} img={order.img_src} />
                ))
              ) : (
                <p>You don't have any previous shipments.</p>
              )}
            </div>
          </div>
          <div className="userPreferencesCol">
            <h2>Your Style Preferences</h2>
            {userData !== null ? (
              <div className="preferencesRow">
                <div className="stylesCol">
                  <h3>Budget</h3>
                  <p>${userData.budget}</p>
                  <h3>Color Palette</h3>
                  <p>
                    {userData.color1}, {userData.color2}, {userData.color3}
                  </p>
                  <h3>Style</h3>
                  <p>{userData.style_name}</p>
                </div>
                <div>
                  <h3>Room</h3>
                  <p>{userData.category_name}</p>
                  <h3>Avoid</h3>
                  <p>{avoidArray}</p>
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
