import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Style quiz to do: Implement some kinda of arrow or 'next' button. Fade in and out with each press  of the arrow for the next set of questions.
//Questions: budget, color pallete, style, room, avoid
//Save each answer in local storage and then do a one big post.

const CarouselContainer = () => {
  const [style, setStyle] = useState("");
  const [budget, setBudget] = useState("");
  const [room, setRoom] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [avoidArray, setAvoidArray] = useState([]);

  const [color1Visible, setColor1Visible] = useState(true);
  const [color2Visible, setColor2Visible] = useState(false);
  const [color3Visible, setColor3Visible] = useState(false);

  //   CHANGES
  const handleStyleChange = (event) => {
    setStyle(event.target.value);
  };

  const handleBudgetChange = (event) => {
    console.log(event.target.value);
    parseInt(event.target.value);
    setBudget(event.target.value);
  };

  const handleRoomChange = (event) => {
    setRoom(event.target.value);
  };

  const handleColor1Change = (event) => {
    parseInt(event.target.value);
    setColor1(event.target.value);
  };

  const handleColor2Change = (event) => {
    parseInt(event.target.value);
    setColor2(event.target.value);
  };

  const handleColor3Change = (event) => {
      parseInt(event.target.value);
      setColor3(event.target.value);
  }

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
    setColor1Visible(false);
    localStorage.setItem("Color 1", color1);
    setColor2Visible(true);
  };

  const handleColor2Submit = (event) => {
    event.preventDefault();
    localStorage.setItem("Color 2", color2);
    setColor2Visible(false);
    setColor3Visible(true);
  };

  const handleColor3Submit = (event) => {
      event.preventDefault();
      localStorage.setItem("Color 3", color3);
  }

  return (
    <Carousel
      autoplay={false}
      showArrows={false}
      showThumbs={false}
      interval={2200000}
      showStatus={false}
    >
      {/* BUDGET */}
      <div>
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
          <button type="submit">Next</button>
        </form>
      </div>

      {/* STYLE */}

      <div onChange={(event) => handleStyleChange(event)}>
        <h2>Which picture best describes your style?</h2>
        <form onSubmit={(event) => handleStyleSubmit(event)}>
          <div className="row">
            <div className="styleCol">
              <input id="bohemian" type="radio" name="style" value="Bohemian" />

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
                <input id="modern" type="radio" name="style" value="Modern" />

                <label className="styleImg modern" for="modern"></label>

                <h3>Modern</h3>
              </div>
            </div>
          </div>
          <button type="submit">Next</button>
        </form>
      </div>

      {/* ROOM SELECTION */}

      <div onChange={(event) => handleRoomChange(event)}>
        <h3>Which room would you like to focus on first?</h3>
        <form onSubmit={(event) => handleRoomSubmit(event)}>
          <input id="livingRoom" type="radio" name="room" value="Living Room" />
          <label for="livingRoom">Living Room</label>

          <input id="bedroom" type="radio" name="room" value="Bedroom" />
          <label for="bedroom">Bedroom</label>

          <input id="bathroom" type="radio" name="room" value="Bathroom" />
          <label for="bathroom">Bathroom</label>

          <input id="kitchen" type="radio" name="room" value="Kitchen" />
          <label for="kitchen">Kitchen</label>

          <input id="patio" type="radio" name="room" value="Patio" />
          <label for="patio">Patio</label>

          <button type="submit">Next</button>
        </form>
      </div>

      <div>
        {/* COLOR SELECTION */}
        <div className={!!color1Visible ? "colorContainer" : "hidden"}>
          <h3>Choose Your First Color</h3>
          <div onChange={(event) => handleColor1Change(event)}>
            <form onSubmit={(event) => handleColor1Submit(event)}>
              <input id="red" type="radio" name="color" value="1" />
              <label for="red">Red</label>

              <input id="blue" type="radio" name="color" value="2" />
              <label for="blue">Blue</label>

              <input id="black" type="radio" name="color" value="3" />
              <label for="black">Black</label>

              <input id="white" type="radio" name="color" value="4" />
              <label for="white">White</label>

              <input id="yellow" type="radio" name="color" value="5" />
              <label for="yellow">Yellow</label>

              <input id="green" type="radio" name="color" value="6" />
              <label for="green">Green</label>

              <input id="purple" type="radio" name="color" value="7" />
              <label for="purple">Purple</label>

              <input id="orange" type="radio" name="color" value="8" />
              <label for="orange">Orange</label>

              <input id="gray" type="radio" name="color" value="10" />
              <label for="gray">Gray</label>

              <input id="brown" type="radio" name="color" value="11" />
              <label for="brown">Brown</label>

              <button type="submit">Next</button>
            </form>
          </div>
        </div>
        {/* COLOR SELECTION 2  */}
        <div className={!!color2Visible ? "colorContainer" : "hidden"}>
          <h3>Choose Your Second Color</h3>
          <div onChange={(event) => handleColor2Change(event)}>
            <form onSubmit={(event) => handleColor2Submit(event)}>
              <input id="red" type="radio" name="color" value="1" />
              <label for="red">Red</label>

              <input id="blue" type="radio" name="color" value="2" />
              <label for="blue">Blue</label>

              <input id="black" type="radio" name="color" value="3" />
              <label for="black">Black</label>

              <input id="white" type="radio" name="color" value="4" />
              <label for="white">White</label>

              <input id="yellow" type="radio" name="color" value="5" />
              <label for="yellow">Yellow</label>

              <input id="green" type="radio" name="color" value="6" />
              <label for="green">Green</label>

              <input id="purple" type="radio" name="color" value="7" />
              <label for="purple">Purple</label>

              <input id="orange" type="radio" name="color" value="8" />
              <label for="orange">Orange</label>

              <input id="gray" type="radio" name="color" value="10" />
              <label for="gray">Gray</label>

              <input id="brown" type="radio" name="color" value="11" />
              <label for="brown">Brown</label>

              <button type="submit">Next</button>
            </form>
          </div>
        </div>

        {/* COLOR SELECTION 3 */}
        <div className={!!color3Visible ? "colorContainer" : "hidden"}>
          <h3>Choose Your Third Color</h3>
          <div onChange={(event) => handleColor3Change(event)}>
            <form onSubmit={(event) => handleColor3Submit(event)}>
              <input id="red" type="radio" name="color" value="1" />
              <label for="red">Red</label>

              <input id="blue" type="radio" name="color" value="2" />
              <label for="blue">Blue</label>

              <input id="black" type="radio" name="color" value="3" />
              <label for="black">Black</label>

              <input id="white" type="radio" name="color" value="4" />
              <label for="white">White</label>

              <input id="yellow" type="radio" name="color" value="5" />
              <label for="yellow">Yellow</label>

              <input id="green" type="radio" name="color" value="6" />
              <label for="green">Green</label>

              <input id="purple" type="radio" name="color" value="7" />
              <label for="purple">Purple</label>

              <input id="orange" type="radio" name="color" value="8" />
              <label for="orange">Orange</label>

              <input id="gray" type="radio" name="color" value="10" />
              <label for="gray">Gray</label>

              <input id="brown" type="radio" name="color" value="11" />
              <label for="brown">Brown</label>

              <button type="submit">Next</button>
            </form>
          </div>
        </div>
      </div>

      {/* AVOID */}
      <div>
        <h3>Which items should we NOT send you?</h3>
      </div>
    </Carousel>
  );
};

export default CarouselContainer;
