import React, { Component } from "react";
import { GalleryWrapp, GalleryItem } from "./index.styled";

class Smallgallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      time: this.props.time || 5000
    };
  }
  componentDidMount() {
    this.changePosition();
  }
  changePosition = () => {
    setTimeout(() => {
      const position =
        this.state.position + 1 < this.props.images.length
          ? this.state.position + 1
          : 0;
      this.setState({ position: position });
      this.changePosition();
    }, this.state.time);
  };
  render() {
    const images = this.props.images.map((img, index) => {
      const visible = index === this.state.position;
      return (
        <GalleryItem key={index} visible={visible} img={img.img} />
      );
    });
    return <GalleryWrapp>{images}</GalleryWrapp>;
  }
}

export default Smallgallery;
