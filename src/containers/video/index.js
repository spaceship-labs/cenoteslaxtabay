import React, { Component } from "react";
import { VideoWrapper, Logo, VideoTitle, Button } from "./index.styled";
import logo from "../../theme/logo-blanco.png";

import HeaderComponent from "../../components/header/index";

class VideoContainer extends Component {
  // componentDidMount() {
  //   this.props.mount("video");
  // }
  render() {
    const bookLink = this.props.lang === "es" ? "/es/reserva" : "/book";
    const book = this.props.lang === "es" ? "Reserva ahora" : "Book now";
    const text1 =
      this.props.lang === "es"
        ? "Bienvenidos a La Xtabay, Río Lagartos"
        : "Welcome to La Xtabay, Rio Lagartos";
    const text2 =
      this.props.lang === "es"
        ? "Llena tus sentidos con paz, tranquilidad y espiritualidad."
        : "Surround your senses with peace, tranquility & spirituality.";
    return (
      <section id="video">
        <VideoWrapper style={{ height: `${this.props.height}px` }}>
          <Logo>
            <img alt="La Xtabay | Cabañas | Cenote | Spa" src={logo} />
          </Logo>
          <div style={{ width: "100%" }}>
            <VideoTitle className="wow fadeInUp">
              <span>{text1}...</span>
              {text2}
            </VideoTitle>
            <Button href={bookLink}>{book}</Button>
          </div>
          <HeaderComponent
            openVideo={this.props.openVideo}
            scroll={this.props.scroll}
            sections={this.props.sections}
            isFullVisible={this.props.isMenuVisible}
            isLangVisible={this.props.isLangVisible}
          />
        </VideoWrapper>
      </section>
    );
  }
}

export default VideoContainer;
