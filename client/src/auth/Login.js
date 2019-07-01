import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Login = ({ loggedIn, setLoggedIn, theme }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [goToBlog, setGoToBlog] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();

    // Send post request to /login with email & pw
    const response = await axios({
      method: "post",
      url: "/login",
      data: { email, password },
      config: {
        headers: {
          "Content-Type": "application/json"
        }
      }
    });

    const token = response.data.token;
    if (token) {
      localStorage.setItem("token", token);
      setLoggedIn(true);
      setGoToBlog(true);
    }
  };

  return (
    <div>
      {goToBlog ? (
        <Redirect to="/" />
      ) : (
        <form onSubmit={onSubmit}>
          <input
            type="email"
            value={email}
            name="email"
            placeholder="email"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
          />
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Login;
