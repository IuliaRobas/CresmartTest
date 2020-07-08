import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import FacebookLogin from "react-facebook-login";

const Authentication = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const responseFacebook = response => {
    if (!response.accessToken) return;
    localStorage.setItem("accessToken", response.accessToken);
    props.history.push("/dashboard");
  };

  return (
    <div className="authentication">
      <div className="upper-container">
        <p className="login-text">login</p>
      </div>
      <div className="buttons-container">
        <FacebookLogin
          icon="fa-facebook"
          textButton="facebook"
          cssClass="facebook-button"
          appId="1766096386863797"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
        />
        <button className="button twitter-button">
          <FontAwesomeIcon icon={faTwitter} />
          twitter
        </button>
      </div>
      <div className="middle">
        <p>or</p>
      </div>
      <form className="inputs-container">
        <div className="input-container">
          <LockIcon />
          <input
            autoComplete="current email"
            className="input mail-input"
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <PersonIcon />
          <input
            autoComplete="current password"
            className="input mail-input"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </form>
      <div className="forgot-password-text">
        <p>forgot password?</p>
      </div>
      <button className="login-button" onClick={() => {}}>
        login
      </button>
      <div className="bottom-container">
        <p className="no-account-text">Don't have an account?</p>
        <a href="/" className="signup-text">
          sign up
        </a>
      </div>
    </div>
  );
};

export default Authentication;
