// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import './cartModal.css';
import { Link } from 'react-router-dom';

const CartModal = ({isVisible, closeModal}) => {

  return (
    <>
      <div className={!!isVisible ? "modal__overlay visible" : "hidden"}>
        <div className="modal__content1">
          <div id="master-wrap">
            <div id="logo-box">
              <div className="animated fast fadeInUp">
                <div className="iconModal">
                  <h1>Thank you</h1>
                </div>

                <div className="notice animated fadeInUp">
                  <p className="lead">
                    This item has been added to the cart!
                  </p>

                  <Link to='/shop-intro/shop'>
                    <button className="btn animation" type="button">
                      &larr; Back To Shop
                    </button>
                  </Link>

                  <Link to='/shopping-cart'>
                    <button className="btn animation" type="button">
                      &larr; Go To Cart
                    </button>
                  </Link>
                </div>

                <div class="footer animated slow fadeInUp">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
