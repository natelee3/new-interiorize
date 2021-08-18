import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CartModal = ({isVisible, closeModal}) => {

  //   const handleChange = (event) => {
  //     const value = event.target.value;
  //     setState({
  //       ...state,
  //       [event.target.name]: value,
  //     });
  //   };

  // const count = 20;
  // const redirect = "/";

  // const countDown = () => {
  //   const timer = document.getElementById("timer");
  //   if (count > 0) {
  //     count--;
  //     timer.innerHTML = "This page will redirect in " + count + " seconds.";
  //     setTimeout("countDown()", 1000);
  //   } else {
  //     window.location.href = redirect;
  //   }
  // };

  return (
    // <>
    //   <button
    //     type="button"
    //     className="primaryBtn"
    //     onClick={(event) => handleClick(event)}
    //   >
    //     Edit Preferences
    //   </button>
    //
    //       <button
    //         type="button"
    //         className="modal__close"
    //         onClick={(event) => handleClick(event)}
    //       >
    //         x
    //       </button>

    //         <button type="submit" className="primaryBtn">
    //           Save Changes
    //         </button>
    //     </div>
    //   </div>
    // </>


    <>
      <div className={!!isVisible ? "modal__overlay visible" : "hidden"}>
        <div className="modal__content">
          <div id="master-wrap">
            <div id="logo-box">
              <div className="animated fast fadeInUp">
                <div className="icon">
                  <h1>Thank you</h1>
                </div>

                <div className="notice animated fadeInUp">
                  <p className="lead">
                    This item has been added to the cart!
                  </p>
                  <button className="btn animation" type="button" onClick={(event) => closeModal(event)}>
                    &larr; Back
                  </button>
                </div>

                <div class="footer animated slow fadeInUp">
                  {/* <p id="timer">{countDown()}</p> */}
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
