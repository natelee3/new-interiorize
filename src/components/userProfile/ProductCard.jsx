import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const ProductCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="productContainer">
          <img
            src="https://api.interiorize.design/images/2_piece_cement_metal_table_vase_set.jpg"
            alt="item on the way"
            className="productImage"
          />
          <button onClick={(event) => handleClick(event)}>View More</button>
        </div>
        <div className="productContainer">
          <h3>Product Name Goes Here</h3>
          <p>
            Product Description: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Quisque eget sapien ipsum. Suspendisse eget aliquet
            quam, vel venenatis elit. Etiam lacinia sit amet urna vel semper.
          </p>
          <button onClick={(event) => handleClick(event)}>Return</button>
        </div>
      </ReactCardFlip>
    </>
  );
};

export default ProductCard;
