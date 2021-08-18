import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Modal = () => {
  const [isVisible, setIsVisible] = useState(false);



//   useEffect (() => {
          
//     };


  const handleClick = (event) => {
    event.preventDefault();
    setIsVisible(!isVisible);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

//   const handleChange = (event) => {
//     const value = event.target.value;
//     setState({
//       ...state,
//       [event.target.name]: value,
//     });
//   };

  const count = 20; 
  const redirect = "/"; 

  const countDown = () => {
    const timer = document.getElementById("timer");
    if (count > 0) {
      count--;
      timer.innerHTML = "This page will redirect in " + count + " seconds.";
      setTimeout("countDown()", 1000);
    } else {
      window.location.href = redirect;
    }
  }



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
                    <div class="animated fast fadeInUp">
                        <div class="icon">
                            <h1>Thank you</h1>
                        </div>

                        <div class="notice animated fadeInUp">
                            <p class="lead">Your message has been successfully sent. We will contact you very soon!</p>
                            <Link class="btn animation" href="javascript:history.back()">&larr; Back</Link>
                        </div>

                        <div class="footer animated slow fadeInUp">
                            <p id="timer">{countDown()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>




  );
};

export default Modal;
