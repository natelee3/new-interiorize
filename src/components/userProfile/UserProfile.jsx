import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import PreviousOrderCard from "./PreviousOrderCard";
import Modal from "./Modal";
import NewOrderModal from "./NewOrderModal";
import "./userprofile.css";

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [avoidArray, setAvoidArray] = useState([]);
  const [recentOrder, setRecentOrder] = useState([]);
  const [previousOrder1, setPreviousOrder1] = useState([]);
  const [previousOrder2, setPreviousOrder2] = useState([]);
  const [isFormSubmitted, setIsSubmitted] = useState(false);
  //state and function to change it gets passed down so that newOrderModal can open the stylesModal.
  const [isStylesVisible, setIsStylesVisible] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("An effect has occured");
    const fetchUserData = async () => {
      const user_id = localStorage.getItem("user_id");
      const localUrl = `https://api.interiorize.design/quizzes/${user_id}`;
      const response = await fetch(localUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => response.json());
      console.log("User Response is: ", response);
      setUserData(response);
    };
    const fetchAvoidArray = async () => {
      const user_id = localStorage.getItem("user_id");
      const localUrl = `https://api.interiorize.design/users/avoid/string/${user_id}`;
      const response = await fetch(localUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => response.json());
      if (response !== null) {
        let commaSeparated = response.join(", ");
        setAvoidArray(commaSeparated);
      }
    };

    const fetchOrders = async () => {
      const user_id = localStorage.getItem("user_id");
      const url = `https://api.interiorize.design/orders/${user_id}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => response.json());

      console.log("ORDER RESPONSE:", response);
      setRecentOrder(response.orderedItems[0]);

      setPreviousOrder1(response.orderedItems[1]);
      setPreviousOrder2(response.orderedItems[2]);
    };

    fetchUserData();
    fetchAvoidArray();
    fetchOrders();
  }, [isFormSubmitted]);

  // Styles Modal Functions

  const handleFormSubmit = () => {
    setIsSubmitted(!isFormSubmitted);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleClickStylesModal = (event) => {
    setIsStylesVisible(!isStylesVisible);
    scrollToTop();
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
            <NewOrderModal handleClickStylesModal={handleClickStylesModal} />
            <h2>Previous Orders</h2>
            {!!previousOrder1 ? (
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
              </>
            ) : (
              <p>You don't have any previous shipments.</p>
            )}
            {!!previousOrder2 ? (
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
                ) : null}
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

            <Modal
              handleFormSubmit={handleFormSubmit}
              handleClickStylesModal={handleClickStylesModal}
              isStylesVisible={isStylesVisible}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
