import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import "./EditPost.css";

const EditPost = ({ match: { params } }) => {
  const [goToPost, setGoToPost] = useState(false);
  const [goToBlog, setGoToBlog] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const url = `/posts/${params.postId}`;
        const res = await axios.get(`${url}`);
        console.log(res.data);
        setTitle(res.data.title);
        setText(res.data.text);
      };
      fetchPost();
    } catch (err) {
      console.error(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deletePost = async postId => {
    try {
      setTitle("");
      setText("");
      await axios.delete(`/posts/${postId}`);
      setGoToBlog(true);
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const url = `/posts/${params.postId}`;
    try {
      await axios({
        method: "put",
        url,
        data: { title, text },
        config
      });
      setGoToPost(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {goToPost ? (
        <Redirect to={`/posts/${params.postId}`} />
      ) : goToBlog ? (
        <Redirect to="/" />
      ) : (
        <Container id="edit-post-form">
          <h1>Edit Post</h1>
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
            <Button
              type="button"
              id=""
              onClick={() => deletePost(params.postId)}
            >
              Delete
            </Button>
          </Form>
        </Container>
      )}
    </div>
  );
};

export default EditPost;
