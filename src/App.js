import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StateProvider } from "./context";
import { useReducer } from "react";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import StyleQuiz from "./components/styleQuiz/StyleQuiz";
import UserProfile from "./components/userProfile/UserProfile";
import Shop from "./components/shop/Shop";
import ShopIntro from "./components/shop/ShopIntro";
import ItemDetails from "./components/shop/ItemDetails";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import Redirect404 from "./components/404/Redirect404";
import Footer from "./footer/Footer";


function App() {
  const initialState = {cart: [], generatedItems: true};

  const contextReducer = (state, action) => {
    console.log("Action then State: ",action, state)
    
    switch (action.type) {
        case 'ACTION_ADD_TO_CART':
            return {
                cart: [...state.cart, action.payload],
            };
        case 'ACTION_REMOVE':
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload),
            };
          
        case 'ACTION_EMPTY_CART':
            return {
              cart: []
            }

        case 'ACTION_NO_ITEM_MATCHES':
          return {
            generatedItems: false
          }
        default:
            return state;
    }
  };



    return ( 
      <div className = "App">
        <StateProvider value={useReducer(contextReducer, initialState)}>
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
                <Route exact path = "/shop-intro/shop/:id">
                  <ItemDetails />
                </Route>
                <Route exact path = "/style-quiz">
                  <StyleQuiz />
                </Route> 
                <Route exact path = "/user-profile">
                  <UserProfile />
                </Route> 
                <Route exact path = "/shopping-cart">
                  <ShoppingCart />
                </Route> 
                <Route path = "*">
                  <Redirect404/>
                </Route> 
              </Switch> 
            <Footer />
          </Router>
        </StateProvider> 
        </div>
    );
}

export default App;