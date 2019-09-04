import styled from "styled-components";
import { Logo } from "../../containers/footer/index.styled";

const speed = "0.5s";
const curve = "transition-timing-function: ease;";

const SidebarWrapper = styled.div`
  width: ${props => props.theme.SidebarWidth}px;
  color: ${props => props.theme.Green};
  position: fixed;
  height: 100%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  transition: all ${speed};
  ${curve}
  &.open {
    width: 350px;
  }
  ${props => props.theme.mediumBreakPoint} {
    left: -${props => props.theme.SidebarWidth}px;
  }
`;

const SidebarSection = styled.div`
  position: absolute;
  width: 20px;
  top: 50%;
  right: 22px;
  text-align: center;
  transition: all ${speed};
  p {
    transform: rotate(-90deg);
    transform-origin: left top 0;
    font-family: ${props => props.theme.Assistant};
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1.4px;
    white-space: nowrap;
  }
  i {
    font-size: 40px;
    position: relative;
    left: -11px;
  }
  ${props => props.theme.largeBreakPoint} {
    right: 28px;
    p {
      font-size: 20px;
    }
    i {
      font-size: 50px;
    }
  }
  ${props => props.theme.mediumBreakPoint} {
    display: none;
  }
`;

const SidebarContent = styled.div`
  flex: 1 0 auto;
  background-color: ${props => props.theme.Sidebar};
  width: ${props => props.theme.SidebarWidth}px;
  transition: width ${speed};
  ${curve}
  ${props => props.theme.mediumBreakPoint} {
    width: 0px;
  }
  &.open {
    width: 350px;
    ${SidebarSection} {
      right: -10px;
      opacity: 0;
    }
    ${props => props.theme.mediumBreakPoint} {
      padding-left: ${props => props.theme.SidebarWidth}px;
    }
  }
`;

const SidebarMenuWrapp = styled.div`
  width: 0px;
  overflow: hidden;
  transition: all ${speed};
  ${curve}
  position: relative;
  left: -350px;
  ul {
    list-style: none;
    padding: 0 30px;
    li a {
      width: 350px;
      cursor: pointer;
      color: ${props => props.theme.Black};
      font-size: ${props => props.theme.SidebarItems}px;
      font-family: ${props => props.theme.Assistant};
      font-weight: 200;
      text-decoration: none;
      line-height: 1.51;
      letter-spacing: -0.4px;
      display: block;
      ${props => props.theme.mediumBreakPoint} {
        font-size: ${props => props.theme.SidebarItemsSmall}px;
      }
    }
  }
  p {
    padding: 0 30px;
    font-size: 16.5px;
    font-weight: normal;
    font-style: italic;
    font-stretch: normal;
    line-height: 1.44;
    margin: 0;
    a {
      color: ${props => props.theme.Black};
      text-decoration: none;
    }
  }
  &.open {
    width: 350px;
    left: 0;
  }
  ${props => props.theme.mediumBreakPoint} {
    p {
      font-size: ${props => props.theme.textSize};
    }
  }
`;

const SideMenu = styled.div`
  text-align: left;
  padding: 20px 22px;
  cursor: pointer;
  height: 62px;
  background-color: ${props => props.theme.Sidebar};
  box-sizing: border-box;
  i {
    font-size: 20px;
    display: block;
    top: 10px;
    width: 15px;
    height: 0px;
    border-bottom: 3px solid ${props => props.theme.Brown};
    position: relative;
    border-radius: 10px;
    transition: all 0.2s;
    &:before {
      content: "";
      position: absolute;
      top: -8px;
      left: 0;
      width: 25px;
      border-top: 3px solid ${props => props.theme.Brown};
      border-radius: 10px;
      transition: all 0.5s;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: -11px;
      left: 0;
      width: 25px;
      border-top: 3px solid ${props => props.theme.Brown};
      border-radius: 10px;
      transition: all 0.5s;
    }
  }
  &.open {
    i {
      width: 0;
      &:before {
        transform: rotate(45deg);
        transform-origin: left top 0;
        left: 2px;
      }
      &:after {
        transform: rotate(-45deg);
        transform-origin: left top 0;
        bottom: -13px;
      }
    }
  }
  ${props => props.theme.mediumBreakPoint} {
    left: ${props => props.theme.SidebarWidth}px;
    position: relative;
  }
`;

const LogoSidebar = styled(Logo)`
  padding: 0 30px;
  color: ${props => props.theme.Black};
  text-align: center;
  width: 120px;
  text-transform: uppercase;
  span {
    text-transform: capitalize;
  }
  ${props => props.theme.largeBreakPoint} {
    width: 230px;
  }
`;

const Lang = styled.div`
  font-size: ${props => props.theme.SidebarItemsSmall}px;
  text-transform: uppercase;
  font-family: ${props => props.theme.Assistant};
  letter-spacing: 7.3px;
  font-weight: bold;
  color: ${props => props.theme.Black};
  padding: 0 30px 40px;
  a {
    text-decoration: none;
    color: ${props => props.theme.Black};
  }
  span {
    margin: 0 5px;
  }
  ${props => props.theme.mediumBreakPoint} {
    font-size: ${props => props.theme.SidebarItemsSmall - 5}px;
  }
`;

export {
  SidebarWrapper,
  SidebarContent,
  SidebarMenuWrapp,
  SideMenu,
  SidebarSection,
  LogoSidebar,
  Lang
};
