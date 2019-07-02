import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import { Container, Row, Button, Col } from "react-bootstrap";
import "./Post.css";

const Post = ({ match: { params }, loggedIn, themeState }) => {
  const [post, setPost] = useState({ post: {} });

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const url = `/posts/${params.postId}`;
        const res = await axios.get(`${url}`);
        setPost(res.data);
      };
      fetchPost();
    } catch (err) {
      console.error(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container id="post">
      <Row>
        <Col xs={8}>
          <Link to="/">
            <h2 id="blog-link">Dev de Paz</h2>
          </Link>
        </Col>
        <Col xs={4}>
          <Button
            id="theme-toggle"
            variant="dark"
            size="sm"
            onClick={() => themeState.toggle()}
          >
            {themeState.dark ? "Light Mode" : "Dark Mode"}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 id="post-title">{post.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Moment className="info-text" format="MMM DD, YYYY">
            {post.date}
          </Moment>
        </Col>
      </Row>
      <Row>
        <Col>
          <p id="post-text">{post.text}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
