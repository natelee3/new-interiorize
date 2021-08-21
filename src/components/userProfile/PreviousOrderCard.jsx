import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const PreviousOrderCard = ({ index, image, name, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div
            className="productContainer"
            onClick={(event) => handleClick(event)}
            key={`${index}_front`}
          >
            <img
              src={`https://api.interiorize.design/images/${image}`}
              alt="item on the way"
              className="productImage"
            />
            <button>View More</button>
          </div>
          <div
            className="productContainer"
            onClick={(event) => handleClick(event)}
            key={`${index}_back`}
          >
            <h3>{name}</h3>
            <p>{description}</p>
            <button>View Less</button>
          </div>
        </ReactCardFlip>
    </>
  );
};

export default PreviousOrderCard;
