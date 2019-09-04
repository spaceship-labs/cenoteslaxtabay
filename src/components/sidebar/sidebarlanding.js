import React, { Component } from "react";
import {
  SidebarWrapper,
  SidebarContent,
  SidebarSection,
  SidebarMenuWrapp,
  SideMenu,
  Lang
} from "./index.styled";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { menu: false };
  }
  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }
  openVideo = val => {
    this.toggleMenu();
    this.props.openVideo(val);
  };
  render() {
    const section = this.props.lang === "es" ? "Bienvenido" : "Welcome";
    const menuItems = Object.keys(this.props.sections).map((key, index) => {
      const section = this.props.sections[key];
      const url = `/${this.props.lang === "es" ? "es" : ""}#${
        section.section.link
      }`;
      return (
        <li key={index}>
          <a href={url}>{section.section.title}</a>
        </li>
      );
    });
    return (
      <SidebarWrapper className={this.state.menu ? "open" : ""}>
        <SideMenu
          onClick={() => this.toggleMenu()}
          className={this.state.menu ? "open" : ""}
        >
          <i className="" />
        </SideMenu>
        <SidebarContent className={this.state.menu ? "open" : ""}>
          <SidebarMenuWrapp className={this.state.menu ? "open" : ""}>
            <ul>{menuItems}</ul>
            <Lang>
              <a href="/es/reserva">ESP</a> <span>|</span>{" "}
              <a href="/book">ENG</a>
            </Lang>
            <p>
              <a href="mailto:cenotelaxtabay@gmail.com">
                cenotelaxtabay@gmail.com
              </a>
            </p>
            <p>
              <a href="mailto:contacto@cenotelaxtabay.com">
                contacto@cenotelaxtabay.com
              </a>
            </p>
            <p>
              <a href="tel:+52 998 842 06 11">
                +52 998 842 06 11 <i className="icon-whatsapp" />
              </a>
            </p>
          </SidebarMenuWrapp>
          <SidebarSection>
            <p>{section}</p>
            <i className="icon-arrow" />
          </SidebarSection>
        </SidebarContent>
      </SidebarWrapper>
    );
  }
}

export default Sidebar;
