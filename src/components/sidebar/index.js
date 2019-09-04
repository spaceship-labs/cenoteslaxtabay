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
    const scrollTo = section => {
      this.toggleMenu();
      const top = section.top;
      window.scroll({ top: top, let: 0, behavior: "smooth" });
    };
    const Sections = {
      thevideo: this.props.lang === "es" ? "Bienvenido" : "Welcome",
      home: this.props.lang === "es" ? "Bienvenido" : "Welcome",
      photos: this.props.lang === "es" ? "Galerías" : "Gallery",
      location: this.props.lang === "es" ? "Ubicación" : "Location",
      amenities: this.props.lang === "es" ? "Experiencias" : "Experiences",
      about: this.props.lang === "es" ? "Acerca de nosotros" : "About us",
      contact: this.props.lang === "es" ? "Contacto" : "Contact us"
    };
    const getText = id => {
      return Sections[id] || "Welcome";
    };
    const section = Object.keys(this.props.sections).reduce(
      (result, key) => {
        const item = this.props.sections[key];
        if (
          this.props.scroll > item.top &&
          this.props.scroll < this.props.scroll + item.height
        )
          result = getText(key);
        return result;
      },
      this.props.lang === "es" ? "Bienvenido" : "Welcome"
    );
    const menuItems = Object.keys(this.props.sections).map((key, index) => {
      const section = this.props.sections[key];
      return (
        <li key={index}>
          <a onClick={e => scrollTo(section)}>{section.section.title}</a>
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
              <a href="/es">ESP</a> <span>|</span> <a href="/">ENG</a>
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
