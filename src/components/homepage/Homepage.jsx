import "./homepage.css";
import homepageImg2 from "./imgs/homepageImg2.jpg";
import check from "./imgs/check.png";
import truck from "./imgs/truck.png";
import box from "./imgs/box.png";
// import greenChairs from "./imgs/greenChairs.png";
import editedPhoto from "./imgs/editedPhoto.png";

const Homepage = () => {
    return (
        <>
            <div className="homeMainContainer">
                <div className="mainBox1">
                    <h1 className="greetingHeading">We decorate so you dont have to</h1>
                    <p className="greetingContent">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque earum omnis accusamus voluptates tempora enim repellat provident consequatur qui?</p>
                    <button className="startButton" onClick={() => {
                        
                    }}>
                        START NOW
                    </button>
                </div>
                <div className="mainBox2">
                <img className="homepageImg2" src={homepageImg2} alt="Decorated Home" />
                </div>
                
            </div>
            <div className="lowerTitle">
                <div className="lowerTitleContent">
                    <h1>How it Works</h1>
                </div>
            </div>
            <div className="lowerContainer">
                <div className="lowerBoxes">
                    <img className="icons" src={check} alt="Checkbox" />
                    <h3 className="subTitles">1. Take Your Style Quiz</h3>
                    <p className="subContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus ad tempora iure odit voluptatum! Facere, voluptas necessitatibus veritatis pariatur exercitationem rerum molestiae ut possimus repellendus atque ducimus officiis nobis!</p>
                </div>
                <div className="lowerBoxes">
                <img className="icons" src={truck} alt="Truck" />   
                <h3 className="subTitles">2. Receive Your Items</h3>
                    <p className="subContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus ad tempora iure odit voluptatum! Facere, voluptas necessitatibus veritatis pariatur exercitationem rerum molestiae ut possimus repellendus atque ducimus officiis nobis!</p>
                </div>
                <div className="lowerBoxes">
                <img className="icons" src={box} alt="Box" /> 
                <h3 className="subTitles">3. Send Back What You Dont Like</h3>
                    <p className="subContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus ad tempora iure odit voluptatum! Facere, voluptas necessitatibus veritatis pariatur exercitationem rerum molestiae ut possimus repellendus atque ducimus officiis nobis!</p>
                </div>
            </div>

            <div className="endPageContainer">
                <div className="pictureBox">
                    {/* Edited Photo With Green Box Included*/}
                    <img className="greenChairs" src={editedPhoto} alt="Decorated Dining Room" />

                    {/* Photo and Box are separate */}
                    {/* <img className="greenChairs" src={greenChairs} alt="Decorated Dining Room" />
                    <div className="backdropBox">
                        <img className="greenChairs" src={greenChairs} alt="Decorated Dining Room" />
                    </div> */}
                </div>

                <div className="endTextBox">
                    <h1 className="endTextH1">Seamless Customer Experience</h1>
                    <p className="endTextP">Paragraph about why we're the best and why they should choose interiorize. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus lectus, gravida at mauris in, fringilla sollicitudin augue. Phasellus tempor </p>
                    <button className="learnButton" type="button">LEARN MORE</button>
                </div>
            </div>
        </>
    )
}

export default Homepage;