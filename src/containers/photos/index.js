import React, { Component } from "react";
import Largegallery from "../../components/largegallery/index";
import { Rooms, Amenities, Cenotes, Spa, Exterior, Food } from "./data";

class PhotosContainer extends Component {
  componentDidMount() {
    this.props.mount("photos");
  }
  render() {
    const images = [Rooms, Amenities, Cenotes, Spa, Exterior, Food];

    return (
      <Largegallery
        lang={this.props.lang}
        height={this.props.height}
        widthNumber={this.props.widthNumber}
        images={images}
      />
    );
  }
}

export default PhotosContainer;
