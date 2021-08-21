import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const ProductCard = ({ index, description, img, name }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"
        key={`react-card-flip-${name}-${index}`}
      >
        <div
          className="productContainer"
          onClick={(event) => handleClick(event)}
          key={`${index}-front-${name}`}
        >
          <img
            src={`https://api.interiorize.design/images/${img}`}
            alt="item on the way"
            className="productImage"
          />
          <button>View More</button>
        </div>
        <div
          className="productContainer"
          onClick={(event) => handleClick(event)}
          key={`${index}-back-${name}`}
        >
          <h3>{name}</h3>
          <p>{description}</p>
          <button>View Less</button>
        </div>
      </ReactCardFlip>
    </>
  );
};

export default ProductCard;
