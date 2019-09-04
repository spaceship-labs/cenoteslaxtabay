import styled from "styled-components";
import {
  Title,
  SubTitle,
  TitleFooter,
  Button as ButtonPrimary
} from "../../theme/App.styled";
import img from "../../theme/img/LOCHE_83.JPG";

const Section = styled.section`
  background-color: ${props => props.theme.Brown};
  background-image: url(${img});
  background-size: cover;
  color: white;
  text-align: center;
  padding: 80px 25px 60px;
  position: relative;
  * {
    position: relative;
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.8;
    z-index: 0;
  }
`;

const ContactTitle = styled(Title)`
  color: ${props => props.theme.Green};
`;
const ContactSubTitle = styled(SubTitle)`
  color: white;
`;
const ContactTitleFooter = styled(TitleFooter)`
  color: white;
  font-size: 17px;
  line-height: 50%;
`;

const Message = styled.p`
  position: absolute;
  left: 0;
  font-size: 12px;
  width: 100%;
  text-align: center;
  bottom: 0;
  color: ${props => props.theme.Green};
`;

const Form = styled.form`
  text-align: left;
  display: flex;
  margin: 0 auto;
  max-width: 460px;
  margin-top: 30px;
  position: relative;
  ${props => props.theme.largeBreakPoint} {
    max-width: 600px;
  }
  p {
    margin: 0;
    margin-bottom: 10px;
  }
  label {
    color: ${props => props.theme.Gray};
    text-transform: uppercase;
    font-size: ${props => props.theme.textSmall};
    display: inline-block;
    margin-bottom: 4px;
    font-weight: bold;
    letter-spacing: 1.4px;
    font-family: ${props => props.theme.Assistant};
    ${props => props.theme.largeBreakPoint} {
      font-size: ${props => props.theme.textSmall2x};
    }
  }
  input {
    border: 0 none;
    outline: 0 none;
    width: 100%;
    box-sizing: border-box;
    padding: 8px 10px;
  }
  textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 9px 10px;
    outline: 0 none;
    border: 0 none;
  }
  ${props => props.theme.mediumBreakPoint} {
    flex-direction: column;
  }
`;

const Column = styled.div`
  padding: 0 11px;
  flex: 0 1 50%;
`;

const Button = styled.button`
  border: 1px solid white;
  color: white;
  background-color: transparent;
  text-align: center;
  width: 100%;
  font-size: ${props => props.theme.textSmall};
  letter-spacing: 1.4px;
  display: block;
  padding: 10px;
  box-sizing: border-box;
  margin: 28px 0;
  text-transform: uppercase;
  font-family: ${props => props.theme.Assistant};
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: ${props => props.theme.Green};
  }
  ${props => props.theme.largeBreakPoint} {
    font-size: ${props => props.theme.textSmall2x};
  }
`;

const Background = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props =>
    props.fullwidth === true ? "#000" : props.theme.DarkBlue};
  opacity: ${props => (props.fullwidth === true ? "0.5" : "0.7")};
`;

const ModalContainer = styled.div`
  position: relative;
  transition: all 0.5s;
  top: 50px;
  background-color: ${props =>
    props.fullwidth === true ? "#000" : props.theme.Brown};
  text-align: center;
  border: 3px solid ${props => props.theme.Green};
  ${props => (props.fullwidth === true ? "border: 0 none;" : "")}
  padding: ${props => (props.fullwidth === true ? "25px" : "50px")} ${props =>
  props.fullwidth === true ? "0px" : "30px"};
  max-height: 99%;
  box-sizing: border-box;
  ${props => props.theme.smallBreakPoint} {
    padding: 20px ${props => (props.fullwidth === true ? "0px" : "20px")};
  }

`;

const ModalWrapp = styled.div`
  flex: 0 1 auto;
  position: relative;
  z-index: 1;
  width: ${props => (props.fullwidth === true ? "90%" : "650px")};
  max-width: ${props => (props.fullwidth === true ? "1200px" : "95%")};
  max-height: 99%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  box-sizing: border-box;
  video {
    width: 100%;
    max-height: ${props => props.theme.heightNumber - 70}px;
    display: block;
  }
  ${props => props.theme.largeBreakPoint} {
    max-width: ${props => (props.fullwidth === true ? "1250px" : "95%")};
  }
  ${props => props.theme.mediumBreakPoint} {
    width: 100%;
    max-width: ${props => (props.fullwidth === true ? "99%" : "95%")};
    ${ModalContainer} {
      padding: 25px ${props => (props.fullwidth === true ? "0px" : "25px")};
    }
  }
  ${props => props.theme.smallBreakPoint} {
    ${ModalContainer} {
      padding: ${props =>
        props.fullwidth === true ? "25px 0 20px 0" : "25px 0"};
    }
  }
`;

const Modal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  visibility: hidden;
  opacity: 0;
  &.open {
    visibility: visible;
    opacity: 1;
    ${ModalContainer} {
      top: 0;
    }
  }
`;

const Close = styled.span`
  font-family: ${props => props.theme.Assistant};
  font-size: 35px;
  line-height: 11px;
  cursor: pointer;
  background-color: transparent;
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  color: ${props => props.theme.Green};
  ${props => props.theme.mediumBreakPoint} {
    padding: 5px;
  }
`;

const Videos = styled.div`
  padding: 10px 10px;
  text-align: left;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 10;
  ${ButtonPrimary} {
    width: 100px;
    margin: 0;
    margin-right: 10px;
    display: inline-block;
    padding: 6px 12px;
  }
  ${props => props.theme.smallBreakPoint} {
    top: 0;
    left: 0;
    right: auto;
    bottom: auto;
  }
`;

const LinkStyle = styled.a`
  text-decoration: none;
  color: white;
`;

const MessageText = styled.p`
  display: block;
  font-size: 21px;
  font-weight: lighter;
  font-style: italic;
  line-height: normal;
  margin: 15px 0;
`;

const EmailText = styled.p`
  display: block;
  font-weight: lighter;
  font-size: 16px;
`;

const Rows = styled.div`
  display: flex;
  justify-content: center;
`;

const Row = styled.div`
  flex: 0 1 auto;
  a {
    color: white;
    text-decoration: none;
    font-size: 25px;
    margin: 10px;
  }
`;

export {
  Section,
  ContactTitle,
  ContactSubTitle,
  ContactTitleFooter,
  Form,
  Column,
  Button,
  Message,
  Modal,
  Background,
  ModalWrapp,
  ModalContainer,
  Close,
  Videos,
  LinkStyle,
  MessageText,
  EmailText,
  Rows,
  Row
};
