import styled from "styled-components";
import img3 from "../../theme/LOCHE-48.jpg";

import { SubTitle } from "../../theme/App.styled";

const Welcome = styled.div`
  padding: 50px 0;
`;

const TitleFooter = styled.p`
  font-size: ${props => props.theme.textSize};
  font-weight: bold;
  line-height: 1.92;
  margin: 0;
  padding-top: 5px;
`;

const PTitle = styled.p`
  font-size: 20px;
  font-family: ${props => props.theme.Assistant};
  ${props => props.theme.largeBreakPoint} {
    font-size: 30px;
  }
`;

const ImageWithBox = styled.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  max-height: 800px;
  background-image: url(${img3});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  ${props => props.theme.mediumBreakPoint} {
    width: 100%;
    align-self: flex-end;
    height: 300px !important;
  }
`;

const Box = styled.div`
  background-color: white;
  width: 550px;
  margin: 0;
  padding: 35px 75px 35px 35px;
  box-sizing: border-box;
  position: absolute;
  left: 25px;
  top: 35px;
  z-index: 2;
  h3 {
    font-size: ${props => props.theme.TextBoxTitle};
    color: ${props => props.theme.Brown};
    font-weight: normal;
    font-style: italic;
    margin: 0;
    margin-bottom: 30px;
    position: relative;
    span {
      color: ${props => props.theme.Green};
      display: block;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: -14px;
      width: 110px;
      height: 1px;
      background-color: ${props => props.theme.Gold};
      right: -130px;
    }
  }
  ${props => props.theme.largeBreakPoint} {
    width: 550px;
    h3 {
      font-size: ${props => props.theme.TextBoxTitle2x};
    }
  }
  ${props => props.theme.mediumBreakPoint} {
    position: relative;
    width: 90%;
    margin-top: -90px;
    h3:after {
      width: 40%;
      position: relative;
      display: block;
      left: 0;
      bottom: 0;
      right: 0;
      margin: 25px auto 15px;
    }
  }
`;

const Rows = styled.div`
  display: flex;
  position: relative;
  fle-direction: ${props => (props.direction ? props.direction : "row")};
  ${props => props.theme.mediumBreakPoint} {
    flex-direction: column-reverse;
  }
`;

const Row = styled.div`
  flex: ${props => (props.width ? "0 1 " + props.width : "1 0 auto")};
  ${props => (props.width ? "min-width:" + props.width + ";" : "")}
  min-height: 300px;
  img{
      max-width: 100%;
      width: 100%;
  }
  ${props =>
    props.align && props.align === "right"
      ? "padding-right:22px;"
      : "padding-right:22px;"}
  text-align: ${props =>
    props.align && props.align === "right" ? "right" : "left"};
  ${props => props.theme.mediumBreakPoint} {
      text-align: center;
      min-height: 200px;
      margin-top: 25px;
      padding-right: 0;
  }
`;

const TorreWrapp = styled.div`
  padding: 0 ${props => props.theme.pRight} 20px ${props => props.theme.pLeft};
`;

const TorreSubTitle = styled(SubTitle)`
  color: ${props => props.theme.Brown};
  font-family: ${props => props.theme.Playfair};
  font-style: italic;
  position: relative;
  padding-bottom: 40px;
  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 15px;
    width: 110px;
    height: 1px;
    background-color: ${props => props.theme.Green};
    right: -50px;
  }
  ${props => props.theme.mediumBreakPoint} {
    padding-bottom: 0;
    &:after {
      width: 40%;
      position: relative;
      display: block;
      left: 0;
      bottom: 0;
      right: 0;
      margin: 25px auto 45px;
    }
  }
`;

const MessageText = styled.p`
  display: block;
  font-size: 21px;
  font-weight: lighter;
  font-style: italic;
  line-height: normal;
  margin: 15px 0;
  span {
    display: block;
    font-weight: lighter;
    font-size: 16px;
  }
  a {
    color: ${props => props.theme.Black};
    text-decoration: none;
  }
`;

export {
  PTitle,
  TitleFooter,
  ImageWithBox,
  Box,
  Welcome,
  Rows,
  Row,
  TorreWrapp,
  TorreSubTitle,
  MessageText
};
