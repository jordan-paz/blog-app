import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PostThumbnail from "../postThumbnail/PostThumbnail";
import Emoji from "../Emoji";
import { Container, Row, Button, Col } from "react-bootstrap";
import "./Blog.css";

const Blog = ({ loggedIn, themeState }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container id="blog">
      <Row id="blog-title-row">
        <Col xs={9}>
          <h1 id="blog-title">Dev de Paz</h1>
          <p className="info-text">A personal blog by Jordan Paz</p>
        </Col>
        <Col xs={3} id="theme-button-container">
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
          <p id="intro">
            <Emoji symbol="👋" /> {"  "}Welcome to my blog! Glad you could make
            it.
          </p>
        </Col>
      </Row>

      {posts.map(post => (
        <PostThumbnail post={post} key={post._id} loggedIn={loggedIn} />
      ))}
      {loggedIn ? (
        <Row>
          <Col>
            <Link to="/createPost">
              <Button variant="primary" id="new-post-button">
                New Post
              </Button>
            </Link>
          </Col>
        </Row>
      ) : null}
    </Container>
  );
};

export default Blog;
