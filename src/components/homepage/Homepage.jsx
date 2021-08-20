import "./homepage.css";
import homepageImg2 from "./imgs/homepageImg2.jpg";
import check from "./imgs/check.png";
import truck from "./imgs/truck.png";
import box from "./imgs/box.png";
// import greenChairs from "./imgs/greenChairs.png";
import editedPhoto from "./imgs/editedPhoto.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Homepage = () => {
    const { isAuthenticated, user } = useAuth0();
    const { getAccessTokenSilently } = useAuth0({
        audience: 'http://api.interiorize.design'
    })

    useEffect(() => {
        console.log({isAuthenticated})

        const userCheck = async () => {
            console.log(user.sub)
            const token = await getAccessTokenSilently();
            // const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImNMVGhSTDA1Zm4xR3FGaVVtdHZhUyJ9.eyJpc3MiOiJodHRwczovL2Rldi1teHA5a3l1eC51cy5hdXRoMC5jb20vIiwic3ViIjoiS09aTnRNalA2bDRGTnNVQm5Sa0Z1SEFyUk5XWEdxdHNAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vYXBpLmludGVyaW9yaXplLmRlc2lnbiIsImlhdCI6MTYyOTM4NTU5NCwiZXhwIjoxNjI5NDcxOTk0LCJhenAiOiJLT1pOdE1qUDZsNEZOc1VCblJrRnVIQXJSTldYR3F0cyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.lBz3bA3MM3O_Uf7xpGrgAzhkVcT9jGWAeDpvBxYjoqwEfF1NIpswbEUBeLJBeJEZTfK7nMqJGFcESMcu0QtfTonWWQ7i6X2QMBbHI6gJqjSAHnoCxPhveTABmqh6wayuL_RHkoQvfYefMTJn6bMsH_snKalvDi6P2EwLpBoe_GY8Vl9pcS8LrbVg_ZJjq0ITaPFxjCfADNXQpJ9BFeXsN3ngdsAaWMbplJIo9HTogz9cUIq0tSJnH4SyrG_KfAaeuqJokaq5oIsUlhh9I9CwHCye6GdRIdD1CZWFfxvxADCc9bFm1SzI1i_Hzb0iOrVBCa92jOHZP16W9tPQr-6YxQ'
            localStorage.setItem('token', token)
            //const localURL = `http://localhost:3333/users/${user.sub}`;
            const url = `https://api.interiorize.design/users/${user.sub}`;
            try {
                const response = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => response.json());
                console.log(response)
                if (response.length > 0) {
                    console.log('Already have this user', response[0].id)
                    localStorage.setItem('user_id', response[0].id)
                } else {
                    //let newLocalUrl = 'http://localhost:3333/users/add';
                    let newUrl = `https://api.interiorize.design/users/add`;
                    const requestOptions = {
                        method: "POST",
                        headers: { 
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                         },
                        body: JSON.stringify({
                          user_sub: user.sub,
                          nickname: user.nickname,
                          email: user.email
                        }),
                      };
                      const newUser = fetch(newUrl, requestOptions)
                        .then(response => response.json())
                        .then(user => localStorage.setItem('user_id', user.id))
                        return newUser
                    }
            } catch (error) {
                console.error(error.message);
            } 
        };    
        if (isAuthenticated) {
            userCheck();
        }

    },[isAuthenticated, user, getAccessTokenSilently])
    

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
            <div className="allLowerContainer">
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