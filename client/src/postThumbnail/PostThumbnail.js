import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { Row, Col, Button } from "react-bootstrap";
import "./PostThumbnail.css";

const PostThumbnail = ({
  post: { title, text, _id, date },
  loggedIn,
  theme
}) => {
  return (
    <Row className="post-thumbnail">
      <Col>
        <Row>
          <Col xs={10}>
            <Link to={`/posts/${_id}`}>
              <h2 className="post-thumbnail-title">{title}</h2>
            </Link>{" "}
          </Col>
          <Col xs={2} className="edit-post-button-container">
            {loggedIn ? (
              <Link to={`/editPost/${_id}`}>
                <Button className="edit-post-button">Edit</Button>
              </Link>
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col>
            <Moment className="info-text" format="MMM DD, YYYY">
              {date}
            </Moment>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="post-thumbnail-text">{text}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PostThumbnail;
