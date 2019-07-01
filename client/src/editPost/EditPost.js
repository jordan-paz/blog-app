import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

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
          <button type="button" onClick={() => deletePost(params.postId)}>
            Delete
          </button>
        </form>
      )}
    </div>
  );
};

export default EditPost;
