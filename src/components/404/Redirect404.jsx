import { Link } from "react-router-dom";
import gif from "./interiorize404.gif";
import "./redirect404.css";

const Redirect404 = () => {
  return (
    <>
      <div className="errorContainer">
        <img src={gif} alt="woman typing on computer"/>
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for.</p>
        <Link to="/">Back to Home</Link>
      </div>
    </>
  );
};

export default Redirect404;
