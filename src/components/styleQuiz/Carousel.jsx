import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//To do:
//Post the locally stored variables to the API
//Make it look like the mock-up
//Mobile Responsiveness
// For the style slide, add an onClick feature that takes them back to the top of the page
//Add icons for each selection!
//Display a message after submit saying thanks for your responses. Our team of experts will start putting together your first order as soon as possible.
//Add a button after message to redirect to user profile
//Add a message underneath Style Quiz briefly explaining why you have to take the quiz(helps our stylists determine the best items to send you)

const CarouselContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [style, setStyle] = useState("");
  const [budget, setBudget] = useState("");
  const [room, setRoom] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [avoidArray, setAvoidArray] = useState([]);
  const [checkCount, setCheckCount] = useState(0);

  //Carousel Controls:
  const next = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  //   CHANGES
  const handleStyleChange = (event) => {
    setStyle(event.target.value);
  };

  const handleBudgetChange = (event) => {
    console.log(event.target.value);
    let budgetValue = parseInt(event.target.value);
    setBudget(budgetValue);
  };

  const handleRoomChange = (event) => {
    setRoom(event.target.value);
  };

  const handleColor1Change = (event) => {
    let colorValue = parseInt(event.target.value);
    setColor1(colorValue);
  };

  const handleColor2Change = (event) => {
    let colorValue = parseInt(event.target.value);
    setColor2(colorValue);
  };

  const handleColor3Change = (event) => {
    let colorValue = parseInt(event.target.value);
    setColor3(colorValue);
  };

  const handleAvoidChange = (event) => {
    let index;
    if (event.target.checked) {
      let newValue = event.target.value;
      avoidArray.push(newValue);
      setCheckCount(checkCount + 1);
    } else {
      index = avoidArray.indexOf(event.target.value);
      avoidArray.splice(index, 1);
      setCheckCount(checkCount - 1);
    }
  };

  // SUBMITS
  const handleBudgetSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("Budget", budget);
  };

  const handleStyleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("Style Category", style);
  };

  const handleRoomSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("Room Choice", room);
  };

  const handleColor1Submit = (event) => {
    event.preventDefault();
    localStorage.setItem("Color 1", color1);
  };

  const handleColor2Submit = (event) => {
    event.preventDefault();
    localStorage.setItem("Color 2", color2);
  };

  const handleColor3Submit = (event) => {
    event.preventDefault();
    localStorage.setItem("Color 3", color3);
  };

  const handleAvoidSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("Avoid", avoidArray);
    //Post to the API!
  };

  return (
    <Carousel
      autoplay={false}
      showArrows={false}
      showThumbs={false}
      showIndicators={false}
      interval={2200000}
      showStatus={false}
      emulateTouch={false}
      swipeable={false}
      selectedItem={currentSlide}
      onChange={updateCurrentSlide}
    >
      {/* BUDGET */}
      <div className="carouselSlide">
        <h2>What's your budget?</h2>
        <form onSubmit={(event) => handleBudgetSubmit(event)}>
          <div className="row">
            <div className="col">
              <input
                id="40"
                type="radio"
                name="budget"
                value="40"
                onChange={(event) => handleBudgetChange(event)}
                required
              />
              <label for="40">$40</label>
            </div>
            <div className="col">
              <input
                id="80"
                type="radio"
                name="budget"
                value="80"
                onChange={(event) => handleBudgetChange(event)}
              />
              <label for="80">$80</label>
            </div>
            <div className="col">
              <input
                id="120"
                type="radio"
                name="budget"
                value="120"
                onChange={(event) => handleBudgetChange(event)}
              />
              <label for="120">$120</label>
            </div>
          </div>
          <button
            type="submit"
            className="secondaryBtn"
            onClick={budget !== "" ? () => next() : null}
          >
            Next
          </button>
        </form>
      </div>

      {/* STYLE */}

      <div className="carouselSlide">
        <h2>Which picture best describes your style?</h2>
        <form onSubmit={(event) => handleStyleSubmit(event)}>
          <div className="row">
            <div className="styleCol">
              <input
                id="bohemian"
                type="radio"
                name="style"
                value="Bohemian"
                onChange={(event) => handleStyleChange(event)}
                required
              />

              <label className="styleImg bohemian" for="bohemian"></label>

              <h3>Bohemian</h3>
            </div>
            <div>
              <div className="styleCol">
                <input
                  id="farmhouse"
                  type="radio"
                  name="style"
                  value="Farmhouse"
                  onChange={(event) => handleStyleChange(event)}
                />

                <label className="styleImg farmhouse" for="farmhouse"></label>

                <h3>Farmhouse</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div>
              <div className="styleCol">
                <input
                  id="contemporary"
                  type="radio"
                  name="style"
                  value="Contemporary"
                  onChange={(event) => handleStyleChange(event)}
                />

                <label
                  className="styleImg contemporary"
                  for="contemporary"
                ></label>

                <h3>Contemporary</h3>
              </div>
            </div>
            <div>
              <div className="styleCol">
                <input
                  id="modern"
                  type="radio"
                  name="style"
                  value="Modern"
                  onChange={(event) => handleStyleChange(event)}
                />

                <label className="styleImg modern" for="modern"></label>

                <h3>Modern</h3>
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={style !== "" ? () => next() : null}
            className="secondaryBtn"
          >
            Next
          </button>
        </form>
      </div>

      {/* ROOM SELECTION */}

      <div
        className="carouselSlide"
        onChange={(event) => handleRoomChange(event)}
      >
        <h3>Which room would you like to focus on first?</h3>
        <form onSubmit={(event) => handleRoomSubmit(event)}>
          <input
            id="livingRoom"
            type="radio"
            name="room"
            value="Living Room"
            required
          />
          <label for="livingRoom">Living Room</label>

          <input id="bedroom" type="radio" name="room" value="Bedroom" />
          <label for="bedroom">Bedroom</label>

          <input id="bathroom" type="radio" name="room" value="Bathroom" />
          <label for="bathroom">Bathroom</label>

          <input id="kitchen" type="radio" name="room" value="Kitchen" />
          <label for="kitchen">Kitchen</label>

          <input id="patio" type="radio" name="room" value="Patio" />
          <label for="patio">Patio</label>

          <button
            className="secondaryBtn"
            type="submit"
            onClick={room !== "" ? () => next() : null}
          >
            Next
          </button>
        </form>
      </div>

      <div className="carouselSlide">
        {/* COLOR SELECTION */}
        <div className="colorContainer">
          <h3>Choose Your First Color</h3>
          <div>
            <form onSubmit={(event) => handleColor1Submit(event)}>
              <input
                id="red"
                type="radio"
                name="color"
                value="1"
                onChange={(event) => handleColor1Change(event)}
                required
              />
              <label for="red">Red</label>

              <input
                id="blue"
                type="radio"
                name="color"
                value="2"
                onChange={(event) => handleColor1Change(event)}
              />
              <label for="blue">Blue</label>

              <input
                id="black"
                type="radio"
                name="color"
                value="3"
                onChange={(event) => handleColor1Change(event)}
              />
              <label for="black">Black</label>

              <input
                id="white"
                type="radio"
                name="color"
                value="4"
                onChange={(event) => handleColor1Change(event)}
              />
              <label for="white">White</label>

              <input
                id="yellow"
                type="radio"
                name="color"
                value="5"
                onChange={(event) => handleColor1Change(event)}
              />
              <label for="yellow">Yellow</label>

              <input
                id="green"
                type="radio"
                name="color"
                value="6"
                onChange={(event) => handleColor1Change(event)}
              />
              <label for="green">Green</label>

              <input
                id="purple"
                type="radio"
                name="color"
                value="7"
                onChange={(event) => handleColor1Change(event)}
              />
              <label for="purple">Purple</label>

              <input
                id="orange"
                type="radio"
                name="color"
                value="8"
                onChange={(event) => handleColor1Change(event)}
              />
              <label for="orange">Orange</label>

              <input
                id="gray"
                type="radio"
                name="color"
                value="10"
                onChange={(event) => handleColor1Change(event)}
              />
              <label for="gray">Gray</label>

              <input
                id="brown"
                type="radio"
                name="color"
                value="11"
                onChange={(event) => handleColor1Change(event)}
              />
              <label for="brown">Brown</label>

              <button type="submit" className="secondaryBtn" onClick={color1 !== "" ? () => next() : null}>
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="carouselSlide">
        {/* COLOR SELECTION 2  */}
        <div className="colorContainer">
          <h3>Choose Your Second Color</h3>
          <div>
            <form onSubmit={(event) => handleColor2Submit(event)}>
              <input
                id="red2"
                type="radio"
                name="color2"
                value="1"
                className={color1 === 1 ? "hidden" : "active"}
                onChange={(event) => handleColor2Change(event)}
                required
              />
              <label for="red2" className={color1 === 1 ? "hidden" : "active"}>
                Red
              </label>

              <input
                id="blue2"
                type="radio"
                name="color2"
                value="2"
                className={color1 === 2 ? "hidden" : "active"}
                onChange={(event) => handleColor2Change(event)}
              />
              <label for="blue2" className={color1 === 2 ? "hidden" : "active"}>
                Blue
              </label>

              <input
                id="black2"
                type="radio"
                name="color2"
                value="3"
                className={color1 === 3 ? "hidden" : "active"}
                onChange={(event) => handleColor2Change(event)}
              />
              <label for="black2" className={color1 === 3 ? "hidden" : "active"}>
                Black
              </label>

              <input
                id="white2"
                type="radio"
                name="color2"
                value="4"
                className={color1 === 4 ? "hidden" : "active"}
                onChange={(event) => handleColor2Change(event)}
              />
              <label for="white2" className={color1 === 4 ? "hidden" : "active"}>
                White
              </label>

              <input
                id="yellow2"
                type="radio"
                name="color2"
                value="5"
                className={color1 === 5 ? "hidden" : "active"}
                onChange={(event) => handleColor2Change(event)}
              />
              <label
                for="yellow2"
                className={color1 === 5 ? "hidden" : "active"}
              >
                Yellow
              </label>

              <input
                id="green2"
                type="radio"
                name="color2"
                value="6"
                className={color1 === 6 ? "hidden" : "active"}
                onChange={(event) => handleColor2Change(event)}
              />
              <label for="green2" className={color1 === 6 ? "hidden" : "active"}>
                Green
              </label>

              <input
                id="purple2"
                type="radio"
                name="color2"
                value="7"
                className={color1 === 7 ? "hidden" : "active"}
                onChange={(event) => handleColor2Change(event)}
              />
              <label
                for="purple2"
                className={color1 === 7 ? "hidden" : "active"}
              >
                Purple
              </label>

              <input
                id="orange2"
                type="radio"
                name="color2"
                value="8"
                className={color1 === 8 ? "hidden" : "active"}
                onChange={(event) => handleColor2Change(event)}
              />
              <label
                for="orange2"
                className={color1 === 8 ? "hidden" : "active"}
              >
                Orange
              </label>

              <input
                id="gray2"
                type="radio"
                name="color2"
                value="10"
                className={color1 === 10 ? "hidden" : "active"}
                onChange={(event) => handleColor2Change(event)}
              />
              <label for="gray2" className={color1 === 10 ? "hidden" : "active"}>
                Gray
              </label>

              <input
                id="brown2"
                type="radio"
                name="color2"
                value="11"
                className={color1 === 11 ? "hidden" : "active"}
                onChange={(event) => handleColor2Change(event)}
              />
              <label
                for="brown2"
                className={color1 === 11 ? "hidden" : "active"}
              >
                Brown
              </label>

              <button type="submit" className="secondaryBtn" onClick={color2 !== "" ? () => next() : null}>
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
        {/* COLOR SELECTION 3 */}
      <div className="carouselSlide">
        <div className="colorContainer">
          <h3>Choose Your Third Color</h3>
          <div>
            <form onSubmit={(event) => handleColor3Submit(event)}>
              <input
                id="red3"
                type="radio"
                name="color3"
                value="1"
                className={color1 === 1 || color2 === 1 ? "hidden" : "active"}
                onChange={(event) => handleColor3Change(event)}
                required
              />
              <label
                for="red3"
                className={color1 === 1 || color2 === 1 ? "hidden" : "active"}
              >
                Red
              </label>

              <input
                id="blue3"
                type="radio"
                name="color3"
                value="2"
                onChange={(event) => handleColor3Change(event)}
                className={color1 === 2 || color2 === 2 ? "hidden" : "active"}
              />
              <label
                for="blue3"
                className={color1 === 2 || color2 === 2 ? "hidden" : "active"}
              >
                Blue
              </label>

              <input
                id="black3"
                type="radio"
                name="color3"
                value="3"
                onChange={(event) => handleColor3Change(event)}
                className={color1 === 3 || color2 === 3 ? "hidden" : "active"}
              />
              <label
                for="black3"
                className={color1 === 3 || color2 === 3 ? "hidden" : "active"}
              >
                Black
              </label>

              <input
                id="white3"
                type="radio"
                name="color3"
                value="4"
                onChange={(event) => handleColor3Change(event)}
                className={color1 === 4 || color2 === 4 ? "hidden" : "active"}
              />
              <label
                for="white3"
                className={color1 === 4 || color2 === 4 ? "hidden" : "active"}
              >
                White
              </label>

              <input
                id="yellow3"
                type="radio"
                name="color3"
                value="5"
                onChange={(event) => handleColor3Change(event)}
                className={color1 === 5 || color2 === 5 ? "hidden" : "active"}
              />
              <label
                for="yellow3"
                className={color1 === 5 || color2 === 5 ? "hidden" : "active"}
              >
                Yellow
              </label>

              <input
                id="green3"
                type="radio"
                name="color3"
                value="6"
                onChange={(event) => handleColor3Change(event)}
                className={color1 === 6 || color2 === 6 ? "hidden" : "active"}
              />
              <label
                for="green3"
                className={color1 === 6 || color2 === 6 ? "hidden" : "active"}
              >
                Green
              </label>

              <input
                id="purple3"
                type="radio"
                name="color3"
                value="7"
                onChange={(event) => handleColor3Change(event)}
                className={color1 === 7 || color2 === 7 ? "hidden" : "active"}
              />
              <label
                for="purple3"
                className={color1 === 7 || color2 === 7 ? "hidden" : "active"}
              >
                Purple
              </label>

              <input
                id="orange3"
                type="radio"
                name="color3"
                value="8"
                onChange={(event) => handleColor3Change(event)}
                className={color1 === 8 || color2 === 8 ? "hidden" : "active"}
              />
              <label
                for="orange3"
                className={color1 === 8 || color2 === 8 ? "hidden" : "active"}
              >
                Orange
              </label>

              <input
                id="gray3"
                type="radio"
                name="color3"
                value="10"
                onChange={(event) => handleColor3Change(event)}
                className={color1 === 10 || color2 === 10 ? "hidden" : "active"}
              />
              <label
                for="gray3"
                className={color1 === 10 || color2 === 10 ? "hidden" : "active"}
              >
                Gray
              </label>

              <input
                id="brown3"
                type="radio"
                name="color3"
                value="11"
                onChange={(event) => handleColor3Change(event)}
                className={color1 === 11 || color2 === 11 ? "hidden" : "active"}
              />
              <label
                for="brown3"
                className={color1 === 11 || color2 === 11 ? "hidden" : "active"}
              >
                Brown
              </label>

              <button
                className="secondaryBtn"
                type="submit"
                onClick={color3 !== "" ? () => next() : null}
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* AVOID */}
      <div className="carouselSlide">
        <h3>Which items should we NOT send you?</h3>
        <form onSubmit={(event) => handleAvoidSubmit(event)}>
          <input
            type="checkbox"
            id="anything"
            name="avoid"
            value={null}
            onChange={(event) => handleAvoidChange(event)}
          />
          <label for="anything">Send me anything!</label>
          <input
            type="checkbox"
            id="pillows"
            name="avoid"
            value="Pillow"
            onChange={(event) => handleAvoidChange(event)}
          />
          <label for="pillows">Pillows</label>
          <input
            type="checkbox"
            id="lamps"
            name="avoid"
            value="Lamp"
            onChange={(event) => handleAvoidChange(event)}
          />
          <label for="lamps">Lamps</label>
          <input
            type="checkbox"
            id="art"
            name="avoid"
            value="Art"
            onChange={(event) => handleAvoidChange(event)}
          />
          <label for="art">Art</label>
          <input
            type="checkbox"
            id="decor"
            name="avoid"
            value="Decor"
            onChange={(event) => handleAvoidChange(event)}
          />
          <label for="decor">Decor</label>
          <input
            type="checkbox"
            id="kitchenLinens"
            name="avoid"
            value="Kitchen Linens"
            onChange={(event) => handleAvoidChange(event)}
          />
          <label for="kitchenLinens">Kitchen Linens</label>
          <input
            type="checkbox"
            id="storage"
            name="avoid"
            value="Storage"
            onChange={(event) => handleAvoidChange(event)}
          />
          <label for="storage">Storage</label>
          <input
            type="checkbox"
            id="serverware"
            name="avoid"
            value="Serverware"
            onChange={(event) => handleAvoidChange(event)}
          />
          <label for="serverware">Serverware</label>
          <input
            type="checkbox"
            id="utensils"
            name="avoid"
            value="Utensils"
            onChange={(event) => handleAvoidChange(event)}
          />
          <label for="utensils">Utensils</label>
          {checkCount === 0 ? (
            <p>Please Choose at Least One Option</p>
          ) : (
            <button type="submit" className="secondaryBtn">
              Submit
            </button>
          )}
        </form>
      </div>
    </Carousel>
  );
};

export default CarouselContainer;
