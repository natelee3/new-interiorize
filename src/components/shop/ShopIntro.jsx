import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import StateContext from "../../context";
import QuizRedirectModal from "./QuizRedirectModal";
import "./shopIntro.css";

const ShopIntro = () => {
  const [value, dispatch] = useContext(StateContext);
  const [isRedirectModalVisible, setIsRedirectModalVisible] = useState(true);
  //if the isGenerated context is set to true display the modal will display

  const handleClick = () => {
    setIsRedirectModalVisible(!isRedirectModalVisible);
    dispatch({
      type: "ACTION_NO_ITEM_MATCHES",
    });
  };



  return (
    <>
      <div className="shopNav">
        <div className="shopList">
          {value.generatedItems === false ? (
            <QuizRedirectModal
              isVisible={isRedirectModalVisible}
              handleClick={handleClick}
            />
          ) : null}
          <div className="topRow">
            
            <Link 
              className="shopRoomLinks" 
              to="/shop-intro/shop"
              >
              <div className="roomCard">
                <div 
                  className="livingCard"
                  onMouseEnter={()=> localStorage.setItem('Room choice', 1)}
                >
                  <div className="nameBox">
                    <h2 className="roomName">Living Room</h2>
                  </div>
                </div>
              </div>
            </Link>

            <Link className="shopRoomLinks" to="/shop-intro/shop">
              <div className="roomCard">
                <div 
                  className="bedroomCard"
                  onMouseEnter={()=> localStorage.setItem('Room choice', 2)}
                >
                  <div className="nameBox">
                    <h2 className="roomName">Bedroom</h2>
                  </div>
                </div>
              </div>
            </Link>

            <Link className="shopRoomLinks" to="/shop-intro/shop">
              <div className="roomCard">
                <div 
                  className="bathCard"
                  onMouseEnter={()=> localStorage.setItem('Room choice', 3)}
                >
                  <div className="nameBox">
                    <h2 className="roomName">Bathroom</h2>
                  </div>
                </div>
              </div>
            </Link>

          </div>

          <div className="bottomRow">
            
            <Link className="shopRoomLinks" to="/shop-intro/shop">
              <div className="roomCard">
                <div 
                  className="kitchenCard"
                  onMouseEnter={()=> localStorage.setItem('Room choice', 4)}
                >
                  <div className="nameBox">
                    <h2 className="roomName">Kitchen</h2>
                  </div>
                </div>
              </div>
            </Link>

            <Link className="shopRoomLinks" to="/shop-intro/shop">
              <div className="roomCard">
                <div 
                  className="patioCard"
                  onMouseEnter={()=> localStorage.setItem('Room choice', 5)}
                >
                  <div className="nameBox">
                    <h2 className="roomName">Patio</h2>
                  </div>
                </div>
              </div>
            </Link>

            <Link className="shopRoomLinks" to="/shop-intro/shop">
              <div className="roomCard">
                <div 
                  className="allRoomCard"
                  onMouseEnter={()=> localStorage.setItem('Room choice', 6)}
                >
                  <div className="nameBox">
                    <h2 className="roomName">All Rooms</h2>
                  </div>
                </div>
              </div>
            </Link>

          </div>

        </div>
      </div>
    </>
  );
};

export default ShopIntro;
