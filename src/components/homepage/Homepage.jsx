import "./homepage.css";
import homepageImg2 from "./homepageImg2.jpg"

const Homepage = () => {
    return (
        <>
            <p>Homepage!</p>
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
                <img src={homepageImg2} alt="Decorated Home" />
                </div>
            </div>
        </>
    )
}

export default Homepage;