import styled from "styled-components";

const GalleryWrapp = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 550px;
  ${props => props.theme.mediumBreakPoint} {
    min-height: 400px;
  }
  ${props => props.theme.smallBreakPoint} {
    min-height: 200px;
  }
  ${props => props.theme.largeBreakPoint} {
    min-height: 750px;
  }
`;

const GalleryItem = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.visible === true ? 1 : 0)};
  visibility: ${props => (props.visible === true ? "visible" : "hidden")};
  transition: all 1s;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center center;
  p{
    position: absolute;
    width: 100%;
    padding: 5px 15px;
    bottom: -30px;
    margin-bottom: 0!important;
    margin: 0;
    box-sizing: border-box;
    font-size: 10.5px;
    text-align: right;
    span {
      font-size: 12px;
      color: ${props => props.theme.Gold};
    }
    ${props => props.theme.largeBreakPoint} {
      font-size: 16.5px;
      span {
        font-size: 14.5px;
      }
  }
`;

export { GalleryWrapp, GalleryItem };
