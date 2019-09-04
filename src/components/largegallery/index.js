import React, { Component } from "react";
import GalleryItemComponent from "./image";
import { SectionWrapper } from "../../containers/photos/index.styled";
import {
  GalleryWrapp,
  GalleryScreen,
  GalleryReel,
  Menu,
  MenuScreen,
  MenuReel,
  MenuItem,
  ArrowLeft,
  ArrowRight
} from "./index.styled";
import { Theme } from "../../theme/theme";

class Largegallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      reel: false,
      images: 0,
      fullScreen: "",
      moving: false
    };
  }
  componentDidMount() {
    const reel = document.getElementById("largeGalReel");
    const sidebar =
      this.props.widthNumber >= 1400
        ? Theme.SidebarWidth2x
        : this.props.widthNumber < 750
        ? 0
        : Theme.SidebarWidth;
    const itemWidth = this.props.widthNumber - sidebar;
    //let images = 0;
    const images = this.props.images.reduce((val, section, i) => {
      return val + section.images.length;
    }, 0);
    this.setState({
      reel: reel,
      itemWidth: itemWidth,
      images: images
    });
  }
  moveMenu(direction) {
    if (this.state.moving === true) return;
    let current = this.state.current + direction;
    if (current < 0) current = this.state.images.length - 1;
    if (current >= this.state.images.length) current = 0;

    const start = this.props.images.reduce((val, item) => {
      val =
        current >= item.start && current < item.start + item.images.length
          ? item.start + item.images.length
          : val;
      return val;
    }, 0);

    this.setState({ current: start });
    this.scrollTo(start);
  }
  scrollTo = index => {
    if (this.state.moving === true) return;
    this.setState({ moving: true });
    if (index < 0) index = this.state.images - 1;
    if (index >= this.state.images) index = 0;
    const sidebar = this.props.widthNumber < 750 ? 0 : Theme.SidebarWidth;
    const itemWidth = this.props.widthNumber - sidebar - 0;
    const reel = this.state.reel;
    const left = itemWidth * index;
    //console.log("scroll", left, reel);
    this.setState({ current: index });
    reel.scroll({ top: 0, left: left, behavior: "smooth" });
    if (this.props.widthNumber <= 750) {
      const menu = document.getElementById("largeMenuReel");
      const menuIndex = this.props.images.reduce((val, section, menuIndex) => {
        val =
          index >= section.start &&
          index < section.start + section.images.length
            ? menuIndex
            : val;
        return val;
      }, 0);
      const leftMenu = menu.offsetWidth * menuIndex;
      menu.scroll({ top: 0, left: leftMenu, behavior: "smooth" });
      this.activeArrows();
    } else {
      const menuIndex = this.props.images.reduce((val, section, menuIndex) => {
        val =
          index >= section.start &&
          index < section.start + section.images.length
            ? menuIndex
            : val;
        return val;
      }, 0);
      const menu = document.getElementById("largeMenuReel");
      const items = menu.querySelectorAll(".menu-item");
      menu.scroll({
        top: 0,
        left: menuIndex >= 4 ? items[items.length - 1].offsetLeft : 0,
        behavior: "smooth"
      });
      this.activeArrows();
    }
  };
  activeArrows = () => {
    setTimeout(() => {
      this.setState({ moving: false });
    }, 500);
  };
  render() {
    const h = { height: this.props.height - 120 + "px" };
    const sidebar = this.props.widthNumber < 750 ? 0 : Theme.SidebarWidth;
    const itemWidth = this.props.widthNumber - sidebar - 0;
    let items = 0;
    const images = this.props.images.map((section, i) => {
      items += section.images.length;
      return section.images.map((img, index) => {
        return (
          <GalleryItemComponent
            style={{ ...h, width: itemWidth + "px" }}
            lang={this.props.lang}
            h={h}
            img={img}
            key={section.start + index}
            start={section.start + index}
          />
        );
      });
    });
    const reelW = (this.props.widthNumber - sidebar) * items;
    const menuItems = this.props.images.map((section, index) => {
      return (
        <MenuItem
          className={
            (this.state.current >= section.start &&
            this.state.current < section.start + section.images.length
              ? "active"
              : "") + " menu-item"
          }
          key={index}
          onClick={() => this.scrollTo(section.start)}
        >
          {this.props.lang === "es" ? section.sectionEs : section.sectionEn}
        </MenuItem>
      );
    });
    return (
      <SectionWrapper id="photos" className={this.state.fullScreen}>
        <Menu>
          <ArrowLeft onClick={() => this.moveMenu(-1)}>
            <i className="icon-left" />
          </ArrowLeft>
          <ArrowRight onClick={() => this.moveMenu(1)}>
            <i className="icon-right" />
          </ArrowRight>
          <MenuScreen id="largeMenuReel">
            <MenuReel>{menuItems}</MenuReel>
          </MenuScreen>
        </Menu>
        <GalleryWrapp style={h}>
          <ArrowLeft onClick={() => this.scrollTo(this.state.current - 1)}>
            <i className="icon-left" />
          </ArrowLeft>
          <ArrowRight onClick={() => this.scrollTo(this.state.current + 1)}>
            <i className="icon-right" />
          </ArrowRight>
          <GalleryScreen
            style={h}
            id="largeGalReel"
            className={this.state.fullScreen}
          >
            <GalleryReel style={{ ...h, width: reelW + "px" }}>
              {images}
            </GalleryReel>
          </GalleryScreen>
        </GalleryWrapp>
      </SectionWrapper>
    );
  }
}

export default Largegallery;
