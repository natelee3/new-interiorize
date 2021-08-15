import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import StyleQuiz from "./components/styleQuiz/StyleQuiz";
import UserProfile from "./components/userProfile/UserProfile";
import Shop from "./components/shop/Shop";
import ShopIntro from "./components/shop/ShopIntro";
import ItemDetails from "./components/shop/ItemDetails";

function App() {
    return ( 
      <div className = "App">
        <Router>
          <Navbar />
            <Switch>
              <Route exact path = "/">
                <Homepage />
              </Route> 
              <Route exact path = "/shop-intro/shop">
                <Shop />
              </Route> 
              <Route exact path = "/shop-intro">
                <ShopIntro />
              </Route>
              <Route exact path = "/shop-intro/shop/item-details">
                <ItemDetails />
              </Route>
              <Route exact path = "/style-quiz">
                <StyleQuiz />
              </Route> 
              <Route exact path = "/user-profile">
                <UserProfile />
              </Route> 
              <Route path = "*">
                <Redirect to = "/"/>
              </Route> 
            </Switch> 
          </Router> 
          <footer>
            <p> Interiorize Footer </p> 
          </footer> 
        </div>
    );
}

export default App;