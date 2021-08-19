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
  const [isFormSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    console.log("An effect has occured")
    const fetchUserData = async () => {
      const user_id = localStorage.getItem('user_id');
      const localUrl = `https://api.interiorize.design/quizzes/${user_id}`;
      const response = await fetch(localUrl).then((response) =>
        response.json()
      );
      console.log("User Response is: ", response);
      setUserData(response);
    
    };
    const fetchAvoidArray = async () => {
      const user_id = localStorage.getItem('user_id');
      const localUrl = `https://api.interiorize.design/users/avoid/string/${user_id}`;
      const response = await fetch(localUrl).then((response) =>
        response.json()
      );
      if (response !== null) {
        let commaSeparated = response.join(", ");
        setAvoidArray(commaSeparated);
      }
    };

    const fetchOrders = async () => {
      const user_id = localStorage.getItem('user_id');
      const localUrl = `https://api.interiorize.design/orders/${user_id}`;
      const response = await fetch(localUrl).then((response) =>
        response.json()
      );

      console.log("FETCH ORDERS RESPONSE", response);
      const allOrders = response;
      const newestOrder = response.orderHistory.shift();
      const recentOrderId = newestOrder.id;
      fetchRecentOrder(recentOrderId);
      fetchPreviousOrders(allOrders);
    };

    fetchUserData();
    fetchAvoidArray();
    fetchOrders();
  }, [isFormSubmitted]);

  const fetchRecentOrder = async (recentOrderId) => {
    const localUrl = `https://api.interiorize.design/items/byid/${recentOrderId}`;
    const response = await fetch(localUrl).then((response) => response.json());
    console.log("SINGLE ORDER: ", response);
    setRecentOrder(response);
  };

  const fetchPreviousOrders = async (allOrders) => {
    console.log("ALL ORDERS: ", allOrders);
    let pastOrders;
    if (allOrders.length > 3) {
      pastOrders = allOrders.orderHistory.slice(1, 4);
    } else {
      pastOrders = allOrders.orderHistory;
    }
    //need to somehow push each array into an object to map through?
    for (const order of pastOrders) {
      let orderId = order.id;
      const localUrl = `https://api.interiorize.design/items/byid/${orderId}`;
      const response = await fetch(localUrl).then((response) =>
        response.json()
      );
      console.log("fetch response is:", response);
    }
  };

  const handleFormSubmit = () => {
    console.log('Parent', isFormSubmitted)
    setIsSubmitted(!isFormSubmitted);
  }

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="shipmentCol">
            <h1>Your Account</h1>
            <h2>Recent Shipment</h2>
            {recentOrder.length > 0 ? (<p>You've got items on the way!</p>) : null}
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
                  {avoidArray.length > 0 ? (<p>{avoidArray}</p>) : (<p>No avoid preferences</p>)}
                </div>
              </div>
            ) : (
              <p>Loading your style preferences...</p>
            )}

            <Modal
            handleFormSubmit={handleFormSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
