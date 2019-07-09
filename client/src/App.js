import React, { useState, useEffect } from "react";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import Post from "./post/Post";
import Blog from "./blog/Blog";
import CreatePost from "./createPost/CreatePost";
import EditPost from "./editPost/EditPost";
import Login from "./auth/Login";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";
import { useTheme } from "./theme/ThemeContext";
import Wrapper from "./theme/ThemeWrapper";
import { Global, css } from "@emotion/core";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const themeState = useTheme();

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      setLoggedIn(true);
    }
  }, []);

  return (
    <Wrapper>
      <Router>
        <Route
          exact
          path="/"
          render={() => <Blog loggedIn={loggedIn} themeState={themeState} />}
        />
        <Route
          exact
          path="/login"
          render={props => (
            <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} {...props} />
          )}
        />
        <Route
          exact
          path="/createPost"
          render={props =>
            !loggedIn ? (
              <Redirect to="/" />
            ) : (
              <CreatePost loggedIn={loggedIn} {...props} />
            )
          }
        />
        <Route
          exact
          path="/posts/:postId"
          render={props => (
            <Post loggedIn={loggedIn} {...props} themeState={themeState} />
          )}
        />
        <Route
          exact
          path="/editPost/:postId"
          render={props =>
            !loggedIn ? (
              <Redirect to="/" />
            ) : (
              <EditPost loggedIn={loggedIn} {...props} />
            )
          }
        />
      </Router>
    </Wrapper>
  );
};

export default App;
