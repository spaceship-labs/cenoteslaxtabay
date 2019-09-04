import React, { Component } from "react";
import { Button, Paragraph } from "../../theme/App.styled";
import { Rows, RowBg, RowImg, GalleryWrapp, AboutTitle } from "./index.styled";

import Smallgallery from "../../components/smallgallery/index";
import img from "../../theme/img/cabañas-1-7074.JPG";
import img2 from "../../theme/img/LOCHE_7.JPG";

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentDidMount() {
    this.props.mount("about");
  }
  render() {
    const bookLink = this.props.lang === "es" ? "/es/reserva" : "/book";
    const images = [{ img: img, label: "" }, { img: img2, label: "" }];
    const t1 = this.props.lang === "es" ? "Sobre" : "About";
    const t2 =
      this.props.lang === "es"
        ? "Somos un hotel boutique que cuenta con un impresionante cenote de 50m de diámetro rodeado de 5 exclusivas cabañas mayas completamente equipadas y diseñadas para preservar tu total privacidad, velando por tu confort y tranquilidad."
        : "We’re a hotel boutique featuring an impressive 50 meter wide cenote, surrounded by 5 exclusive Maya cabanas. Each of these cabanas is fully designed and equipped for your privacy, for your enjoyment, for your tranquility and comfort.";
    const t3 = this.props.lang === "es" ? "Reserva ahora" : "Book now";
    const t4 =
      this.props.lang === "es"
        ? "Esta maravilla natural a la que los mayas veneraban como un portal al inframundo, formada hace miles de años, es un pozo (depresión geológica) de agua dulce y tranquila, creada por la erosión de la roca caliza que la conforma. Están interconectados por el sistema de ríos subterráneos más grande del mundo. Este tipo de formación geológica milenaria es exclusiva de la península de Yucatán."
        : "Cenotes are marvelous and natural sinkholes that were believed to be (by the Mayas) the gate to the underworld, and sometimes used as sacred grounds for rituals and rites. They were formed thousands of years ago, and are a geological depression of peaceful and sweet water: a sinkhole created by the erosion of limestone of the Yucatan Peninsula. Most cenotes are connected by the world’s biggest underground river system, and this millenary geological formation only happens in the Yucatan Peninsula.";
    return (
      <section id="about">
        <Rows>
          <RowImg className="wow fadeInRight">
            <GalleryWrapp>
              <Smallgallery images={images} />
            </GalleryWrapp>
          </RowImg>
          <RowBg className="wow fadeInLeft">
            <AboutTitle>
              {t1} <br /> <b>La Xtabay</b>
            </AboutTitle>
            <br />
            <br />
            <Paragraph>{t2}</Paragraph>
            <br />
            <Paragraph>{t4}</Paragraph>
            <Button href={bookLink}>{t3}</Button>
          </RowBg>
        </Rows>
        <br />
        <br />
        <br />
      </section>
    );
  }
}

export default AboutContainer;
