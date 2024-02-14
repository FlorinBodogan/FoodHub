import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import "./login.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();

  const onButtonClick = () => {
    setUsernameError("");
    setPasswordError("");

    if (!username) {
      setUsernameError("Please enter your username");
      return;
    }

    if (!password) {
      setPasswordError("Please enter your password");
      return;
    }

    fetch("https://localhost:5001/api/account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid credentials");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Login successful", data);

        localStorage.setItem("username", data.username);
        login('newToken');
        
        navigate("/posts");
      })
      .catch((error) => {
        console.error("Login failed", error);
        setUsernameError("Invalid credentials");
      });
  };

  return (
     <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Login</div>
      </div>

      <br />

      <div className={"inputContainer"}>
        <input
          value={username}
          placeholder="Enter your username here"
          onChange={(ev) => setUsername(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{userError}</label>
      </div>

      <br />

      <div className={"inputContainer"}>
        <input
          value={password}
          type="password"
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>

      <br />

      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Log in"}
        />
      </div>
    </div>
  );
};

export default Login;
