import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import StyleQuiz from "./components/styleQuiz/StyleQuiz";
import UserProfile from "./components/userProfile/UserProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/style-quiz">
            <StyleQuiz />
          </Route>
          <Route exact path="/user-profile">
            <UserProfile />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
      <footer>
        <p>Interiorize Footer</p>
      </footer>
    </div>
  );
}

export default App;
