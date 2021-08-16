import { useState } from "react";
//To do:
//Connect to db, submit new values to the user's table

const Modal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsVisible(!isVisible);
    scrollToTop();
  };

  //Useful for mobile devices. User doesn't have to scroll all the way to the top to see the form.
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // Still need to add an onSubmit function

  return (
    <>
      <button
        type="button"
        className="primaryBtn"
        onClick={(event) => handleClick(event)}
      >
        Edit Preferences
      </button>
      <div className={!!isVisible ? "modal__overlay visible" : "hidden"}>
        <div className="modal__content">
          <button
            type="button"
            className="modal__close"
            onClick={(event) => handleClick(event)}
          >
            x
          </button>

          <h1>Edit Your Preferences</h1>
          <form>
            <label>
              Budget
              <br />
              <select>
                <option value="40">$40</option>
                <option value="80">$80</option>
                <option value="120">$120</option>
              </select>
            </label>
            <p className="colorLabel">Edit Your Color Preferences:</p>
            <div className="colorSelectRow">
              <label>
                Color 1
                <br />
                <select>
                  <option value="">Select a Color</option>
                  <option value="1">Red</option>
                  <option value="2">Blue</option>
                  <option value="3">Black</option>
                  <option value="4">White</option>
                  <option value="5">Yellow</option>
                  <option value="6">Green</option>
                  <option value="7">Purple</option>
                  <option value="8">Orange</option>
                  <option value="10">Gray</option>
                  <option value="11">Brown</option>
                </select>
              </label>
              <label>
                Color 2
                <br />
                <select>
                  <option value="">Select a Color</option>
                  <option value="1">Red</option>
                  <option value="2">Blue</option>
                  <option value="3">Black</option>
                  <option value="4">White</option>
                  <option value="5">Yellow</option>
                  <option value="6">Green</option>
                  <option value="7">Purple</option>
                  <option value="8">Orange</option>
                  <option value="10">Gray</option>
                  <option value="11">Brown</option>
                </select>
              </label>
              <label>
                Color 3
                <br />
                <select>
                  <option value="">Select a Color</option>
                  <option value="1">Red</option>
                  <option value="2">Blue</option>
                  <option value="3">Black</option>
                  <option value="4">White</option>
                  <option value="5">Yellow</option>
                  <option value="6">Green</option>
                  <option value="7">Purple</option>
                  <option value="8">Orange</option>
                  <option value="10">Gray</option>
                  <option value="11">Brown</option>
                </select>
              </label>
            </div>
            <label>
              Style
              <br />
              <select>
                <option value="Bohemian">Bohemian</option>
                <option value="Modern">Modern</option>
                <option value="Farmhouse">Farmhouse</option>
                <option value="Contemporary">Contemporary</option>
              </select>
            </label>
            <label>
              Choose Your Primary Room to Style
              <br />
              <select>
                <option value="Living Room">Living Room</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Bathroom">Bathroom</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Patio">Patio</option>
              </select>
            </label>
            <div className="avoidRow">
              <p className="avoidLabel"> What Should We NOT Send You?</p>

              <input type="checkbox" name="throwPillow" value="Throw Pillows" />
              <label for="throwPillow">Throw Pillows</label>
              <input type="checkbox" name="rug" value="Rug" />
              <label for="rug">Rugs</label>
              <input type="checkbox" name="lamp" value="Lamp" />
              <label for="lamp">Lamps</label>
              <input type="checkbox" name="art" value="Art" />
              <label for="art">Art</label>
              <input type="checkbox" name="decor" value="Decor" />
              <label for="decor">Decor</label>
              <input type="checkbox" name="pillow" value="Pillow"/>
              <label for="pillow">Pillows</label>
              <input type="checkbox" name="kitchenLinens" value="Kitchen Linens" />
              <label for="kitchenLinens">Kitchen Linens</label>
              <input type="checkbox" name="storage" value="Storage"/>
              <label for="storage">Storage</label>
              <input type="checkbox" name="serverware" value="Serverware"/>
              <label for="serverware">Serverware</label>
              <input type="checkbox" name="utensils" />
              <label for="utensils">Utensils</label>
            </div>
            <button type="submit" className="primaryBtn">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
