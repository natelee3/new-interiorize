import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./auth0.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="logInOut" onClick={() => loginWithRedirect()}>Login/Register</button>;
};

export default LoginButton;