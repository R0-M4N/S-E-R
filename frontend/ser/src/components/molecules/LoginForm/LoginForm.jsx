import "./login.css";
import { useState } from "react";
import ButtonAtom from "../../atoms/ButtonAtom";
import { Navigate } from 'react-router-dom';

const LoginForm = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
        );

    const handleSubmit = (event) => {
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
            if (userData.password !== pass.value) {
              // Invalid password
              setErrorMessages({ name: "pass", message: errors.pass });
            } else {
              setIsSubmitted(true);
            }
          } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
          }
    }

    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
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
            <div className="login-form">
            {isSubmitted ? <Navigate replace to="/swap" /> : renderForm}
            </div>
        </div>
        );
    }

 export default LoginForm; 