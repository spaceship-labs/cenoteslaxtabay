import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { Content } from "../../theme/App.styled";

import Sidebar from "../../components/sidebar/sidebarlanding";
import LocationContainer from "../location/index";
import FooterContainer from "../footer/index";
import Welcome from "./welcome";

import HeaderComponent from "../../components/header/headerlanding";

class ReservaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "es",
      isMenuVisible: true,
      isLangVisible: true,
      sections: {}
    };
  }
  componentDidMount() {
    const sections = {
      home: this.getSection("home"),
      photos: this.getSection("photos"),
      video: this.getSection("video"),
      location: this.getSection("location"),
      amenities: this.getSection("amenities"),
      about: this.getSection("about"),
      contact: this.getSection("contact")
    };
    this.setState({
      sections: sections
    });
  }
  updateSection = id => {
    let sections = this.state.sections;
    sections[id] = this.getSection(id);
    this.setState({
      sections: sections
    });
  };
  getSection = id => {
    const sections = {
      home: { link: "home", title: "Welcome", section: "home" },
      photos: { link: "photos", title: "Galleries", section: "photos" },
      video: {
        link: "thevideo",
        title: "Video",
        section: "thevideo"
      },
      location: {
        link: "location",
        title: "Location",
        section: "location"
      },
      amenities: {
        link: "amenities",
        title: "Experiences",
        section: "amenities"
      },
      about: { link: "about", title: "About us", section: "about" },
      contact: { link: "contact", title: "Contact us", section: "contact" }
    };
    return {
      element: false,
      section: sections[id],
      top: 0,
      height: 0
    };
  };
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            La Xtabay | Cabanas, cenote & spa in Rio Lagartos, Yucatán
          </title>
          <meta
            name="description"
            content="La Xtabay hotel, cabanas, cenote & spa is a relaxing and spiritual experience. Stay at one of our 5 exclusive cabanas, enjoy the cenote and an array of activities in Rio Lagartos in the state of Yucatan. Relax in our spa, reconnect with your senses in a completely natural setting"
          />
          <meta
            name="keywords"
            content="Xtabay hotel , cabanas rio lagartos, cenote la xtabay, spa rio lagartos, cenote and spa rio lagartos, rio lagartos yucatan, hotel in yucatan"
          />
          <link rel="canonical" href="http://www.cenotelaxtabay.com" />
        </Helmet>
        <Sidebar
          lang={this.state.lang}
          openVideo={this.openVideo}
          scroll={this.state.scroll}
          sections={this.state.sections}
        />
        <Content>
          <HeaderComponent
            scroll={this.state.scroll}
            lang={this.state.lang}
            sections={this.state.sections}
            isFullVisible={this.state.isMenuVisible}
            isLangVisible={this.state.isLangVisible}
          />
          <Welcome lang={this.state.lang} />
          <LocationContainer
            lang={this.state.lang}
            mount={this.updateSection}
          />
          <FooterContainer mount={this.updateSection} />
        </Content>
      </React.Fragment>
    );
  }
}

export default ReservaContainer;
