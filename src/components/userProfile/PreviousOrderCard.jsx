const PreviousOrderCard = ({img, index}) => {
    return (
        <div className="productContainer" key={index}>
        <img
          src={`https://api.interiorize.design/images/${img}`}
          alt="item on the way"
          className="productImage"
        />
        <button>Leave a Review</button>
      </div>
    )
}

export default PreviousOrderCard;