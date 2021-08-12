import "./homepage.css";
import homepageImg2 from "./imgs/homepageImg2.jpg";
import check from "./imgs/check.png";
import truck from "./imgs/truck.png";
import box from "./imgs/box.png";

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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus ad tempora iure odit voluptatum! Facere, voluptas necessitatibus veritatis pariatur exercitationem rerum molestiae ut possimus repellendus atque ducimus officiis nobis!</p>
                </div>
                <div className="lowerBoxes">
                <img className="icons" src={truck} alt="Truck" />   
                <h3 className="subTitles">2. Recieve Your Items</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus ad tempora iure odit voluptatum! Facere, voluptas necessitatibus veritatis pariatur exercitationem rerum molestiae ut possimus repellendus atque ducimus officiis nobis!</p>
                </div>
                <div className="lowerBoxes">
                <img className="icons" src={box} alt="Box" /> 
                <h3 className="subTitles">3. Send Back What You Dont Like</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus ad tempora iure odit voluptatum! Facere, voluptas necessitatibus veritatis pariatur exercitationem rerum molestiae ut possimus repellendus atque ducimus officiis nobis!</p>
                </div>
            </div>
        </>
    )
}

export default Homepage;