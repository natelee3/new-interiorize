import './cartModal.css';
import { Link } from 'react-router-dom';
import shoppingCart from './imgs/shoppingCart.png';

const CartModal = ({isVisible, closeModal}) => {

  return (
    <>
      <div className={!!isVisible ? "modal__overlay visible" : "hidden"}>
        <div className="modal__content1">
          <div className="master-wrap">
            <div id="logo-box">
              <div className="animated fast fadeInUp">
                <div className="iconModal">
                  <h1>Thank you</h1>
                </div>

                <div className="notice animated fadeInUp">
                  <img className="cartIcon1" src={shoppingCart} alt="Shopping Cart" />
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
                       Go To Cart &rarr;
                    </button>
                  </Link>
                </div>

                <div className="footer animated slow fadeInUp">
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
