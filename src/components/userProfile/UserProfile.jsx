import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import PreviousOrderCard from "./PreviousOrderCard";
import Modal from "./Modal";
import NewOrderModal from "./NewOrderModal";
import "./userprofile.css";

//get rid of recent order and previousOrder fetches. New API route gets all that info in one request now.

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [avoidArray, setAvoidArray] = useState([]);
  const [recentOrder, setRecentOrder] = useState([]);
  const [previousOrder1, setPreviousOrder1] = useState([]);
  const [previousOrder2, setPreviousOrder2] = useState([]);
  const [isFormSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    console.log("An effect has occured");
    const fetchUserData = async () => {
      const user_id = localStorage.getItem("user_id");
      const localUrl = `https://api.interiorize.design/quizzes/${user_id}`;
      const response = await fetch(localUrl).then((response) =>
        response.json()
      );
      console.log("User Response is: ", response);
      setUserData(response);
    };
    const fetchAvoidArray = async () => {
      const user_id = localStorage.getItem("user_id");
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
      const user_id = localStorage.getItem("user_id");
      const localUrl = `https://api.interiorize.design/orders/${user_id}`;
      const response = await fetch(localUrl).then((response) =>
        response.json()
      );

      let sortedOrderHistory = response.orderHistory.sort((a, b) => b-a);
      console.log(sortedOrderHistory);
      let newestOrderId = sortedOrderHistory[0].id;
      console.log(newestOrderId);

      let newestOrder2 = response.orderedItems.filter(order => order.order_id === newestOrderId);




      console.log('newestORder2',newestOrder2);

      let sortedOrderedItems = response.orderedItems.sort();

      let newestOrder = sortedOrderedItems[0];
      setRecentOrder(newestOrder);
      console.log('newest order', newestOrder);

      let previous2 = sortedOrderedItems.slice(1);
      console.log("previous2:", previous2);

      setPreviousOrder1(previous2[0]);
      console.log(previousOrder1);
      setPreviousOrder2(previous2[1]);
      console.log(previousOrder2);
    };

    fetchUserData();
    fetchAvoidArray();
    fetchOrders();
  }, [isFormSubmitted]);

  const generateOrder = async () => {
    // const localUrl = 'http://localhost:3333/items/generate-order';
    const url = `https://api.interiorize.design/items/generate-order`;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: localStorage.getItem("user_id"),
      }),
    };
    const response = await fetch(url, requestOptions).then((response) =>
      console.log(response)
    );
  };

  const handleFormSubmit = () => {
    console.log("Parent", isFormSubmitted);
    setIsSubmitted(!isFormSubmitted);
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="shipmentCol">
            <h1>Your Account</h1>
            <h2>Recent Shipment</h2>
            {recentOrder.length > 0 ? (
              <p>You've got items on the way!</p>
            ) : null}
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
            <NewOrderModal />
            <button
              type="button"
              className="primaryBtn"
              onClick={generateOrder}
            >
              Schedule An Order
            </button>
            <h2>Past Deliveries</h2>

            {previousOrder1.length > 1 ? (
              <>
                <div className="shipmentContainer">
                  {previousOrder1.map((item, index) => (
                    <PreviousOrderCard 
                    index={index}
                    image={item.img_src}
                    name={item.item_name}
                    description={item.description}
                    />
                  ))}
                </div>
              
                <div className="shipmentContainer">
                {previousOrder2.map((item, index) => (
                    <PreviousOrderCard 
                    index={index}
                    image={item.img_src}
                    name={item.item_name}
                    description={item.description}
                    />
                  ))}
                </div>
              </>
            ) : (
              <p>You don't have any previous shipments.</p>
            )}
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
                  {avoidArray.length > 0 ? (
                    <p>{avoidArray}</p>
                  ) : (
                    <p>No avoid preferences</p>
                  )}
                </div>
              </div>
            ) : (
              <p>Loading your style preferences...</p>
            )}

            <Modal handleFormSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
