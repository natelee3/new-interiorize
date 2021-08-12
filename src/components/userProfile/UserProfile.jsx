import "./userprofile.css";

const UserProfile = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="shipmentCol">
            <h1>Your Account</h1>
            <h2>Recent Shipment</h2>
            {/* Ternary statement Displays: 'you've got items on the way' or 'schedule an order!' based on status */}
            <p>You've got items on the way! </p>
            <div className="shipmentContainer">
              <div className="productContainer">
                <img
                  src="https://api.interiorize.design/images/2_piece_cement_metal_table_vase_set.jpg"
                  alt="item on the way"
                  className="productImage"
                />
                <button>View More</button>
              </div>
              <div className="productContainer">
                <img
                  src="https://api.interiorize.design/images/bohemian_landscape_painting.jpg"
                  alt="item on the way"
                  className="productImage"
                />
                <button>View More</button>
              </div>
              <div className="productContainer">
                <img
                  src="https://api.interiorize.design/images/desoto_oriental_area_rug.jpeg"
                  alt="item on the way"
                  className="productImage"
                />
                <button>View More</button>
              </div>
            </div>
            <h2>Past Deliveries</h2>
          </div>
          <div className="userPreferencesCol">
            <h2>Your Style Preferences</h2>
            <h3>Budget</h3>
            <p>Average - $80</p>
            <h3>Color Palette</h3>
            <p>White, blue, red</p>
            <h3>House Size</h3>
            <p>2 br 2 bth</p>
            <h3>Style</h3>
            <p>Bohemian</p>
            <h3>Room</h3>
            <p>Living Room</p>
            <h3>Avoid</h3>
            <p>Animal print, paisley</p>
            <button type="button"  className="primaryBtn">Edit Preferences</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
