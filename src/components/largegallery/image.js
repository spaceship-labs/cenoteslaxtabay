import React, { Component } from "react";
import {
  GalleryItem,
  GalleryItemImage,
  ItemDescription,
  ItemScreen,
  ItemDescriptionHidden
} from "./index.styled";

class GalleryItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  toggle = () => {
    const newState = !this.state.open;
    this.setState({ open: newState });
  };
  render() {
    const openButton = this.props.img.dataEs ? (
      <button onClick={this.toggle} className={this.state.open ? "" : "open"}>
        <i className="icon-right" />
      </button>
    ) : (
      ""
    );
    return (
      <GalleryItem
        style={this.props.style}
        className={this.props.img.vertical}
        start={this.props.start}
        vertical={this.props.img.vertical}
      >
        <GalleryItemImage>
          <span>
            <img
              style={this.props.h}
              src={this.props.img.img}
              alt={this.props.img.title}
            />
          </span>
          <ItemDescription>
            <h2>
              {this.props.img.title} {openButton}
            </h2>
            <ItemScreen>
              <ItemDescriptionHidden className={this.state.open ? "open" : ""}>
                {this.props.lang === "es"
                  ? this.props.img.dataEs
                  : this.props.img.dataEn}
              </ItemDescriptionHidden>
            </ItemScreen>
          </ItemDescription>
        </GalleryItemImage>
      </GalleryItem>
    );
  }
}

export default GalleryItemComponent;
