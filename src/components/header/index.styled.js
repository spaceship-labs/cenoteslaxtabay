import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  position: relative;
  z-index: 2;
`;

const MenuWrapp = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  ${props => props.theme.mediumBreakPoint} {
    display: none;
  }
`;

const MenuItem = styled.a`
  flex: 1 0 auto;
  color: white;
  font-size: ${props => props.theme.MenuItemSmall};
  font-weight: bold;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 20px 5px;
  font-family: ${props => props.theme.Assistant};
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  &:before {
    content: "";
    position: absolute;
    ${props => (props.percentage ? "width:" + props.percentage + "%" : "")}
    max-width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: white;
    z-index: -1;
  }
  &:hover {
    color: ${props => props.theme.Gold};
  }
  ${props => props.theme.largeBreakPoint} {
    font-size: ${props => props.theme.MenuItemSmall2x};
  }
`;

const Menu = styled.nav`
  width: 70%;
  display: flex;
  ${MenuItem}:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
`;

const MenuItemLogo = styled(MenuItem)`
  background-color: white !important;
  padding: 5px;
  img {
    max-width: 150px;
  }
`;

const FullMenuWrap = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props =>
    props.isFullVisible === true ? props.theme.MenuHeigth : "0"};
  overflow: hidden;
  background-color: ${props => props.theme.Brown};
  transition: height 0.5s;
  ${MenuItem} {
    font-weight: bold;
    color: white;
    ${props => props.theme.largeBreakPoint} {
      padding: 35px 5px;
    }
    &:hover {
      background-color: ${props => props.theme.Green};
    }
  }
  ${props => props.theme.largeBreakPoint} {
    height: ${props =>
      props.isFullVisible === true ? props.theme.MenuHeigth2x : "0"};
  }
  ${props => props.theme.mediumBreakPoint} {
    display: none;
  }
`;

const FullMenu = styled.nav`
  height: ${props => props.theme.MenuHeigth};
  display: flex;
  text-align: center;
  padding-left: ${props => props.theme.SidebarWidth}px;
  ${props => props.theme.mediumBreakPoint} {
  }
  ${MenuItem} {
    font-size: ${props => props.theme.MenuItemFull};
    ${props => props.theme.largeBreakPoint} {
      font-size: ${props => props.theme.MenuItemFull2x};
    }
  }
  ${props => props.theme.largeBreakPoint} {
    height: ${props => props.theme.MenuHeigth2x};
  }
`;

const Lang = styled.div`
  font-size: ${props => props.theme.textSmall};
  text-transform: uppercase;
  font-family: ${props => props.theme.Assistant};
  letter-spacing: 7.3px;
  font-weight: bold;
  color: white;
  position: fixed;
  right: 20px;
  top: 20px;
  a {
    text-decoration: none;
    color: white;
    display: inline-block;
    padding: 0 5px;
  }
  span {
    margin: 5px 0;
    display: block;
  }
  ${props => props.theme.mediumBreakPoint} {
    font-size: ${props => props.theme.textSmall2x};
    top: 85px;
  }
  transition: all 0.2s;
  opacity: ${props => (props.isLangVisible === true ? 1 : 0)};
  visibility: ${props => (props.isLangVisible === true ? "visible" : "hidden")};
`;

export {
  Header,
  MenuWrapp,
  Menu,
  MenuItem,
  MenuItemLogo,
  FullMenuWrap,
  FullMenu,
  Lang
};
