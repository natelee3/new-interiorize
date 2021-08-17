import { useState } from "react";
//To do:
//Connect to db, submit new values to the user's table
//Need to store all values in state. Add an onChange and onSubmit.

const Modal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [state, setState] = useState({
    budget: "",
    color1: "",
    color2: "",
    color3: "",
    style: "",
    room: "",
  });
  const [avoidArray, setAvoidArray] = useState([]);

  const handleClick = (event) => {
    event.preventDefault();
    setIsVisible(!isVisible);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const handleAvoidChange = (event) => {
    if (event.target.checked) {
      setAvoidArray([...avoidArray, event.target.value]);
    } else {
      let filteredAry = avoidArray.filter((e) => e !== event.target.value);
      setAvoidArray(filteredAry);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //post info to the api
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
          <form onSubmit={(event) => handleSubmit(event)}>
            <label>
              Budget
              <br />
              <select name="budget" onChange={(event) => handleChange(event)}>
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
                <select name="color1" onChange={(event) => handleChange(event)}>
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
                <select name="color2" onChange={(event) => handleChange(event)}>
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
                <select name="color3" onChange={(event) => handleChange(event)}>
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
              <select name="style" onChange={(event) => handleChange(event)}>
                <option value="18">Bohemian</option>
                <option value="15">Modern</option>
                <option value="16">Farmhouse</option>
                <option value="17">Contemporary</option>
              </select>
            </label>
            <label>
              Choose Your Primary Room to Style
              <br />
              <select name="room" onChange={(event) => handleChange(event)}>
                <option value="1">Living Room</option>
                <option value="2">Bedroom</option>
                <option value="3">Bathroom</option>
                <option value="4">Kitchen</option>
                <option value="5">Patio</option>
              </select>
            </label>
            <div className="avoidRow2">
              <p className="avoidLabel"> What Should We NOT Send You?</p>

              <input
                type="checkbox"
                name="pillows"
                value="7"
                onChange={(event) => handleAvoidChange(event)}
              />
              <label for="pillows">Pillows</label>
              <input
                type="checkbox"
                name="rug"
                value="2"
                onChange={(event) => handleAvoidChange(event)}
              />
              <label for="rug">Rugs</label>
              <input
                type="checkbox"
                name="lamp"
                value="3"
                onChange={(event) => handleAvoidChange(event)}
              />
              <label for="lamp">Lamps</label>
              <input
                type="checkbox"
                name="art"
                value="4"
                onChange={(event) => handleAvoidChange(event)}
              />
              <label for="art">Art</label>
              <input
                type="checkbox"
                name="decor"
                value="5"
                onChange={(event) => handleAvoidChange(event)}
              />
              <label for="decor">Decor</label>
              <input
                type="checkbox"
                name="kitchenLinens"
                value="9"
                onChange={(event) => handleAvoidChange(event)}
              />
              <label for="kitchenLinens">Kitchen Linens</label>
              <input
                type="checkbox"
                name="mirror"
                value="19"
                onChange={(event) => handleAvoidChange(event)}
              />
              <label for="mirror">Mirrors</label>
              <input
                type="checkbox"
                name="towel"
                value="20"
                onChange={(event) => handleAvoidChange(event)}
              />
              <label for="towel">Towels</label>
              <input
                type="checkbox"
                name="storage"
                value="11"
                onChange={(event) => handleAvoidChange(event)}
              />
              <label for="storage">Storage</label>
              <input
                type="checkbox"
                name="serverware"
                value="13"
                onChange={(event) => handleAvoidChange(event)}
              />
              <label for="serverware">Serverware</label>
              <input
                type="checkbox"
                name="utensils"
                value="14"
                onChange={(event) => handleAvoidChange(event)}
              />
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
