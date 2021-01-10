import React, { useContext } from "react";
import "./login.css";

import { auth, provider } from "../../firebase/firebase";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const { setUser, user } = useContext(UserContext);
  const signin = async () => {
    try {
      const response = await auth.signInWithPopup(provider);
      setUser({
        loginStatus: true,
        name: response.additionalUserInfo.profile.name,
        email: response.additionalUserInfo.profile.email,
        profileURL: response.additionalUserInfo.profile.picture,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt="whatsappimg"
        />
        <h2>Sign in to WhatsApp {user.name}</h2>
        <button className="login__user" onClick={signin}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
