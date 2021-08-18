import { useState, useEffect } from "react";

const Modal = ({isSubmitted, handleFormSubmit}) => {
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

  useEffect(() => {
    (async () => {
      const user_id = localStorage.getItem('user_id');
      const url = `https://api.interiorize.design/quizzes/${user_id}`;
      //const localurl = `http://localhost:3333/quizzes/${user_id}`;
      const storedQuizData = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setState({
            budget: data.budget,
            color1: data.colors[0][0],
            color2: data.colors[0][1],
            color3: data.colors[0][2],
            style: data.style_id,
            room: data.category_id,
          });
        });
      const storedAvoidData = await fetch(`https://api.interiorize.design/users/avoid/${user_id}`)
        .then((response) => response.json())
        .then((results) => {
          if(results !== null) {
            setAvoidArray([...results]);
          }
        });
    }) ();
  }, []);

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
    if (event.target.checked && !avoidArray.includes(event.target.value)) {
      setAvoidArray([...avoidArray, parseInt(event.target.value)]);
    } else {
      let filteredAry = avoidArray.filter(
        (e) => parseInt(e) !== parseInt(event.target.value)
      );
      setAvoidArray(filteredAry);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit();
    console.log(isSubmitted)
    updateQuizData();
    updateAvoidData();
  };

  const updateQuizData = async () => {
    const localurl = "http://localhost:3333/quizzes/update";
    const url = "https://api.interiorize.design/quizzes/update";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: 2,
        budget: state.budget,
        color_one_id: state.color1,
        color_two_id: state.color2,
        color_three_id: state.color3,
        category_id: state.room,
        style_id: state.style,
      }),
    };
    const response = await fetch(url, requestOptions).then((response) => {
      console.log(response);
    });
  };

  const updateAvoidData = async () => {
    const localurl = "http://localhost:3333/users/avoid/update";
    const url = "https://api.interiorize.design/users/avoid/update";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: 2,
        avoid_tags: avoidArray,
      }),
    };
    const response = await fetch(url, requestOptions).then((response) => {
      console.log(response);
    });
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
          {!!isSubmitted ? <p>Your preferences have been updated!</p> : null}
          <form onSubmit={(event) => handleSubmit(event)}>
            <label>
              Budget
              <br />
              <select
                name="budget"
                value={state.budget}
                onChange={(event) => handleChange(event)}
              >
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
                <select
                  name="color1"
                  value={state.color1}
                  onChange={(event) => handleChange(event)}
                >
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
                <select
                  name="color2"
                  value={state.color2}
                  onChange={(event) => handleChange(event)}
                >
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
                <select
                  name="color3"
                  value={state.color3}
                  onChange={(event) => handleChange(event)}
                >
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
              <select
                name="style"
                value={state.style}
                onChange={(event) => handleChange(event)}
              >
                <option value="18">Bohemian</option>
                <option value="15">Modern</option>
                <option value="16">Farmhouse</option>
                <option value="17">Contemporary</option>
              </select>
            </label>
            <label>
              Choose Your Primary Room to Style
              <br />
              <select
                name="room"
                value={state.room}
                onChange={(event) => handleChange(event)}
              >
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
                checked={!!avoidArray.includes(7)}
                onChange={(event) => handleAvoidChange(event)}
              />
              <label htmlFor="pillows">Pillows</label>
              <input
                type="checkbox"
                name="rug"
                value="2"
                checked={!!avoidArray.includes(2)}
                onChange={(event) => handleAvoidChange(event)}
              />
              <label htmlFor="rug">Rugs</label>
              <input
                type="checkbox"
                name="lamp"
                value="3"
                checked={!!avoidArray.includes(3)}
                onChange={(event) => handleAvoidChange(event)}
              />
              <label htmlFor="lamp">Lamps</label>
              <input
                type="checkbox"
                name="art"
                value="4"
                checked={!!avoidArray.includes(4)}
                onChange={(event) => handleAvoidChange(event)}
              />
              <label htmlFor="art">Art</label>
              <input
                type="checkbox"
                name="decor"
                value="5"
                checked={!!avoidArray.includes(5)}
                onChange={(event) => handleAvoidChange(event)}
              />
              <label htmlFor="decor">Decor</label>
              <input
                type="checkbox"
                name="kitchenLinens"
                value="9"
                checked={!!avoidArray.includes(9)}
                onChange={(event) => handleAvoidChange(event)}
              />
              <label htmlFor="kitchenLinens">Kitchen Linens</label>
              <input
                type="checkbox"
                name="mirror"
                value="19"
                checked={!!avoidArray.includes(19)}
                onChange={(event) => handleAvoidChange(event)}
              />
              <label htmlFor="mirror">Mirrors</label>
              <input
                type="checkbox"
                name="towel"
                value="20"
                checked={!!avoidArray.includes(20)}
                onChange={(event) => handleAvoidChange(event)}
              />
              <label htmlFor="towel">Towels</label>
              <input
                type="checkbox"
                name="storage"
                value="11"
                checked={!!avoidArray.includes(11)}
                onChange={(event) => handleAvoidChange(event)}
              />
              <label htmlFor="storage">Storage</label>
              <input
                type="checkbox"
                name="serverware"
                value="13"
                checked={!!avoidArray.includes(13)}
                onChange={(event) => handleAvoidChange(event)}
              />
              <label htmlFor="serverware">Serverware</label>
              <input
                type="checkbox"
                name="utensils"
                value="14"
                checked={!!avoidArray.includes(14)}
                onChange={(event) => handleAvoidChange(event)}
              />
              <label htmlFor="utensils">Utensils</label>
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
