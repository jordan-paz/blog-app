import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import "./CreatePost.css";

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
        <Container id="new-post-form">
          <h1>New Post</h1>
          <Form onSubmit={e => onSubmit(e)}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Blog Title"
                value={title}
                name="title"
                onChange={e => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                as="textarea"
                rows="10"
                placeholder="Text"
                value={text}
                name="text"
                onChange={e => setText(e.target.value)}
              />
            </Form.Group>

            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      )}
    </div>
  );
};

export default CreatePost;
