import "./homepage.css";
import homepageImg2 from "./imgs/homepageImg2.jpg";
import check from "./imgs/check.png";
import truck from "./imgs/truck.png";
import box from "./imgs/box.png";
// import greenChairs from "./imgs/greenChairs.png";
import editedPhoto from "./imgs/editedPhoto.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
            // const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImNMVGhSTDA1Zm4xR3FGaVVtdHZhUyJ9.eyJpc3MiOiJodHRwczovL2Rldi1teHA5a3l1eC51cy5hdXRoMC5jb20vIiwic3ViIjoiS09aTnRNalA2bDRGTnNVQm5Sa0Z1SEFyUk5XWEdxdHNAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vYXBpLmludGVyaW9yaXplLmRlc2lnbiIsImlhdCI6MTYyOTQ3MzY3NywiZXhwIjoxNjI5NTYwMDc3LCJhenAiOiJLT1pOdE1qUDZsNEZOc1VCblJrRnVIQXJSTldYR3F0cyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.oJTAPRL2t6A-BKm6HdOfjISs4McmImKcI50ibcQRj4xhX5kvPIWwfHl2PLlHaFtHcvy4TI7ZmpvXU9RDxVhOjMiDPajNkiUfZeAfhyYJRlwHhMqTbNfuyHVxU1hlinfDKksFvk_0YAO4Bldi7phXIDtsYLAakta_c1hC-iDMHnuMhoD0tl8MHOj6wkqJWVDv9M72O8n3KmSYcmE6Jh-cg_cbPLemi8fh3to34HT24etqv4GZrqz5-AYIf_q6T0F9y0dNxv-wbugox2QwuYiRu4g5GijW1JeQJQ-Z3OAYldpCm2eawYHqTMzTMq_ow_R9zN5-6-Avux_TvG0EK1NOBA';
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
                    <p className="greetingContent">We’re proud to work with thousands of passionate Stylists from all over the U.S. who are motivated to learn about your style and evolving needs, in order to find the perfect pieces for you.</p>
                    
                    <Link to="/style-quiz">
                        <button className="startButton" onClick={() => {
                        
                        }}>
                            START NOW
                        </button>
                    </Link>    
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
                        <p className="subContent">Based off of your quiz, our team of experienced interior design specialists will find the perfect decor pieces that will make your house feel more like a home! A $20 styling fee covers your stylist’s expertise and time—it gets credited toward anything you keep.</p>
                    </div>
                    <div className="lowerBoxes">
                    <img className="icons" src={truck} alt="Truck" />   
                    <h3 className="subTitles">2. Receive Your Items</h3>
                        <p className="subContent">The best way to see if you like something, is to live with it! After your order is processed, we send your items within 4 business days. Upon arrival, we give you a 14 day experience period where you can make a more educated decision on if you would like to keep your new decor items or send them back.</p>
                    </div>
                    <div className="lowerBoxes">
                    <img className="icons" src={box} alt="Box" /> 
                    <h3 className="subTitles">3. Send Back What You Dont Like</h3>
                        <p className="subContent">If you love your items, keep them! If not, re-box your item and take it to your nearest UPS Store to be mailed back to us for free. Our design team will then take notes of this returned item and record them on your account to make sure you're only receiving items you'll love!</p>
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
                    <p className="endTextP">It’s our mission to change the way people find decor items they love by combining technology with the personal touch of seasoned style experts. The Interiorize experience is not merely curated—it’s truly personalized to you. We’re here to help you save time, feel great in your newly decorated home and evolve your personal style over time.</p>
                    <button className="learnButton" type="button">LEARN MORE</button>
                </div>
            </div>
        </>
    )
}

export default Homepage;