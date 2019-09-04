import styled from "styled-components";

const Footer = styled.footer`
  background-color: white;
  position: relative;
  z-index: 2;
`;

const Box = styled.div`
  box-sizing: border-box;
  width: 90%;
  padding: 0px 20px;
  margin: 0 auto;
  position: relative;
`;

const Columns = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 460px;
  color: ${props => props.theme.Black};
  ${props => props.theme.largeBreakPoint} {
    max-width: 600px;
  }
  p {
    font-style: italic;
    margin: 0;
    font-size: 16.5px;

    ${props => props.theme.largeBreakPoint} {
      font-size: 24.5px;
    }
  }
  a {
    color: ${props => props.theme.Black};
    text-decoration: none;
  }
  ${props => props.theme.mediumBreakPoint} {
    p {
      font-size: ${props => props.theme.textSize};
    }
  }
  ${props => props.theme.smallBreakPoint} {
    flex-direction: column;
  }
`;
const Green = styled.span`
  color: ${props => props.theme.Green};
  a {
    color: ${props => props.theme.Green};
  }
`;

const Column = styled.div`
  padding: 0 11px;
  flex: 0 1 50%;
`;

const Logo = styled.h2`
  font-size: ${props => props.theme.textLogoBig};
  font-weight: normal;
  line-height: 1.06;
  letter-spacing: normal;
  text-transform: uppercase;
  img {
    max-width: 200px;
  }
  ${props => props.theme.largeBreakPoint} {
    font-size: ${props => props.theme.textLogoBig2x};
  }
`;
const Contact = styled.div`
  text-align: left;
  box-sizing: border-box;
  width: 90%;
  position: relative;
`;

const MessageText = styled.span`
  display: block;
  font-size: 21px;
  font-weight: lighter;
  font-style: italic;
  line-height: normal;
`;

const BlackLine = styled.div`
  background-color: ${props => props.theme.Black};
  font-size: ${props => props.theme.textSmall};
  color: white;
  text-align: center;
  text-transform: uppercase;
  padding: 20px 10px;
  font-family: ${props => props.theme.Assistant};
`;

const CookieLabel = styled.div`
  background-color: rgba(106, 106, 25, 0.8);
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 999;
  box-sizing: border-box;
  opacity: 0;
  visibility: hidden;
  &.open{
    opacity: 1;
    visibility: visible;
  }
  a {
    position: absolute;
    color: white;
    cursor: pointer;
    right: 15px;
    top: 5px;
    font-size: 20px;
    padding: 0 5px;
}
  }
  p {
    max-width: 600px;
    color: white;
    font-size: ${props => props.theme.videoTitleSub};
    margin: 0 auto;
    display: inline-block;
    ${props => props.theme.largeBreakPoint} {
      font-size: ${props => props.theme.videoTitleSub2x};
    }
    ${props => props.theme.smallBreakPoint} {
      font-size: ${props => props.theme.videoTitleSubXs};
    }
  }
`;

export {
  Footer,
  Box,
  Columns,
  Column,
  Logo,
  Contact,
  MessageText,
  Green,
  BlackLine,
  CookieLabel
};
