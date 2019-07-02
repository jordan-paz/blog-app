import styled from "@emotion/styled";

const Wrapper = styled("div")`
  transition: 0.3s ease;
  background: ${props => props.theme.background};
  height: 100%;
  width: 100vw;
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;

  h1 {
    font-family: "DM Serif Display", serif;
    font-size: 3.23rem;
    color: ${props => props.theme.titleColor};
  }

  h2 {
    font-family: "DM Serif Display", serif;
    font-size: 2.5rem;
    color: ${props => props.theme.titleColor};
  }
  p {
    font-family: "Roboto", sans-serif;
    color: ${props => props.theme.textColor};
  }

  .info-text {
    font-size: 0.9rem;
    color: ${props => props.theme.infoTextColor};
  }
  a {
    color: ${props => props.theme.postTitleColor};
  }

  #blog-link {
    color: ${props => props.theme.infoTextColor};
    font-size: 1.8rem;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.oppositeBackground};
  }

  #post-text {
    font-size: 1rem;
  }

  #post-title {
    font-size: 3.5rem;
  }

  .post-thumbnail-title {
    text-decoration: underline;
  }

  .post-thumbnail-title:hover {
    color: #ff9999;
    text-decoration-color: #ffffff;
  }

  button {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.infoTextColor};
    border-color: ${props => props.theme.infoTextColor};
  }

  button:hover {
    background-color: ${props => props.theme.oppositeBackground};
    color: ${props => props.theme.infoTextColor};
  }

  button:focus {
    box-shadow: none !important;
    outline: none !important;
  }
`;

export default Wrapper;
