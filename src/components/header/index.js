import React, { Component } from "react";
import {
  Header,
  MenuWrapp,
  Menu,
  MenuItem,
  MenuItemLogo,
  FullMenuWrap,
  FullMenu,
  Lang
} from "./index.styled";
import logo from "../../theme/logo.png";
import esp from "../../theme/images/esp.jpg";
import eng from "../../theme/images/eng.jpg";

class HeaderComponent extends Component {
  render() {
    const scrollTo = section => {
      const top = section.top;
      window.scroll({ top: top, let: 0, behavior: "smooth" });
    };
    const allSections = this.props.sections;
    const menuItemsFull = Object.keys(allSections).map((key, index) => {
      const section = allSections[key];
      const item = section.section;
      return (
        <MenuItem key={index} onClick={e => scrollTo(section)}>
          {item.title}
        </MenuItem>
      );
    });
    return (
      <Header>
        <div />
        <Lang isLangVisible={this.props.isLangVisible}>
          <a href="/es">
            <img alt="Español" src={esp} />
            <span>ESP</span>
          </a>
          <a href="/">
            <img alt="English" src={eng} />
            <span>ENG</span>
          </a>
        </Lang>
        <MenuWrapp>
          <Menu>{menuItemsFull}</Menu>
        </MenuWrapp>
        <FullMenuWrap isFullVisible={this.props.isFullVisible}>
          <FullMenu>
            <MenuItemLogo onClick={e => scrollTo(allSections["home"])}>
              <img alt="La Xtabay" src={logo} />
            </MenuItemLogo>
            {menuItemsFull}
          </FullMenu>
        </FullMenuWrap>
      </Header>
    );
  }
}

export default HeaderComponent;
