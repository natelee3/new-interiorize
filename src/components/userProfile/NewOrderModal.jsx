import { useState } from "react";

const NewOrderModal = ({handleClickStylesModal}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const token = localStorage.getItem('token');

  const handleClick = () => {
      setIsVisible(!isVisible);
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const generateOrder = async () => {
    // const localUrl = 'http://localhost:3333/items/generate-order';
    const url = `https://api.interiorize.design/items/generate-order`;
    const requestOptions = {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` 
      },      
      body: JSON.stringify({
      user_id: localStorage.getItem('user_id')
      }),
    };
    const response = await fetch(url, requestOptions).then((response) => {
      console.log('generate order response:',response)
      if (response.status === 200) {
          setOrderSuccess(true);
          setIsVisible(!isVisible)
          //message will disappear after 3 seconds
          setTimeout(() => {setOrderSuccess(false);}, 3000)  
      }
    }
    
    );
    
  };

  const swapModals = () => {
      setIsVisible(!isVisible)
      handleClickStylesModal()
      scrollToTop()
  }


  return (
    <>
      <button type="button" className="primaryBtn" onClick={handleClick}>
        Schedule An Order
      </button>
      <p>{!!orderSuccess ? (<p>Your order was successfully placed!</p>) : null}</p>
      <div className={!!isVisible ? "modal__overlay visible" : "hidden"}>
        <div className="modal__content" id="orderModal">
          <button
            type="button"
            className="modal__close"
            onClick={(event) => handleClick(event)}
          >
            x
          </button>

          <h1>Do you want to place an order with your current preferences?</h1>
          <div className="btnContainer">
              <button type="button" className="primaryBtn" onClick={generateOrder}>Yes, Place an Order!</button>
              <button type="button" className="primaryBtn" onClick={swapModals}>No, Change My Preferences</button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default NewOrderModal;