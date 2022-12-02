import "./login.css";
import { useState } from "react";
import ButtonAtom from "../../atoms/ButtonAtom";
import { Navigate } from 'react-router-dom';
import { useLocalState } from '../../../util/LocalStorage.jsx'

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const url = "http://localhost.localdomain:8080/api/auth/login"

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
        );

    function sendLoginRequest() {
      const reqBody = {
        username: username,
        password: password,
      };

      fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(reqBody),
      })
      .then((response) => {
        if (response.status === 200)
          return response.text();
        else return Promise.reject("Invalid login attempt!");
      })
      .then((response) => {
        console.log(response.text());
        setJwt(response.text());
      })
      .catch((message) => {
        alert(message);
      });
    }

    const renderForm = (
        <div className="login-form">
          <form onSubmit={sendLoginRequest}>
            <div className="input-container">
              <label>Username </label>
              <input 
                type="text" 
                name="uname" 
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required 
              />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input 
                type="password" 
                name="pass" 
                value={password} 
                required 
                onChange={(event) => setPassword(event.target.value)}
              />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
                <ButtonAtom buttonType="submit"/>
            </div>
          </form>
        </div>
      );

    return (
        <div className="login-container">
            {isSubmitted ? <Navigate replace to="/swap" /> : renderForm}
        </div>
        );
    }

 export default LoginForm; 