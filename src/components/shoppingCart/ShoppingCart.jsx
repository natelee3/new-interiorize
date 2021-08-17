import React from 'react';
import "./shoppingCart.css";
import bohKitchen from "./imgs/bohKitchen.jpg";

const ShoppingCart = () => {

    return (
        <div className="cartContainer">
            
            <div className="itemsInCart">
                <h1 className="cartTitle">Cart</h1>
                <hr />


                <div className="cartCard">
                    <div className="cartItemImg">
                        <img className="photo" src={bohKitchen} alt="photo"></img>
                    </div>
                    <div className="itemDetails">
                        <p className="itemTitle">Something something artwork</p> 
                        <p className="qty">Qty: 1</p>
                        <p className="price">$80.00</p>
                        <button type="button">Remove</button>
                    </div>
                    
                </div>
            </div>
            <hr />



            <div className="costBox">
                <div className="cartLine">
                    <p className="subTitle">Subtotal</p>
                    <p className="subPrice">$80.00</p>
                </div>
                <hr />
                <div className="cartLine">
                    <p className="shippingTitle">Shipping Cost</p>
                    
                    <p className="shippingPrice">$8.95</p>
                </div>
                <hr />
                <div className="cartLine">
                    <p className="totalTitle">Total</p>
                    <p className="totalCost">$88.95</p>
                </div>
                <button className="checkoutBtn" type="button">Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default ShoppingCart;