import React, { Component } from "react";
import { Button, Paragraph } from "../../theme/App.styled";
import { Rows, Row, TorreWrapp, TorreSubTitle } from "./index.styled";
import Smallgallery from "../../components/smallgallery/index";

import img1 from "../../theme/img/LOCHE_5.JPG";
import img2 from "../../theme/img/LOCHE_18.jpg";
import img3 from "../../theme/img/LOCHE_83.JPG";

class TorreComponent extends Component {
  render() {
    const images = [
      { img: img1, label: "" },
      { img: img2, label: "" },
      { img: img3, label: "" }
    ];
    const book = this.props.lang === "es" ? "Reserva ahora" : "Book now";
    const bookLink = this.props.lang === "es" ? "/es/reserva" : "/book";
    return (
      <TorreWrapp>
        <Rows>
          <Row width="30%" className="wow fadeInUp">
            <TorreSubTitle>
              {this.props.lang === "es" ? (
                <React.Fragment>
                  Cenote y Cabañas <br /> La Xtabay
                </React.Fragment>
              ) : (
                <React.Fragment>
                  Cenote & <br /> La Xtabay Cabañas
                </React.Fragment>
              )}
            </TorreSubTitle>
            <Paragraph>
              {this.props.lang === "es" ? (
                <span>
                  La Xtabay es un lugar mágico. Es una tierra de leyendas y
                  espiritualidad, como una tierra encantada. La flora, su fauna
                  y las criaturas que desprende la naturaleza viva del cenote
                  nos induce a la paz, la relajación, la meditación y el{" "}
                  <i> mindfulness</i>… No puede haber otro lugar como este que
                  te permita escapar del mundo de hoy, del mundo de los vivos, y
                  que te transporte a un lugar donde puedas reconectarte contigo
                  mismo, con tu espíritu y tu mente mientras tu cuerpo se relaja
                  en una de las cabañas de La Xtabay: tu refugio privado.
                </span>
              ) : (
                <span>
                  Xtabay is a magical place! A space filled with legends and
                  spirituality... it’s as if you were in an enchanted land! Its
                  flora & fauna, surrounded by the cenote’s natural elements,
                  invite you to relax, meditate and reach a state of
                  mindfulness... It’s hard -and practically impossible- to find
                  another place like this, which allows you to escape from
                  today’s hectic world, from the world of the living thus take
                  you to a place where you can reconnect with yourself, with
                  your spirit and mind, while your body relaxes and drifts off
                  in one of the cabanas at La Xtabay. This is your very own
                  private and secluded shelter.
                </span>
              )}
            </Paragraph>
            <Button href={bookLink}>{book}</Button>
          </Row>
          <Row width="70%" className="wow fadeInUp">
            <Smallgallery images={images} />
          </Row>
        </Rows>
      </TorreWrapp>
    );
  }
}

export default TorreComponent;
