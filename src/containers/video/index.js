import React, { Component } from "react";
import {
  VideoWrapper,
  Logo,
  VideoTitle,
  Button,
  Rows,
  Row,
  BookWrapper
} from "./index.styled";
import logo from "../../theme/logo-blanco.png";

import HeaderComponent from "../../components/header/index";
import ScriptTag from "react-script-tag";

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
    // const script = (
    //   <ScriptTag
    //     isHydrating={true}
    //     async
    //     data-form-id="5d6060985a0cc"
    //     data-widget="small"
    //     src="https://secured.sirvoy.com/widget/sirvoy.js"
    //   />
    // );
    const script = (
      <script
        async
        data-form-id="5d6060985a0cc"
        data-widget="small"
        src="https://secured.sirvoy.com/widget/sirvoy.js"
      />
    );
    return (
      <section id="video">
        <VideoWrapper style={{ height: `${this.props.height}px` }}>
          <Logo>
            <img alt="La Xtabay | Cabañas | Cenote | Spa" src={logo} />
          </Logo>
          <div style={{ width: "100%" }}>
            <Rows>
              <Row shrink>
                <VideoTitle className="wow fadeInUp">
                  <span>{text1}...</span>
                  {text2}
                </VideoTitle>
                <Button href={bookLink}>{book}</Button>
              </Row>
              <Row width="400px">
                <BookWrapper>{script}</BookWrapper>
              </Row>
            </Rows>
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
