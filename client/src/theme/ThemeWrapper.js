import styled from "@emotion/styled";

const Wrapper = styled("div")`
  transition: 0.3s ease;
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;

  h1 {
    font-family: "DM Serif Display", serif;
    font-size: 3.5rem;
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

  .post-thumbnail-text {
    font-size: 1rem;
  }

  .info-text {
    font-size: 1.2rem;
    color: ${props => props.theme.infoTextColor};
  }
  a {
    color: ${props => props.theme.postTitleColor};
  }

  #blog-link {
    color: ${props => props.theme.infoTextColor};
  }

  #post-text {
    font-size: 1rem;
  }

  #post-title {
    font-size: 3rem;
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
