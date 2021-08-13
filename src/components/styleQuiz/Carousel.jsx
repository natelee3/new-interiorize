import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import modern from "./imgs/modern.jpeg";
import contemporary from "./imgs/contemporary.jpeg";

// Style quiz to do: Implement some kinda of arrow or 'next' button. Fade in and out with each press  of the arrow for the next set of questions.
//Questions: budget, color pallete, style, room, avoid
//Will have to be some type of form
//Save each answer in local storage and then do a one big post.

const CarouselContainer = () => {
  return (
    <Carousel
      autoplay={false}
      showArrows={false}
      showThumbs={false}
      interval={2200000}
      showStatus={false}
    >
      <div>
        <h2>What's your budget?</h2>
        <form>
          <div className="row">
            <div className="col">
              <h3>$40</h3>
            </div>
            <div className="col">
              <h3>$80</h3>
            </div>
            <div className="col">
              <h3>$120</h3>
            </div>
          </div>
          <button type="submit">Next</button>
        </form>
      </div>
      <div>
        <h2>Which picture best describes your style?</h2>
        <form>
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
      <div>
        <h3>Which room would you like to focus on first?</h3>
      </div>
      <div>
        <h3>Pick three colors you'd like your items to be.</h3>
      </div>
      <div>
        <h3>Which items should we NOT send you?</h3>
      </div>
    </Carousel>
  );
};

export default CarouselContainer;
