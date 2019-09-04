import React, { Component } from "react";
import {
  Header,
  MenuItem,
  MenuItemLogo,
  FullMenuWrap,
  FullMenu,
} from "./index.styled";
import logo from "../../theme/logo.png";

class HeaderComponent extends Component {
  render() {
    const allSections = this.props.sections;
    const menuItemsFull = Object.keys(allSections).map((key, index) => {
      const section = allSections[key];
      const item = section.section;
      const url = `/${this.props.lang === "es" ? "es" : ""}#${item.link}`;
      return (
        <MenuItem key={index} href={url}>
          {item.title}
        </MenuItem>
      );
    });
    return (
      <Header>
        <FullMenuWrap isFullVisible={this.props.isFullVisible}>
          <FullMenu>
            <MenuItemLogo href="/">
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
