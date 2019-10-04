import React, { Component } from "react";
import { Paragraph, ReadMore } from "../../theme/App.styled";
import {
  Rows,
  Row,
  TorreSubTitleDivided,
  RowBlue,
  AmenitieList,
  Amenitie
} from "./index.styled";

import ModalComponent from "../../components/modal/index";

class AmenitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
    const amenities = [
      {
        icon: "icon-wifi",
        title: "Wifi"
      },
      {
        icon: "icon-cenotes",
        title: "Cenotes"
      },
      {
        icon: "icon-spa",
        title: "Spa"
      },
      {
        icon: "icon-restaurant",
        title: this.props.lang === "es" ? "Restaurante" : "Restaurant"
      }
    ];
    this.amenities = amenities.map((a, index) => {
      const delay = `${index * 0.3}s`;
      return (
        <Amenitie
          key={index}
          align="center"
          className="wow fadeInUp"
          data-wow-delay={delay}
        >
          <i className={a.icon} />
          <p>{a.title}</p>
        </Amenitie>
      );
    });
    this.props = props;
  }
  open = () => {
    this.setState({ modal: true });
  };
  close = () => {
    this.setState({ modal: false });
  };
  componentDidMount() {
    this.props.mount("amenities");
  }
  getText = key => {
    const texts = {
      text9: this.props.lang === "es" ? "Experiencias" : "Experiences",
      text11:
        this.props.lang === "es"
          ? "Cuando se trata de crear momentos inolvidables La Xtabay es un mundo para el relax y el recreo. En La Xtabay encontrarás opciones para elegir sin salir de la propiedad. Consiéntete en nuestro spa, practica deportes acuáticos, explora la selva ¿o prefieres vivir la cultura maya a través de sus tradiciones?"
          : "When it comes to creating unforgettable moments, La Xtabay is a world filled with fun, relaxation and where you’ll find an array of activities to do, without leaving the property. Pamper yourself in our spa, do water sports or jungle adventures. Or would you rather connect and encounter with the Maya culture through its fascinating traditions?"
    };
    return texts[key];
  };
  render() {
    return (
      <React.Fragment>
        <section id="amenities">
          <Rows min="">
            <Row width="20%" className="wow fadeInUp">
              <TorreSubTitleDivided division="true">
                {this.getText("text9")}
              </TorreSubTitleDivided>
              <Paragraph>
                {this.getText("text11")}{" "}
                <ReadMore onClick={this.open}>
                  {this.props.lang === "es" ? "Ver más" : "See more"}
                </ReadMore>
              </Paragraph>
            </Row>
            <RowBlue width="80%" align="center" bg="blue">
              <AmenitieList align="center">{this.amenities}</AmenitieList>
            </RowBlue>
          </Rows>
        </section>
        <ModalComponent close={this.close} status={this.state.modal}>
          <h2>{this.props.lang === "es" ? "Experiencias" : "Experiencias"}</h2>

          <h3>
            {this.props.lang === "es" ? "Spa y Wellness" : "Spa and Wellness"}
          </h3>
          <Paragraph>
            {this.props.lang === "es"
              ? "La Selva Maya brinda el escenario perfecto para disfrutar del resguardo y privacidad de nuestra sala de Spa en la que aplicamos técnicas y tratamientos únicos realizados con la flora, la tradición local y sus hierbas ancestrales."
              : "The Maya Jungle is the perfect setting for our private and secluded spa... Here you can enjoy a series of relaxing and revitalizing treatments, in which we apply ancestral techniques, local flora and herbs."}
          </Paragraph>
          <h4>
            {this.props.lang === "es"
              ? "Tratamiento faciales"
              : "Facial treatments"}
          </h4>
          <Paragraph>
            {this.props.lang === "es"
              ? "Devuelva el brillo a su rostro con una variedad de técnicas para limpiar y purificar la piel con vapores aromáticos, máscaras de arcilla milenaria e hidrataciones de miel de nuestras propias colmenas."
              : "Featuring a variety of techniques, we cleanse and purify the skin with aromatherapy, so your face glows like never before. Available at the spa you’ll find clay masks, and honey hydration treatments from our own beehives."}
          </Paragraph>
          <h4>
            {this.props.lang === "es"
              ? "Tratamientos corporales"
              : "Body treatments"}
          </h4>
          <Paragraph>
            {this.props.lang === "es"
              ? "Déjese consentir por nuestro personal experto y nuestros ingredientes naturales, y reciba exfoliaciones, hidrataciones y masajes relajantes para que disfrute el resto de la velada rejuvenecido y con una sensación de calma."
              : "Allow our expert team to pamper you with our natural ingredients. We’ll exfoliate your skin, hydrate it and massage your entire body so you can revitalize your senses, feel at peace, calm and fully relaxed."}
          </Paragraph>
          <h4>{this.props.lang === "es" ? "Mani/Pedi" : "Mani/Pedi"}</h4>
          <Paragraph>
            {this.props.lang === "es"
              ? "Relájese y descanse con un tratamiento completo para manos y pies (limpieza, exfoliación, hidratación profunda) o simplemente retoque sus uñas con un tratamiento rápido para continuar disfrutando de las experiencias que tenemos preparadas para usted."
              : "Relax and rest with our full feet and hands treatment (including cleansing, exfoliation, and deep moisturizing). You can also opt for our quick nails treatment, so you can continue enjoying the rest of the experiences we have for you."}
          </Paragraph>

          <h3>{this.props.lang === "es" ? "Al aire libre" : "Open Air"}</h3>
          <Paragraph>
            {this.props.lang === "es"
              ? "Un conjunto de actividades recreativas y participativas creadas para la diversión y el goce de los más exigentes."
              : "A series of leisure activities for the enjoyment of everyone!"}
          </Paragraph>
          <h4>
            {this.props.lang === "es"
              ? "Senderismo en la selva"
              : "Trekking through the jungle"}
          </h4>
          <Paragraph>
            {this.props.lang === "es"
              ? "Disfrute la aventura de explorar la selva maya en su máximo esplendor a través de nuestros senderos en los que el aire puro, el avistamiento de aves y la sensación de libertad, harán su experiencia inolvidable."
              : "Get ready to enjoy the adventure of a lifetime, and explore every hidden corner of the maya jungle. Take in the fresh and pure air, do a little birdwatching and feel free in such naturally fascinating place! Truly an unforgettable experience."}
          </Paragraph>
          {/* *
          <h4>{this.props.lang === "es" ? "Tiro con arco" : "Archery"}</h4>
          <Paragraph>
            {this.props.lang === "es"
              ? "Conviértase en el mejor arquero de la zona, concéntrese en su respiración y descubra qué tan certeros son sus tiros en nuestro campo diseñado para la satisfacción de dar en el blanco."
              : "Our custom designed field for archery will allow you to become the best archer in the area! Focus on your breathing and discover things you didn’t know about yourself, while you enjoy this incredible open air activity!"}
          </Paragraph>
          <h4>
            {this.props.lang === "es"
              ? "Visita al Orquideario"
              : "Visit the orchid garden"}
          </h4>
          <Paragraph>
            {this.props.lang === "es"
              ? "Hace más de 500 años las orquídeas ya eran cultivadas en México por los aristócratas indígenas e incluso algunas de sus especies eran utilizadas para hacer tortillas. Participe de esta fiesta de colores, de formas y déjese seducir por este complejo y fascinante mundo."
              : "For more than 500 years, orchids have been planted in Mexico -by the high end indigenous aristocrats-; and some species were even used for making tortillas. Enroll in this wonderful activity filled with colors, shapes and let the fascinating world of flowers amaze your senses!"}
          </Paragraph>
          <h4>
            {this.props.lang === "es"
              ? "Visita al Apiario"
              : "Visit the bee hives (Apiary)"}
          </h4>
          <Paragraph>
            {this.props.lang === "es"
              ? "Una de las tradiciones milenarias mayas es la apicultura. Interactuar con el mundo de las abejas, conocer,  disfrutar sus productos y hasta aprender a hacer  velas artesanales  con láminas de cera y decorarlas a su gusto."
              : "Apiary is a millenary tradition of the Maya world. Interact with the world of bees, learn everything about their products and even get to make your own artisanal candles with local wax, and decorate them anyway you want to!"}
          </Paragraph>
           */}
          <h4>
            {this.props.lang === "es" ? "Paseo a caballo" : "Horseback riding"}
          </h4>
          <Paragraph>
            {this.props.lang === "es"
              ? "Subirse al lomo de un caballo y dar un paseo es una las actividades más gratificantes que hay. Bien sea, por sus incontables beneficios para la salud o por el placer de tener esa sensación de libertad, de sentir el roce de la brisa en el rostro y dejar de ser caballo y jinete para convertirse en uno con la naturaleza."
              : "This is one of the best and most gratifying experiences you’ll ever do! Riding a horse positively impacts your health, and also gives you a sense of freedom, of feeling the soft breeze on your face, and truly connect with nature!"}
          </Paragraph>
          <h4>
            {this.props.lang === "es" ? "Paseo en Bicicleta" : "Bike riding"}
          </h4>
          <Paragraph>
            {this.props.lang === "es"
              ? "Disfrute la emoción de vivir una aventura en bicicleta.  Recarguese de buenas vibras y energía en la selva, para terminar con el refrescante baño en nuestro cenote."
              : "Enjoy the thrill and excitement of riding across the jungle on a bike! Recharge with positive vibes and new energy from the jungle, and finish this adventure by taking a deep plunge in our refreshing cenote."}
          </Paragraph>
          {/* 
          
          <h4>
            {this.props.lang === "es"
              ? "Visita a las ruinas mayas"
              : "Maya ruins"}
          </h4>
          <Paragraph>
            {this.props.lang === "es"
              ? "Explore nuestra ruina maya totalmente virgen y descubra parte de esta cultura ancestral, ubicada a 30 mts del cenote y reservada exclusivamente para nuestros huéspedes."
              : "Visit and explore a completely virgin mata ruin and learn all about this fascinating and ancestral culture: The Mayas! Located 30 meters from the cenote, and exclusively reserved for our guests."}
          </Paragraph>
          */}
          <h3>
            {this.props.lang === "es"
              ? "Artesanía y Tradición"
              : "Handicrafts & Traditions"}
          </h3>
          <Paragraph>
            {this.props.lang === "es"
              ? "Yucatán es una zona rica en artesanía y tradición. Esta región produce artículos de los más diversos materiales, colores y diseños, que además de ser útiles, aportan belleza y distinción al entorno. Nuestros artesanos elaboran joyería en filigrana en oro y plata, además de usar carey y confeccionan tejidos, bordados y zapatos de piel."
              : "Yucatan is an area rich in traditions and crafts. This region produces a series of artifacts made from several materials, with unique designs and incredible colors: They’re beautiful and one of a kind! Our craftsmen create jewelry in gold and silver, they use shells for crafting several objects, leather shoes, and make remarkable embroidery work on several pieces!"}
          </Paragraph>
          <h4>
            {this.props.lang === "es"
              ? "Clases de bordado"
              : "Embroidery lessons"}
          </h4>
          <Paragraph>
            {this.props.lang === "es"
              ? "El XOKBIL-CHUY o hilo contado es una técnica que requiere ritmo y repetición, pero al mismo tiempo es calmante y reconfortante. Es considerada una práctica mindfulness y reporta tener un impacto positivo en la salud mental. La clase incluye los materiales para que realice su propia artesanía como souvenir."
              : "The XOKBIL-CHUY -or counting threads- is a technique that requires rhythm, repetitions and is (at the same time) a calming and comforting activity. It’s considered as part of the mindfulness practices and has a positive impact on mental health. The class includes the materials you’ll be using, so you create your own craft to take back home!"}
          </Paragraph>
          <h4>
            {this.props.lang === "es"
              ? "Preparación de tamales yucatecos (Mucbipollo)"
              : "Yucatan tamales (preparing and cooking mucbipollo)"}
          </h4>
          <Paragraph>
            {this.props.lang === "es" ? (
              <span>
                Conozca, prepare y deguste una de las tradiciones culinarias
                mexicanas más significativas:{" "}
                <b>
                  Los Tamales. Este platillo estrella está presente en
                  celebraciones cristianas y paganas.
                </b>
                .
              </span>
            ) : (
              <span>
                Learn to prepare, cook, and try this unique Mexican culinary
                tradition :{" "}
                <b>
                  Making Tamales! This is a dish that is always present in
                  christian and pagan celebrations. Tamales are typical for the
                  following celebrations
                </b>
                .
              </span>
            )}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "En el día de la Candelaria (colocar imagen apetitosa de tamal) las personas que sacaron la figura del Niño Dios en la rosca de reyes deben repartir tamales entre los invitados que asistieron al festejo del 6 de enero, Día de los Reyes."
              : "Día de la Calendaria (February 2nd), those who got the baby Jesus figure in the King’s bread, have to buy everyone tamales on this day."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "En el día de los muertos (imagen de Mucbipollo) los yucatecos deleitan sus paladares con el Mucbipollo, que significa pollo que ha sido enterrado. Debido a su preparación en la que se envuelve el tamal grande en hojas de plátano y es cocido lentamente bajo la tierra."
              : "Día de los muertos (Day of the deceased), people from Yucatan delight their palates with the mucbipollo, which means buried chicken. A huge tamal is wrapped in banana leaves, and is slowly cooked underground."}
          </Paragraph>
          <h4>{this.props.lang === "es" ? "Dzac Ya" : "Dzac Ya"}</h4>
          <Paragraph>
            {this.props.lang === "es"
              ? "La sabiduría ancestral maya no solo estuvo en el estudio de la astrología, sino también en el desarrollo del conocimiento de las plantas medicinales y sus propiedades curativas."
              : "The ancestral Maya wisdom wasn’t only present in astronomy and math, but also in the healing practices with medicinal plants."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "Para los mayas el origen de las dolencias y enfermedades estaban ligadas al aspecto moral y religioso. La principal creencia era que estas provenían del enojo de los dioses."
              : "For the Mayas, the root of all pain and sickness was related to a moral and/or religious origin. The belief was, that the Gods would become angry with some people, therefore send diseases and discomfort to them."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "En la actualidad la fortaleza de los tratamientos de los Dzac Yahes (médicos mayas), reside en la curación a través de las plantas y sus derivados, además de masajes y apretones."
              : "The Dzac Yahes were Maya doctors, and their healing powers reside in plants and massages."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "Converse con un de nuestros Dzac Yahes y descubra los beneficios de la herbolaria maya."
              : "This activity allows you to chat to our Dzac Yahes, learn a little bit more about the practice of healing with plants and everything you need to know about Maya herbs."}
          </Paragraph>

          <h3>{this.props.lang === "es" ? "Cenote" : "Cenote"}</h3>
          <h4>Snorkel</h4>
          <Paragraph>
            {this.props.lang === "es"
              ? "Encuentre la paz interior al escuchar su propia respiración en un mundo sin gravedad Descubra los tesoros que esconde nuestro cenote y comparta con su pareja la sensación del silencio y la desaparición del stress de la vida cotidiana."
              : "Find inner peace by listening to your own breathing, in a world where gravity doesn’t exist. Discover every hidden treasure the cenote withholds and share with your partner the feeling of utter silence... Stress and worries will automatically disappear: guaranteed!"}
          </Paragraph>
          <h4>Kayak</h4>
          <Paragraph>
            {this.props.lang === "es"
              ? "El sonido, el contacto con el agua y la sensación de fluir sobre la superficie realizando movimientos repetitivos vacía la mente y la concentra en el presente y en no perder el rumbo. Compita con su pareja en este deporte que requiere más técnica que fuerza."
              : "A one of a kind experience and adventure where you’ll shake your senses: listen to the soothing sounds of ocean waves, feel the direct contact with water and float above the surface of the sea while you concentrate on repeating the paddling movement whilst simultaneously learning your course across the waters. This is an adventure that requires strength and focus!"}
          </Paragraph>
          {/** 
          <h4>{this.props.lang === "es" ? "Tirolina" : "Zip line"}</h4>
          <Paragraph>
            {this.props.lang === "es"
              ? "Afiance los lazos con su pareja y el trabajo en equipo, deslizándose  hacia un cóctel de sensaciones en el que admirar la naturaleza como nunca antes; forma parte de la aventura la satisfacción de terminar un tramo recorrido. Culmine esta actividad lanzándose al cenote desde las alturas."
              : "Team up with your partner and let’s work as one: slide off the zipline onto a whirlpool of emotions where you’ll get to admire nature from a never-before angle! Once you’ve finished, throw yourself off the zip line and onto the refreshing waters of the cenote!"}
          </Paragraph>
          <h4>
            {this.props.lang === "es"
              ? "Fotografía subacuática"
              : "Fotografía subacuática"}
          </h4>
          <Paragraph>
            {this.props.lang === "es"
              ? "Sumérjase en  las aguas de nuestro cenote con su fauna única en su tipo y combine su pasión por el buceo y la fotografía. Capture una extraordinaria imagen de recuerdo de sus vacaciones para maravillar a sus amigos y difúndalo  en sus redes sociales."
              : "sumérjase en  las aguas de nuestro cenote con su fauna única en su tipo y combine su pasión por el buceo y la fotografía. Capture una extraordinaria imagen de recuerdo de sus vacaciones para maravillar a sus amigos y difúndalo  en sus redes sociales."}
          </Paragraph>*/}
        </ModalComponent>
      </React.Fragment>
    );
  }
}

export default AmenitiesContainer;
