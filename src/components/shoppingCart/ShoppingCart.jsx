import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StateContext from "../../context";
import "./shoppingCart.css";
import truck from "./imgs/truck.gif";

const ShoppingCart = () => {
  const [value, dispatch] = useContext(StateContext);
  const [isVisible, setIsVisible] = useState(false);
  const [itemTotal, setItemTotal] = useState(0);
  const [shippingTotal, setShippingTotal] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const token = localStorage.getItem('token');


  useEffect(() => {
    const calculateItemTotal = () => {
      let total = 0;
      if (value.cart.length > 0) {
        value.cart.forEach((item) => (total += item.price));
      }
      console.log(total);
      setItemTotal(total);
      calculateShipping(total);
    };

    const calculateShipping = (total) => {
      console.log("Checking that this function gets itemTotal", total);
      let shippingCost = 0;
      if (value.cart.length === 0) {
        setShippingTotal(0);
      } else {
        if (total > 25) {
          shippingCost = Math.round(total * 0.1);
          setShippingTotal(shippingCost);
          console.log("The shipping Total is " + shippingCost);
        } else {
          setShippingTotal(3);
          shippingCost = 3;
        }
      }

      calculateTotalCost(shippingCost, total);
    };

    const calculateTotalCost = (shippingCost, total) => {
      console.log(
        "Check that his function gets everything",
        total,
        shippingCost
      );
      let totalValue = total + shippingCost;
      setTotalCost(totalValue);
      console.log("The total cost is: ", totalCost);
    };

    calculateItemTotal();
  }, [value.cart.length]);
  
     const _createOrder = async () => {
        const localUrl = "http://localhost:3333/orders/add";
        const url = `https://api.interiorize.design/orders/add`;
        const requestOptions = {
          method: "POST",
          headers: { 
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
             },
          body: JSON.stringify({
            user_id: localStorage.getItem('user_id'),
            items: "1, 4, 16",
          }),
        };
        const response = await fetch(url, requestOptions).then((response) =>
          console.log(response)
        );
        dispatch({
          type: "ACTION_EMPTY_CART"
      })
        setIsVisible(true);
      };

  const removeItem = (itemId) => {
    dispatch({
      type: "ACTION_REMOVE",
      payload: itemId,
    });
  };

  return (
    <>
      <div className="cartContainer">
        <div className="itemsInCart">
          <h1 className="cartTitle">Cart</h1>
          {value.cart.length > 0 ? (
            value.cart.map((item, id) => (
              <>
                <ul className="cartList">
                  <li className="cartCard" key={id}>
                    <div className="cartItemImg">
                      <img
                        className="itemImg1" 
                        src={`https://api.interiorize.design/images/${item.img_src}`}
                        alt="Img of Item"
                      />
                    </div>
                    <div className="itemDetails">
                      <p className="itemName">{item.item_name}</p>
                      <hr className="cartHr" />
                      <p className="itemPrice">Qty: 1</p>
                      <p className="itemPrice">${item.price}</p>
                      <div className="buttonBox">
                        <button
                          className="removeBtn"
                          type="button"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </>
            ))
          ) : (
            <div className="emptyCartContainer">
              <p>Your cart is empty.</p>
              <Link to="/shop-intro/shop">
                <button className="checkoutBtn" type="button">
                  Start Shopping
                </button>
              </Link>
            </div>
          )}
        </div>

        <hr />

        <div className="costBox">
          <div className="cartLine">
            <p className="subTitle">Subtotal</p>
            <p className="subPrice">${itemTotal}</p>
          </div>
          <hr />
          <div className="cartLine">
            <p className="shippingTitle">Shipping Cost</p>

            <p className="shippingPrice">${shippingTotal}</p>
          </div>
          <hr />
          <div className="cartLine">
            <p className="totalTitle">Total</p>
            <p className="totalCost">${totalCost}</p>
          </div>
          <div className="bigBox">
            {value.cart.length > 0 ? (
              <div className="buttonBox2">
                <button
                  className="checkoutBtn"
                  type="button"
                  onClick={() => _createOrder()}
                >
                  Submit Order
                </button>
              </div>
            ) : null}

            <div className="buttonBox2">
              <Link to="/shop-intro/shop">
                <button className="checkoutBtn" type="button">
                  &larr; Shop
                </button>
              </Link>
            </div>
          </div>
          <div className={!!isVisible ? "modal__overlay visible" : "hidden"}>
            <div className="modal__content1">
              <div id="master-wrap">
                <div id="logo-box">
                  <div className="animated fast fadeInUp">
                    <div className="iconModal">
                      <h1>Thank you</h1>
                    </div>

                    <div className="notice animated fadeInUp">
                      <img className="truckIcon" src={truck} alt="Truck Icon" />
                      <p className="lead">Your order has been submitted.</p>
                      <p>We will contact you soon with shipping details!</p>
                      <Link to="/shop-intro/shop">
                        <button className="btn animation" type="button">
                          &larr; Back To Shop
                        </button>
                      </Link>

                      <Link to="/">
                        <button className="btn animation" type="button">
                          &larr; Home
                        </button>
                      </Link>
                    </div>

                    <div class="footer animated slow fadeInUp"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="modal__content">
                            <div className="master-wrap">
                                <div className="logo-box">
                                    <div className="animated fast fadeInUp">
                                        <div className="icon">
                                            <h1>Thank you</h1>
                                        </div>
                                        <div className="notice animated fadeInUp">
                                            <p className="lead">Your order has been submitted. We will contact you very soon with shipping details!</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
