import styled from "styled-components";

const Wrapper = styled.div`
  color: ${props => props.theme.Black};
  width: 100%;
  overflow: hidden;
`;

const Content = styled.div`
  padding-left: 67px;
  ${props => props.theme.mediumBreakPoint} {
    padding-left: 0;
  }
`;

const SmallContainer = styled.div`
  width: 95%;
  max-width: 750px;
  box-sizing: border-box;
  padding: 40px;
  margin: 0 auto;
  ${props => (props.align ? "text-align:" + props.align : "")};
  ${props => props.theme.largeBreakPoint} {
    max-width: 1300px;
  }
  ${props => props.theme.smallBreakPoint} {
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-size: ${props => props.theme.textTitleGroup};
  font-style: italic;
  font-weight: normal;
  color: ${props => props.theme.Brown};
  margin: 0;
  line-height: 1;
  letter-spacing: -0.4px;
  ${props => props.theme.largeBreakPoint} {
    font-size: ${props => props.theme.textTitleGroup2x};
  }
`;

const SubTitle = styled.h3`
  font-size: ${props => props.theme.textSubTitleGroup};
  font-style: normal;
  font-weight: 200;
  margin: 0;
  line-height: 1;
  letter-spacing: -0.3px;
  font-family: ${props => props.theme.Assistant};
  ${props => props.theme.largeBreakPoint} {
    font-size: ${props => props.theme.textSubTitleGroup2x};
  }
`;

const TitleFooter = styled.p`
  font-size: ${props => props.theme.textFooterTitleGroup};
  font-weight: bold;
  line-height: 1.92;
  margin: 0;
  padding-top: 5px;
  ${props => props.theme.largeBreakPoint} {
    font-size: ${props => props.theme.textFooterTitleGroup2x};
  }
`;

const Button = styled.a`
  border: 1px solid ${props => props.theme.Green};
  color: ${props => props.theme.Green};
  transition: all 0.3s;
  text-align: center;
  width: 100%;
  max-width: 400px;
  font-size: ${props => props.theme.textSmall};
  letter-spacing: 1.4px;
  display: block;
  padding: 12px;
  box-sizing: border-box;
  margin: 30px auto;
  text-transform: uppercase;
  cursor: pointer;
  font-family: ${props => props.theme.Assistant};
  ${props => props.theme.largeBreakPoint} {
    font-size: ${props => props.theme.textSmall2x};
  }
  &:hover,
  &.active {
    background-color: ${props => props.theme.Green};
    color: white;
  }
`;

const ImageFooter = styled.p`
  font-size: 10.5px;
  text-align: right;
  span {
    font-size: 12px;
    color: ${props => props.theme.Green};
  }
  ${props => props.theme.largeBreakPoint} {
    font-size: 16.5px;
    span {
      font-size: 14.5px;
    }
  }
`;

const Paragraph = styled.p`
  font-size: ${props => props.theme.textSize};
  text-align: ${props => (props.align ? props.align : "justify")};
  margin: 0;
  line-height: 1.67;
  letter-spacing: -0.1px;
  ${props => props.theme.largeBreakPoint} {
    font-size: ${props => props.theme.textSize2x};
    letter-spacing: -0.2px;
  }
  ${props => props.theme.mediumBreakPoint} {
    text-align: ${props => (props.align ? "center" : "left")};
  }
`;

const ReadMore = styled(Button)`
  margin-top: 30px;
`;

export {
  Wrapper,
  Content,
  SmallContainer,
  Title,
  SubTitle,
  TitleFooter,
  Button,
  ImageFooter,
  Paragraph,
  ReadMore
};
