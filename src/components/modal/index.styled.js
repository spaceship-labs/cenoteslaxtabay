import styled from "styled-components";

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
  background-color: white;
  text-align: center;
  border: 3px solid ${props => props.theme.Green};
  ${props => (props.fullwidth === true ? "border: 0 none;" : "")}
  padding: ${props => (props.fullwidth === true ? "25px" : "50px")} ${props =>
  props.fullwidth === true ? "0px" : "30px"};
  max-height: 90%;
  box-sizing: border-box;
  h2{
      color: ${props => props.theme.Green};
      font-size: 28px;
      text-transform: uppercase;
  }
  h3{
      font-size: 24px;
      text-align: left;
  }
  h4{
    font-size: 18px;
    text-align: left;
    margin-bottom: 0;
    }
  p{
      margin-bottom: 10px;
      font-size: 18px;
  }
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
  max-height: 90%;
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

export { Modal, ModalContainer, ModalWrapp, Close, Background };
