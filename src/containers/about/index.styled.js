import styled from "styled-components";
import { Title } from "../../theme/App.styled";

const AboutTitle = styled(Title)`
  text-align: left;
  font-size: ${props => props.theme.TextBoxTitle};
  b {
    color: ${props => props.theme.Green};
    margin-left: 20px;
  }
  ${props => props.theme.largeBreakPoint} {
    font-size: ${props => props.theme.TextBoxTitle2x};
  }
`;

const Rows = styled.div`
  display: flex;
  min-height: 400px;
  align-items: flex-start;
  padding-right: ${props => props.theme.pRight};
  ${props => props.theme.mediumBreakPoint} {
    flex-direction: column;
    padding-right: ${props => props.theme.pLeft};
  }
`;

const RowImg = styled.div`
  flex: 1 0 auto;
  padding-top: 70px;
  ${props => props.theme.mediumBreakPoint} {
    padding-top: 0;
    width: 100%;
  }
`;

const RowBg = styled.div`
  flex: 0 1 45%;
  background-color: ${props => props.theme.Box};
  padding: 60px 60px 30px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  ${props => props.theme.largeBreakPoint} {
    flex: 0 1 50%;
    max-width: 710px;
  }
  ${props => props.theme.mediumBreakPoint} {
    padding: 50px 60px 20px;
    max-width: 100%;
  }
`;

const GalleryWrapp = styled.div`
  position: relative;
  z-index: 0;
  width: 115%;
  img {
    width: 100%;
  }
  ${props => props.theme.mediumBreakPoint} {
    width: 100%;
    left: 0;
  }
`;

const Division = styled.hr`
  max-width: 110px;
  margin: 30px 0;
  border-top: 1px solid ${props => props.theme.Gold};
  border-bottom: 0;
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

export { Rows, RowBg, RowImg, GalleryWrapp, AboutTitle, Division, MessageText };
