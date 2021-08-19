import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const logoutSequence = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    logout({
       returnTo: window.location.origin
    })
  }

  return (
    <button className="logInOut" onClick={logoutSequence}>
      Log Out
    </button>
  );
};

export default LogoutButton;