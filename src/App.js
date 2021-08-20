/* eslint-disable jsx-a11y/alt-text */
import logo from "./logo.svg";
import "./App.css";
import { Button } from 'react-bootstrap';

import {
  facebookProvider,
  googleProvider
} from "./config/authMethods";
import socialMediaAuth from "./service/auth";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { width } from "dom-helpers";

function App() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  return (
     

    <div className="App">
      <div style={{display: 'flex', paddingLeft: 30, margin: 10, fontFamily: 'Arial-black', fontSize: 60, borderBottom: "1px solid black"}} className="title">
        <img src="data:image/png;base64,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" />
        Newton School</div>

      <div className="App-header">
        <h3>Hostel Allocation</h3>
        
        <p>Please sign-in : </p>

        <FacebookLoginButton style={{height: 50, width: 250}} onClick={() => handleOnClick(facebookProvider)} />
        <GoogleLoginButton style={{height: 50, width: 250}} onClick={() => handleOnClick(googleProvider)} />
      </div>
    </div>
  );
}

export default App;
