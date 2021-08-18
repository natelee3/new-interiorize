import  React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import StateContext from '../../context';
import "./shoppingCart.css";
import CartModal from './CartModal';

const ShoppingCart = () => {
    const [value, dispatch] = useContext(StateContext);
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = (event) => {
        setIsVisible(!isVisible);
        scrollToTop();
      };
    
      const scrollToTop = () => {
        countDown();
        window.scrollTo(0, 0);
      };

      const redirect = "/"; 
    
      const countDown = () => {
          setTimeout("countDown()", 1000);
          window.location.href = redirect;
        }
      

    

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
        const response = await fetch(localUrl, requestOptions).then((response) =>
          console.log(response)
        );
      };

      const _removeClick = () => {
        console.log("Remove clicked: ", value);
        dispatch({
          type: "ACTION_REMOVE",
          payload: value,
        });
        // setIsVisible(!isVisible);
      };

    // const [value] = useContext(StateContext);
    // console.log("Value: ", value)

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
                        <Link to='/'>
                            <button className="checkoutBtn" type="button" onClick={() => _createOrder()}>Submit Order</button>
                        </Link>
                    </div>
                    <div className="buttonBox2">
                        <Link to='/shop-intro/shop'>
                            <button className="checkoutBtn" type="button">&larr; Shop</button>
                        </Link>
                    </div>
                    

                    
                    <div className={!!isVisible ? "modal__overlay visible" : "hidden"}>
                        <div className="modal__content">
                            <div className="master-wrap">
                                <div className="logo-box">
                                    <div className="animated fast fadeInUp">
                                        <div className="icon">
                                            <h1>Thank you</h1>
                                        </div>

                                        <div className="notice animated fadeInUp">
                                            <p className="lead">Your message has been successfully sent. We will contact you very soon!</p>
                                            {/* <Link class="btn animation" href="javascript:history.back()">&larr; Back</Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </>
    )
}

export default ShoppingCart;