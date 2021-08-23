import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./auth0.css";

const HomepageLogin = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="logInOut" onClick={() => loginWithRedirect()}>Get Started</button>;
};

export default HomepageLogin;