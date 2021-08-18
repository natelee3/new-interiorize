import  React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import StateContext from '../../context';
import "./shoppingCart.css";
import truck from './imgs/truck.gif';
import CartModal from './CartModal';

const ShoppingCart = () => {

    const [value, dispatch] = useContext(StateContext);
    const [isVisible, setIsVisible] = useState(false);

    const _createOrder = async () => {
        const localUrl = "http://localhost:3333/orders/add";
        const url = `https://api.interiorize.design/orders/add`;
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: 2,
            items: "1, 4, 16",
          }),
        };
        const response = await fetch(url, requestOptions).then((response) =>
          console.log(response)
        );
        setIsVisible(true);
      };

    const removeItem = (itemId) => {
        dispatch({
            type: "ACTION_REMOVE",
            payload: itemId,
          });
    }

    return (
        <>
            <div className="cartContainer">
                <div className="itemsInCart">
                    <h1 className="cartTitle">Cart</h1> 
                    {value.cart.length > 0 ?(
                        value.cart.map((item, props, id) => (
                            <>
                                <ul className="cartList">
                                    <li className="cartCard" key={id}>
                                        <div className="cartItemImg">
                                            <img className="itemImg" src={`https://api.interiorize.design/images/${item.img_src}`} alt="Img of Item" />
                                        </div>
                                        <div className="itemDetails">
                                            <p className="itemName">{item.item_name}</p>
                                            <hr className="cartHr" />
                                            <p className="itemPrice">Qty: 1</p>
                                            <p className="itemPrice">${item.price}</p>
                                            <div className="buttonBox">
                                                <button className="removeBtn" type="button" onClick={() => removeItem(item.id)}>Remove</button> 
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </>
                        ))
                    ): <></>}
                </div>
            
                <hr />

                <div className="costBox">
                    <div className="cartLine">
                        <p className="subTitle">Subtotal</p>
                        <p className="subPrice">$220.00</p>
                    </div>
                    <hr />
                    <div className="cartLine">
                        <p className="shippingTitle">Shipping Cost</p>
                        
                        <p className="shippingPrice">$8.95</p>
                    </div>
                    <hr />
                    <div className="cartLine">
                        <p className="totalTitle">Total</p>
                        <p className="totalCost">$220.95</p>
                    </div>
                    <div className="buttonBox2">
                        {/* Change this button to open Modal and then give one option to go back to main page */}
                    
                            <button className="checkoutBtn" type="button" onClick={() => _createOrder()}>Submit Order</button>
        
                        {/* should we have the cart be cleared after this button is pressed? */}
                    </div>
                    <div className="buttonBox2">
                        <Link to='/shop-intro/shop'>
                            <button className="checkoutBtn" type="button">&larr; Shop</button>
                        </Link>
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

                                    <Link to='/shop-intro/shop'>
                                        <button className="btn animation" type="button">
                                        &larr; Back To Shop
                                        </button>
                                    </Link>

                                    <Link to='/'>
                                        <button className="btn animation" type="button">
                                        &larr; Home
                                        </button>
                                    </Link>
                                    </div>

                                    <div class="footer animated slow fadeInUp">
                                    </div>
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
    )
}

export default ShoppingCart;