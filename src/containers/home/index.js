import React, { Component } from "react";
import { Rows, ImageWithBox, Box } from "./index.styled";
import { Paragraph, ReadMore } from "../../theme/App.styled";

import WelcomeComponent from "./welcome";
import TorreComponent from "./torre";
import ModalComponent from "../../components/modal/index";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { modal: false };
  }
  open = () => {
    this.setState({ modal: true });
  };
  close = () => {
    this.setState({ modal: false });
  };
  componentDidMount() {
    this.props.mount("home");
  }
  render() {
    const text11 = this.props.lang === "es" ? "La" : "The";
    const text12 = this.props.lang === "es" ? "Leyenda" : "Legend";
    const h = { height: this.props.height + "px" };
    return (
      <React.Fragment>
        <section id="home">
          <WelcomeComponent lang={this.props.lang} />
          <TorreComponent
            lang={this.props.lang}
            openContact={this.props.openContact}
            sections={this.props.sections}
          />
          <br />
          <br />
          <br />
          <Rows direction="column">
            <Box className="wow fadeInUp">
              <h3>
                {text11} <span>{text12}</span>
              </h3>
              <Paragraph>
                {this.props.lang === "es" ? (
                  <span>
                    Cuenta la leyenda que Xtabay era una mujer hermosa, de
                    sensualidad exuberante, atrevida y desbordante de pasión. En
                    el pueblo era considerada una mujer de mal por su afán de
                    prodigar su cuerpo y hermosura a cuanto hombre se lo
                    solicitaba. Sin embargo, su corazón era bueno y su nobleza
                    era tal, que ayudaba al necesitado, a los animales
                    abandonados, sin buscar nada a cambio. Xtabay tenía una
                    hermana, Utz-Colel, quien además de hermosa, era amada por
                    todos en el pueblo por su aparente dulzura y buen portar,
                    pero escondía un corazón frío y egoísta.{" "}
                    <ReadMore onClick={this.open}>Ver más</ReadMore>
                  </span>
                ) : (
                  <span>
                    Legend tells of a beautiful woman known as La Xtabay; she
                    was sensual, bold, exuberant and with flaming passion.
                    Villagers weren’t too keen on her, and would think she was
                    “a woman of the night”, since she’d lavish (with her body)
                    any man who’d ask her for attention. However, she had a good
                    and noble heart: she helped those in need and aided
                    neglected animals, without ever looking or wanting anything
                    in return. Xtabay had a sister, Utz-Colel who -besides being
                    beautiful- was loved by everyone in the village because she
                    was very sweet and well-behaved... But she had a cold and
                    selfish heart.{" "}
                    <ReadMore onClick={this.open}>See more</ReadMore>
                  </span>
                )}
              </Paragraph>
            </Box>
            <ImageWithBox style={h} />
          </Rows>
        </section>
        <ModalComponent close={this.close} status={this.state.modal}>
          <h2>
            {text11} <span>{text12}</span>
          </h2>
          <Paragraph>
            {this.props.lang === "es" ? (
              <span>
                Cuenta la leyenda que Xtabay era una mujer hermosa, de
                sensualidad exuberante, atrevida y desbordante de pasión. En el
                pueblo era considerada una mujer de mal por su afán de prodigar
                su cuerpo y hermosura a cuanto hombre se lo solicitaba. Sin
                embargo, su corazón era bueno y su nobleza era tal, que ayudaba
                al necesitado, a los animales abandonados, sin buscar nada a
                cambio. Xtabay tenía una hermana, Utz-Colel, quien además de
                hermosa, era amada por todos en el pueblo por su aparente
                dulzura y buen portar, pero escondía un corazón frío y egoísta.
                Un día sin previo aviso el cuerpo de Xtabay expiró y un dulce
                aroma arropó el pueblo por completo. De la tumba de Xtabay
                brotaron flores de Xtabentún, una humilde y bella flor silvestre
                con un aroma dulcemente embriagador, como tal vez sería el
                corazón de Xtabay. Utz-Colel lo negó con envidia y atribuyó la
                fragancia a los espíritus malignos enviados por su hermana
                Xtabay, para tratar así de continuar provocando a los hombres.
                Decía que, si de aquella mala mujer provenía ese perfume, cuando
                ella muriera, habría entonces una extraordinaria fragancia. Pero
                el día en el que dejó la tierra de los vivos, el cuerpo de
                Utz-Colel emanó un hedor insoportable. De su tumba creció la
                flor del tzacam, la flor del cactus, espinoso y con un
                desagradable olor. Utz-Colel, envidiosa llegó a la errónea
                conclusión de imitar los pecados de Xtabay, entregándose también
                a la pasión carnal, acostándose con los espíritus malignos, sin
                darse cuenta de que había sido la bondad del corazón de Xtabay,
                quien se entregaba al amor por un impulso generoso y natural,
                que hizo que se convirtiera en una diosa.
              </span>
            ) : (
              <span>
                Legend tells of a beautiful woman known as La Xtabay; she was
                sensual, bold, exuberant and with flaming passion. Villagers
                weren’t too keen on her, and would think she was “a woman of the
                night”, since she’d lavish (with her body) any man who’d ask her
                for attention. However, she had a good and noble heart: she
                helped those in need and aided neglected animals, without ever
                looking or wanting anything in return. Xtabay had a sister,
                Utz-Colel who -besides being beautiful- was loved by everyone in
                the village because she was very sweet and well-behaved... But
                she had a cold and selfish heart. One day, without previous
                notice, Xtabay’s body perished and the town was completely
                wrapped up in a sweet smell. Suddenly from Xtabay’s grave, a
                bunch of Xtabentún flowers sprung: these are humble and gorgeous
                wildflowers with an enchanting and sweet scent, just like
                Xtabay’s heart. Utz-Colel -filled with envy and rage- denied
                that this was product of Xtabay, and only said that the sweet
                fragrance that evolved the town, was because her sister sent
                evil spirits to lure and seduce the men of the village. She also
                said that if Xtabay’s death caused such enchanting smell, then
                an extraordinary aroma would emanate from her own death
                [Utzl-Colel]. However, the day she passed, Utz-Colel’s body left
                behind a strong stench. From her grave, a bunch of tzacam
                wildflowers sprung, which is the flower of the cactus, with
                thorns and a very unpleasant smell. Before Utz-Colel passed, she
                was filled with envy and followed her sister’s footsteps and
                gave in to her instincts, therefore giving herself to a number
                of evil spirits, without realising that it had been Xtabay’s
                kindness and noble spirit that led her to turn into a goddess.
              </span>
            )}
          </Paragraph>
          {
            <Paragraph>
              {this.props.lang === "es" ? (
                <span>
                  Desde entonces, Utz-Colel se convirtió en tzacam, la flor del
                  cactus punzante e inexorable, la que espera pacientemente a su
                  presa y entonces, eufórica y atrevida, vuelve a la vida como
                  una mujer de sensualidad exuberante que se asoma bajo la
                  sombra de las ceibas, peinando su larga cabellera con un trozo
                  de tzacam erizado de espinas, atrayendo a su víctima en un
                  juego de seducción como lo habría hecho su hermana Xtabay en
                  la tierra de los vivos, solo que Utz-Colel retendrá a su
                  víctima hasta que éste rendido bajo su hechizo, muera en el
                  frenesí de un amor infernal.
                </span>
              ) : (
                <span>
                  From that moment onwards, Utz-Colel turned into a tzacam, a
                  cactus flower filled with thorns and spines that patiently
                  waits for its prey. When the prey falls into her trap, a
                  sensual woman rises from beneath the shadows of the ceiba
                  tree, combing her hair with a piece of tzacam and its thorns:
                  it is the image of Utz-Colel, who captures her victim until
                  he’s completely surrendered under her spell, and thus dies in
                  a frenzy of passionate love.
                </span>
              )}
            </Paragraph>
          }
        </ModalComponent>
      </React.Fragment>
    );
  }
}

export default HomeContainer;
