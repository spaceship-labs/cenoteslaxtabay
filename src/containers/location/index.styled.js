import styled from "styled-components";
import {
  Title,
  SubTitle,
  TitleFooter,
  Paragraph
} from "../../theme/App.styled";

const AmenitiesBg = styled.div`
  background-color: ${props => props.theme.Blue};
  margin-bottom: 200px;
  ${props => props.theme.mediumBreakPoint} {
    margin-bottom: 0;
  }
`;

const AmenitiesTitle = styled(Title)`
  text-align: left;
  color: ${props => props.theme.Black};
`;

const AmenitiesSubTitle = styled(SubTitle)`
  text-align: left;
  color: ${props => props.theme.Black};
`;
const AmenitiesFooter = styled(TitleFooter)``;
const TitleWrapper = styled.div`
  padding-top: 60px;
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  ${props => props.theme.smallBreakPoint} {
    padding-left: 25px;
    padding-right: 25px;
  }
  ${props => props.theme.largeBreakPoint} {
    max-width: 600px;
  }
`;
const Rows = styled.div`
  display: flex;
  min-height: 400px;
  ${props =>
    props.align && props.align === "start" ? "align-items: flex-start;" : ""}
  ${props => props.theme.mediumBreakPoint} {
    flex-direction: column;
  }
`;

const RowImg = styled.div`
  flex: 1 0 auto;
  padding-top: 50px;
  position: relative;
  padding-left: ${props => props.theme.pLeft};
  position: relative;
  z-index: 2;
  margin-bottom: -80px;
  p {
    margin-bottom: -120px;
  }
  iframe {
    width: 100%;
  }
  ${props => props.theme.mediumBreakPoint} {
    width: 100%;
    padding-left: 0;
    margin-bottom: 55px;
    box-sizing: border-box;
    p {
      display: none;
    }
  }
`;

const RowImgW = styled.div`
  width: 103%;
  width: calc(100% + 25px);
  ${props => props.theme.mediumBreakPoint} {
    width: 100%;
  }
`;

const RowBg = styled.div`
  flex: 0 1 450px;
  background-color: white;
  padding: 30px 40px 30px 60px;
  box-sizing: border-box;
  position: relative;
  z-index: 0;
  text-align: justify;
  ${props => props.theme.largeBreakPoint} {
    flex: 0 1 450px;
  }
  ${props => props.theme.mediumBreakPoint} {
    margin: 0 auto;
    position: relative;
    top: -60px;
    max-width: 100%;
    z-index: 2;
  }
`;

const Row = styled.div`
  flex: ${props => (props.width ? "0 1 " + props.width : "1 0 auto")};
  text-align: ${props =>
    props.align && props.align === "center" ? "center" : "left"};
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    max-width: 100%;
    width: 100%;
  }
  ${props => props.theme.mediumBreakPoint} {
    text-align: center;
    p {
      text-align: center;
    }
  }
`;

const AmenitieList = styled.div`
  display: flex;
  min-height: unset;
  justify-content: space-between;

  flex-wrap: wrap;
  width: 100%;
  ${props => props.theme.largeBreakPoint} {
    max-width: 700px;
  }
  ${props => props.theme.mediumBreakPoint} {
    max-width: 100%;
  }
`;

const Amenitie = styled(Row)`
  flex: 0 1 auto;
  padding: 50px 35px;
  box-sizing: border-box;
  width: 25%;
  i {
    font-size: 48px;
    ${props => props.theme.largeBreakPoint} {
      font-size: 58px;
    }
  }
  ${props => props.theme.mediumBreakPoint} {
    padding: 50px 30px;
  }
  ${props => props.theme.smallBreakPoint} {
    padding: 40px 15px;
    width: 50%;
  }
`;

const RowBlue = styled(Row)`
  background-color: ${props => props.theme.Blue};
  flex: ${props => (props.width ? "0 1 " + props.width : "1 0 auto")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  i {
    color: ${props => props.theme.Gold};
  }
  p {
    max-width: 400px;
    ${props => props.theme.largeBreakPoint} {
      max-width: 650px;
    }
  }
`;

const TorreSubTitle = styled(SubTitle)`
  color: ${props => props.theme.Gold};
  font-size: ${props => props.theme.TextBoxTitle};
  font-style: italic;
  font-family: ${props => props.theme.Playfair};
  ${props => props.theme.largeBreakPoint} {
    font-size: ${props => props.theme.TextBoxTitle2x};
  }
`;

const TorreSubTitleDivided = styled(TorreSubTitle)`
  position: relative;
  padding-bottom: 40px;
  &:after {
    content: "";
    position: absolute;
    bottom: 15px;
    width: 110px;
    height: 1px;
    background-color: ${props => props.theme.Gold};
    right: -90px;
  }
  ${props => props.theme.mediumBreakPoint} {
    &:after {
      display: none;
    }
  }
`;

const List = styled.ul`
  list-style: none;
  font-size: ${props => props.theme.textSize};
  padding: 0;
  line-height: 1.67;
  ${Paragraph} {
    position: relative;
    span {
      position: relative;
      margin-left: -11px;
      ${props => props.theme.largeBreakPoint} {
        margin-left: -15px;
      }
    }
  }
`;

const VerticalLine = styled.div`
  position: absolute;
  width: 1px;
  height: 60px;
  left: 0;
  top: -30px;
  background-color: black;
`;

const HorizontalLine = styled.div`
  width: 110px;
  height: 1px;
  background-color: ${props => props.theme.Gold};
  ${props => (props.align === "left" ? "left: -50px;" : "")}
  position: relative;
  margin: 22px 0;
  ${props => props.theme.mediumBreakPoint} {
    display: none;
  }
`;

export {
  AmenitiesBg,
  Rows,
  RowImg,
  RowImgW,
  RowBg,
  Row,
  RowBlue,
  TorreSubTitle,
  TorreSubTitleDivided,
  AmenitieList,
  Amenitie,
  List,
  AmenitiesTitle,
  AmenitiesSubTitle,
  AmenitiesFooter,
  TitleWrapper,
  VerticalLine,
  HorizontalLine
};
