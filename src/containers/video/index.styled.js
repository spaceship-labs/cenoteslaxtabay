import styled from "styled-components";
import img2 from "../../theme/img/LOCHE_24.JPG";

const VideoWrapper = styled.div`
  min-height: 300px;
  background-color: ${props => props.theme.Green};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  box-sizing: border-box;
  background-image: url(${img2});
  background-size: cover;
  position: relative;
  & * {
    position: relative;
    z-index: 1;
  }
  &:after {
    content: "";
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.DarkBlue};
    opacity: 0.5;
  }
  ${props => props.theme.mediumBreakPoint} {
    justify-content: center;
  }
`;

const VideoTitle = styled.h2`
  font-size: ${props => props.theme.videoTitleSub};
  font-weight: normal;
  font-style: normal;
  align-self: flex-start;
  color: white;
  font-family: ${props => props.theme.Assistant};
  font-weight: 200;
  width: 100%;
  span {
    font-size: ${props => props.theme.videoTitle};
    width: 100%;
    display: block;
    font-style: italic;
    font-family: ${props => props.theme.Playfair};
  }
  ${props => props.theme.largeBreakPoint} {
    span {
      font-size: ${props => props.theme.videoTitle2x};
    }
    font-size: ${props => props.theme.videoTitleSub2x};
  }
  ${props => props.theme.smallBreakPoint} {
    span {
      font-size: ${props => props.theme.videoTitleXs};
    }
    font-size: ${props => props.theme.videoTitleSubXs};
  }
`;

const Logo = styled.div`
  width: 200px;

  padding: 25px;
  img {
    width: 100%;
  }
  ${props => props.theme.largeBreakPoint} {
    width: 250px;
  }
  ${props => props.theme.mediumBreakPoint} {
    background-color: ${props => props.theme.Brown};
    text-align: center;
    width: 100%;
    top: 0;
    padding: 10px;
    position: absolute;
    box-sizing: border-box;
    position: fixed;
    z-index: 888;
    img {
      max-width: 110px;
    }
  }
`;

const Button = styled.a`
  display: block;
  width: 300px;
  color: white;
  font-size: 14px;
  font-family: ${props => props.theme.Assistant};
  text-align: center;
  background-color: ${props => props.theme.Green};
  border: 1px solid ${props => props.theme.Green};
  padding: 10px;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: ${props => props.theme.Green};
  }
  max-width: 90%;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  ${props => (props.wrap ? "flex-wrap: wrap;" : "")}
  @media only screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

const Row = styled.div`
  flex: ${props => (props.width ? "0 1 " + props.width : "1 0 auto")};
  ${props => (props.shrink ? "flex: 0 1 auto;" : "")}
  flex-direction: column;
  max-width: 100%;
  max-width: ${props => (props.width ? props.width : "100%")};
  @media only screen and (max-width: 780px) {
    flex: 1 0 auto;
    max-width: 100%;
  }
`;

const BookWrapper = styled.div`
  padding: 30px 0;
  min-width: 400px;
  ${props => props.theme.smallBreakPoint} {
    min-width: 100%;
  }
`;

export { VideoWrapper, VideoTitle, Logo, Button, Rows, Row, BookWrapper };
