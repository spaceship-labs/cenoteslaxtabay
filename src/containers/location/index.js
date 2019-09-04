import React, { Component } from "react";
import {
  AmenitiesBg,
  Rows,
  RowImg,
  RowImgW,
  RowBg,
  TitleWrapper,
  AmenitiesTitle,
  VerticalLine
} from "./index.styled";

class LocationContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentDidMount() {
    this.props.mount("location");
  }
  getText = key => {
    const texts = {
      text1: this.props.lang === "es" ? "Ubicación" : "Location",
      text2:
        this.props.lang === "es" ? "amet, consectetur." : "amet, consectetur.",
      text3:
        this.props.lang === "es"
          ? "elegante y sofisticado."
          : "elegant and sophisticated.",
      text16:
        this.props.lang === "es" ? (
          <span>
            Con solo 1.237 habitantes, Loche, es una de las poblaciones del
            municipio de Panabá en el estado de Yucatán, México. Allí se ubica
            el cenote La Xtabay, que debe su nombre a la leyenda maya.
          </span>
        ) : (
          <span>
            Loche is a small town in the county of Panaba, in the state of
            Yucatan, Mexico.; with only 1,237 inhabitants. It’s here where the
            cenote La Xtabay is found, a place that owes its name to the Maya
            legend.
          </span>
        ),
      text17:
        this.props.lang === "es" ? (
          <span>
            El Cenote se encuentra en la carretera 295 Tizimín/Valladolid, en
            Loche, a 21 kilómetros de Río Lagartos. El aeropuerto más cercano es
            el Aeropuerto Internacional de Chichen Itzá. La mejor manera de
            trasladarte al Cenote de Xtabay es en auto, disponible para rentar
            en el aeropuerto. Para más información clickear (
            <a
              href="http://www.aicza.mx/#Contacts-page"
              target="_blank"
              without
              rel="noopener noreferrer"
            >
              http://www.aicza.mx/#Contacts-page
            </a>
            ). También puedes utilizar el aeropuerto de la Ciudad de Mérida, la
            capital del estado.
          </span>
        ) : (
          <span>
            The Cenote Xtabay is located along the 295 Tizimin/ Valladolid
            highway, in the town of Loche, only 21 kilometers from Río Lagartos.
            The nearest airport is the Chichen Itza International Airport. The
            best way to get to the Cenote Xtabay is by car, which is available
            to hire at the airport. For more information, click here{" "}
            <a
              href="http://www.aicza.mx/#Contacts-page"
              target="_blank"
              without
              rel="noopener noreferrer"
            >
              http://www.aicza.mx/#Contacts-page
            </a>{" "}
            You could also get to Xtabay from Merida’s airport (which is the
            capital city of the state of Yucatan)
          </span>
        )
    };
    return texts[key];
  };
  render() {
    const iframe = (
      <iframe
        title="Cenote y Cabañas La Xtabay"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5407.799976162486!2d-88.15020393119511!3d21.388594355392108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f52359091b8b5f9%3A0xe343c0898368e771!2sCenote+%26+Caba%C3%B1as+La+Xtabay!5e0!3m2!1sen!2smx!4v1557852117914!5m2!1sen!2smx"
        height="500"
        frameBorder="0"
        allowFullScreen
      />
    );
    return (
      <section id="location">
        <AmenitiesBg>
          <TitleWrapper className="wow fadeInUp">
            <VerticalLine />
            <AmenitiesTitle>{this.getText("text1")}</AmenitiesTitle>
            {/*<AmenitiesSubTitle>{this.getText("text2")}</AmenitiesSubTitle>*/}
            {/*<AmenitiesFooter>{this.getText("text3")}</AmenitiesFooter>*/}
          </TitleWrapper>
          <Rows align="start">
            <RowImg className="wow fadeInLeft">
              <RowImgW>{iframe}</RowImgW>
            </RowImg>
            <RowBg className="wow fadeInRight">
              <p>{this.getText("text16")}</p>
              <p>{this.getText("text17")}</p>
            </RowBg>
          </Rows>
        </AmenitiesBg>
      </section>
    );
  }
}

export default LocationContainer;
