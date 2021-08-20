import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import StateContext from "../../context";
import QuizRedirectModal from "./QuizRedirectModal";
import "./shopIntro.css";

const ShopIntro = () => {
  const [value, dispatch] = useContext(StateContext);
  const [isVisible, setIsVisible] = useState(true);
  //if the isGenerated context is set to true display the modal will display

  const handleClick = () => {
    setIsVisible(!isVisible);
    dispatch({
      type: "ACTION_NO_ITEM_MATCHES",
    });
  };

  return (
    <>
      <div className="shopNav">
        <div className="shopList">
          {!value.generatedItems ? (
            <QuizRedirectModal
              isVisible={isVisible}
              handleClick={handleClick}
            />
          ) : null}
          <div className="topRow">
            
            <Link className="shopRoomLinks" to="/shop-intro/shop">
              <div className="roomCard">
                <div className="livingCard">
                  <div className="nameBox">
                    <h2 className="roomName">Living Room</h2>
                  </div>
                </div>
              </div>
            </Link>

            <Link className="shopRoomLinks" to="/shop-intro/shop">
              <div className="roomCard">
                <div className="bedroomCard">
                  <div className="nameBox">
                    <h2 className="roomName">Bedroom</h2>
                  </div>
                </div>
              </div>
            </Link>

            <Link className="shopRoomLinks" to="/shop-intro/shop">
              <div className="roomCard">
                <div className="bathCard">
                  <div className="nameBox">
                    <h2 className="roomName">Bathroom</h2>
                  </div>
                </div>
              </div>
            </Link>

          </div>

          <div className="bottomRow">
            
            <Link className="shopRoomLinks" to="/shop">
              <div className="roomCard">
                <div className="kitchenCard">
                  <div className="nameBox">
                    <h2 className="roomName">Kitchen</h2>
                  </div>
                </div>
              </div>
            </Link>

            <Link className="shopRoomLinks" to="/shop-intro/shop">
              <div className="roomCard">
                <div className="patioCard">
                  <div className="nameBox">
                    <h2 className="roomName">Patio</h2>
                  </div>
                </div>
              </div>
            </Link>

            <Link className="shopRoomLinks" to="/shop-intro/shop">
              <div className="roomCard">
                <div className="allRoomCard">
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
