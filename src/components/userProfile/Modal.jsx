import { useState } from "react";

// To do: add values once exact db values received
// Make margins and padding perfect. 
// Make mobile responsive
const Modal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsVisible(!isVisible);
  };

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
                <option>$40</option>
                <option>$80</option>
                <option>$120</option>
              </select>
            </label>
            <p className="colorLabel">Edit Your Color Preferences:</p>
            <div className="colorSelectRow">
              <label>
                Color 1
                <br />
                <select>
                  <option value="">Select a Color</option>
                  <option>Red</option>
                  <option>Blue</option>
                  <option>Black</option>
                  <option>White</option>
                  <option>Yellow</option>
                  <option>Green</option>
                  <option>Purple</option>
                  <option>Orange</option>
                </select>
              </label>
              <label>
                Color 2
                <br />
                <select>
                  <option value="">Select a Color</option>
                  <option>Red</option>
                  <option>Blue</option>
                  <option>Black</option>
                  <option>White</option>
                  <option>Yellow</option>
                  <option>Green</option>
                  <option>Purple</option>
                  <option>Orange</option>
                </select>
              </label>
              <label>
                Color 3
                <br />
                <select>
                  <option value="">Select a Color</option>
                  <option>Red</option>
                  <option>Blue</option>
                  <option>Black</option>
                  <option>White</option>
                  <option>Yellow</option>
                  <option>Green</option>
                  <option>Purple</option>
                  <option>Orange</option>
                </select>
              </label>
            </div>
            <label>
              Style
              <br />
              <select>
                <option value="bohemian">Bohemian</option>
                <option value="modern">Modern</option>
                <option value="farmhouse">Farmhouse</option>
                <option value="contemporary">Contemporary</option>
              </select>
            </label>
            <label>
              Choose Your Primary Room to Style
              <br />
              <select>
                <option>Living Room</option>
                <option>Bedroom</option>
                <option>Bathroom</option>
                <option>Kitchen</option>
                <option>Patio</option>
              </select>
            </label>
            <div className="avoidRow">
                <p className="avoidLabel"> What Should We NOT Send You?</p>
    
                <input type="checkbox" name="throwPillow"/>
                <label for="throwPillow">Throw Pillows</label>
                <input type="checkbox" name="rug" />
                <label for="rug">Rugs</label>
                <input type="checkbox" name="lamp" />
                <label for="lamp">Lamps</label>
                <input type="checkbox" name="art" />
                <label for="art">Art</label>
                <input type="checkbox" name="decor" />
                <label for="decor">Decor</label>
                <input type="checkbox" name="pillow" />
                <label for="pillow">Pillows</label>
                <input type="checkbox" name="kitchenLinens"  />
                <label for="kitchenLinens">Kitchen Linens</label>
                <input type="checkbox" name="storage"  />
                <label for="storage">Storage</label>
                <input type="checkbox" name="utensils"  />
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
