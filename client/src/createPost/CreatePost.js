import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const CreatePost = props => {
  const [goHome, setGoHome] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onSubmit = async e => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      await axios({
        method: "post",
        url: "/posts",
        data: { title, text },
        config
      });
      setGoHome(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {goHome ? (
        <Redirect to="/" />
      ) : (
        <form onSubmit={e => onSubmit(e)}>
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            name="title"
            onChange={e => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Text"
            value={text}
            name="text"
            onChange={e => setText(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default CreatePost;
