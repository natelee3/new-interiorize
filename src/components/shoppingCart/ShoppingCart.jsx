import  React, { useContext } from 'react';
import StateContext from '../../context';
import "./shoppingCart.css";

const ShoppingCart = () => {

    const [value] = useContext(StateContext);
    console.log("Value: ", value)

    return (
        <>

            <div className="cartContainer">
                <div className="itemsInCart">
                    <h1 className="cartTitle">Cart</h1>
                    <hr />
                    {value.cart.length > 0 ?(
                        value.cart.map((item, props, id) => (
                            <>
                                <ul>
                                    <li className="cartCard" key={id}>
                                            <div className="cartItemImg">
                                                <img className="itemImg" src={`https://api.interiorize.design/images/${item.img_src}`} alt="Img of Item" />
                                            </div>
                                            <div className="itemDetails">
                                                <p className="itemName">{item.item_name}</p>
                                                <p className="itemPrice">${item.price}</p>
                                                <button type="button">Remove</button>
                                            </div>
                                    </li>
                                </ul>
                            </>
                        ))
                    ): <></>}
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
                <button className="checkoutBtn" type="button">Submit Order</button>
                {/* <button type="button" onClick={() => createOrder()}>Create Order</button> */}
            </div>
        </>
    )
}

export default ShoppingCart;