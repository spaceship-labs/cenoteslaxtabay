import React, { Component } from "react";
import { SmallContainer, Title, SubTitle } from "../../theme/App.styled";
import { Welcome } from "./index.styled";

class WelcomeComponent extends Component {
  render() {
    const text1 = "La Xtabay";
    const text2 =
      this.props.lang === "es" ? "Cenote y Cabañas" : "Cenote & Cabañas";
    return (
      <Welcome>
        <SmallContainer align="center" className="wow fadeInUp">
          <Title>{text1}</Title>
          <SubTitle>{text2}</SubTitle>
        </SmallContainer>
      </Welcome>
    );
  }
}

export default WelcomeComponent;
