import React, { Component } from "react";
import {
  Columns,
  Column,
  Logo,
  Footer,
  Box,
  Green,
  BlackLine,
  CookieLabel
} from "./index.styled";
import { Paragraph } from "../../theme/App.styled";
import logo from "../../theme/logo_complete.png";
import ModalComponent from "../../components/modal/index";

class footerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      cookieLabel: false
    };
  }
  componentDidMount() {
    const c = this.getCookie("xtabay");
    if (!c) {
      this.setState({ cookieLabel: true });
      this.setCookie();
    }
  }
  toggle = () => {
    this.setState({ status: !this.state.status });
  };
  toggleCookie = () => {
    this.setState({ cookieLabel: !this.state.cookieLabel });
  };
  getCookie = name => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };
  setCookie = () => {
    let d = new Date();
    d.setTime(d.getTime() + 360 * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = `xtabay=true;${expires};path=/`;
  };
  render() {
    const c1 =
      this.props.lang === "es"
        ? "Todos los derechos reservados."
        : "Todos los derechos reservados.";
    return (
      <React.Fragment>
        <CookieLabel className={this.state.cookieLabel ? "open" : ""}>
          <a onClick={this.toggleCookie}>x</a>
          <p>
            {this.props.lang === "es"
              ? `“Para mejorar tu experiencia en nuestro sitio utilizamos cookies, si continuas navegando estas aceptando su uso”`
              : `“To improve your experience on our website, we use cookies. If you continue browsing, you’ll accepting their use”`}
          </p>
        </CookieLabel>
        <Footer id="footer">
          <Box>
            <Columns>
              <Column>
                <p>
                  <Green>
                    <a href="mailto:cenotelaxtabay@gmail.com">
                      cenotelaxtabay@gmail.com
                    </a>
                  </Green>
                </p>
                <p>
                  <Green>
                    <a href="mailto:contacto@cenotelaxtabay.com">
                      contacto@cenotelaxtabay.com
                    </a>
                  </Green>
                </p>
                <p>
                  <a href="tel:+52 998 842 06 11">
                    +52 998 842 06 11 <i className="icon-whatsapp" />
                  </a>
                </p>
                <br />
                <p>
                  <Green>
                    <b>Check In</b> 15hrs.
                  </Green>
                </p>
                <p>
                  <Green>
                    <b>Check Out</b> 12hrs.
                  </Green>
                </p>
              </Column>
              <Column>
                <Logo>
                  <img alt="La Xtabay" src={logo} />
                </Logo>
              </Column>
            </Columns>
          </Box>
          <BlackLine>
            <p>
              <b>Copyrigth 2019</b> <Green>La Xtabay</Green> | {c1} |{" "}
              <a onClick={this.toggle}>
                {this.props.lang === "es"
                  ? "Políticas de privacidad"
                  : "Privaci policies"}
              </a>
            </p>
          </BlackLine>
        </Footer>
        <ModalComponent status={this.state.status} close={this.toggle}>
          <h2>
            {this.props.lang === "es"
              ? "Políticas de privacidad"
              : "Privacy policy"}
          </h2>
          <Paragraph>
            {this.props.lang === "es"
              ? "Cenote La Xtabay, con domicilio en Parcela 71 Z-1 P1/1 del Ejido de Loche, en el Municipio De Panabá, Yucatán, tiene el compromiso de proteger sus datos privados, por lo tanto hemos adoptado una política del uso, manejo y divulgación de la información personal, cuyo propósito es que esté enterado del trato que se le da a la recopilación, uso y divulgación de la información personal que nos proporciona al acceder a nuestro sitio web, al contratar y utilizar nuestros servicios."
              : "Cenote La Xtabay, located at Parcela 71 Z-1 P1/1 in the Loche Ejido, in the county of Panabá, Yucatán, is committed to protect your private data and information. As such, we’ve adopted a policy for the use and management of your personal information, with the sole purpose of letting you know what we do when we have access to your personal information once you deliver it to us on our website."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "En nuestra Política de Privacidad está contemplada la atención a las personas que requieran una mayor explicación o información detallada de nuestra política o de cualquier aspecto inherente a la información personal que Cenote La Xtabay puede tener sobre usted. Al utilizar nuestros servicios, usted es consciente que nos brinda información personal que se almacena en nuestra base de datos y se le da el tratamiento de acuerdo a nuestra Política de Privacidad."
              : "Our Privacy Policy is for those who would like further and detailed  information about our policy, or anything related to the use of their personal information. When using our services, you will provide your personal information, which is then stored in our database and is subject to certain uses, in accordance to our Privacy Policy."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "Debemos señalar que por Información Personal  se entiende la información que identifica a una persona, entre los que se puede incluir nombre, edad, nacionalidad, lugar de nacimiento, dirección, género, e información sobre su documento de identidad, imagen, información especial (en caso de requerir servicios de atención especial), información de sus preferencias de mercado, en general toda aquella que nos proporcione en nuestros sitios web y nuestras redes sociales."
              : "We must point out that by Personal Information we refer to the information provided by a person, that identifies him or her and include: name, age, nationality, place of origin, address, gender, and information about their ID document, such as a picture, special information (in case the person needs special attention), consumer behavior preferences, and basically all the information that the person provides on our website and social media platforms."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "También puede entenderse como información personal a las imágenes y/o al audio que sea grabado o transmitido por las cámaras de seguridad dentro de las instalaciones de Cenote La Xtabay."
              : "Personal information also refers to images and/or audios that are recorded or transmitted by the surveillance cameras within the facilities of Cenote La Xtabay."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "La información personal que recibimos, puede proceder de usted mismo, o de terceros que actúan a su nombre, con su consentimiento y aprobación, tales como agencias de viajes u otros hoteles o centros de comercio que reserven en su nombre con nosotros."
              : "The personal information we receive, can come from yourself or third parties who act on behalf of your name, under your consent and approval, such as travel agencies, hotels, or other establishments that book on your behalf with us."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "De conformidad con la legislación de nuestro País, que nos permite compilar, usar y en su caso divulgar su información personal, únicamente para registrar su reservación, confirmar su llegada, brindar y realizar el cobro por el servicio de hospedaje en nuestras cabañas así como algún otro servicio de los que Cenote La Xtabay brinda y que sea contratado por usted, para poder dar cumplimiento a los servicios contratados por terceros, como agencias de viajes, operadores, etcétera."
              : "According to our country’s legislation, we are not allowed to compile, use or diffuse your personal information, except to register your reservation, confirm your arrival, provide and charge the service of accommodation in our cabañas, as part of the services that Cenote La Xtabay offers, in order for us to deliver the services hired by yourself or third parties on your behalf (such as travel agencies, tour operators, etc)."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "Queda establecido en nuestra política que por nuestra parte no estamos autorizados, sin su consentimiento, a licenciar, comercializar o divulgar  de alguna manera su información personal a terceros, las únicas circunstancias donde podremos hacer divulgación de su información personal con terceros, y que usted desde el momento de aceptar nuestra política está consciente de esa situación y la ha aceptado, es a los terceros prestadores de servicios, terceros que tienen prohibido de acuerdo a la legislación hacer un uso distinto de su información personal que no sea únicamente para la prestación del servicio contratado."
              : "Our policy establishes that we are not allowed -without your full consent- to license, commercialize or diffuse in any way your personal information to third parties. The only way we can do this, is in the case you provide consentment and are aware of it, so we can provide your information to third parties service providers; these are at the same time prohibited to use your information in any way except for the services hired in the accommodation field."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "Cenote La Xtabay, para el caso de que por requerimiento judicial o legal, se nos exija proporcionar información personal de usted, no estaría violando la política de privacidad, pues de conformidad con la legislación, estamos obligados a cumplir con las citaciones o requerimientos legales de las Autoridades, se contempla en este supuesto la información contable y fiscal que deba enterarse a las autoridades fiscales, así como los registros que en su momento éstas puedan llegar a solicitar."
              : "In case we are required by a legal warranty or document, to provide your personal information to the authorities, we will not be violating our privacy policy because according to our legislation we are obliged to comply with the nation’s authorities’ requests. All of this under the presumption that the information shall be given to the fiscal and accountant authorities, that they may request."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "En Cenote La Xtabay toda la información personal que obtenemos debe ser proporcionada por usted o por un tercero en su nombre y con su consentimiento (como a las agencias de viaje) por lo que de ninguna manera se le podrá forzar a proporcionar información que usted no desee, sin embargo es importante hacerle notar que para la prestación de nuestros servicios alguna información es relevante para poder brindarle un servicio de calidad, como puede ser fecha de llegada, número de personas que lo acompañan, nombre, nacionalidad."
              : "All the personal information we require from guests, must be delivered by the guest or a third party authorized to do so under your consent (such as travel agencies). We will never obligate you to provide information you don’t desire to issue us, nonetheless it’s important to let you know that in order for us to provide you with the quality of service you hope for, we need to have certain information -relevant-, such as arrival date, number of people traveling with your, name, nationality."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "Siempre que usted nos brinde información personal, deberá otorgar su consentimiento para el uso y divulgación de la misma, el cual puede retirar en el momento que así lo desee, a través de los medios que ponemos a su disposición, usted también puede solicitar la modificación e incluso a que sea eliminada su información personal, para lo cual podrá ponerse en contacto con nuestro personal quien le orientará en cualquier duda que tenga al respecto."
              : "Every time you give us personal information, you must deliver your consent for the use of it, which you will be able to take away whenever you desire, via whichever channel we offer you. You could also request to alter or completely eliminate your personal information, but for that you need to get in contact with our team of staff who will guide you with whichever doubt you may have about it."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "Si usted acepta recibir promociones, publicidad y anuncios vía correo electrónico, en ese caso utilizaremos su información personal para hacerle llegar información, vía correo electrónico basado en la información que usted ha indicado es de su interés. Usted podrá dejar de recibir esta información en cualquier momento que así lo desee, cancelando su consentimiento para recibir información o publicidad en el correo que ponemos a su disposición."
              : "If you accept to receive promotions or advertising via email, we will use your personal information for this matter only, via email and based on the information you provided us, and we’ll only deliver what you state you are interested in. You could also stop receiving this information at any time you desire, all you need to do is cancel your consent to receive information or advertising in the email we will provide you."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "Al utilizar los siguientes hashtags: #cenotelaxtabay #laxtabay #laxtabaycenote o al etiquetar o taggear en cualquiera de las redes sociales a Cenote La Xtabay es usted consiente que ha aceptado los términos y condiciones para que sus fotografías y videos puedan ser utilizados para fines de publicidad de Cenote La Xtabay, por lo que renuncia a solicitar o exigir ningún tipo de regalías, pudiendo Cenote La Xtabay usar y/o reutilizar, mostrar, exhibir, producir, reproducir, publicar y/o republicar, emitir, comunicar, presentar, distribuir, adaptar, alterar, modificar, traducir, crear trabajos derivados, y explotar de otro modo su contenido tales como nombre, imagen, apariencia, voz y/o cualquier otra representación de su persona, de manera nacional e internacional, de igual manera usted renuncia a todos los derechos del contenido de las imágenes cuando sean utilizadas para publicidad, renunciando expresamente a cualquier derecho que tenga sobre las mismas, al ser usuario de redes sociales, tiene al menos dieciocho años de edad y ha leído a su entero conocimiento las presentes políticas."
              : "When you use the following hashtags: #cenotelaxtabay #laxtabay #laxtabaycenote, or whenever you tag us on whichever social media platform, you need to be aware that you’ve accepted the terms and conditions for your pictures and videos to be used for advertising purposes on those platforms. This means that you give up your right to request royalties, so Cenote La Xtabay can use or re use, show, display, produce, reproduce, publish and/ or re-publish, communicate, present, distribute, adapt, alter, modify, translate, create work derived from, and reproduce in any other manner your content, such as name, image, appearance, voice/and or any other representation of your person, at a national or international level, for advertising purposes."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "El uso que le damos a la información personal que usted nos permite utilizar con fines de publicidad, es protegida para que no sea extraviada, robada y no tengan acceso personas no autorizadas, ni se le dé un uso distinto para el que fue autorizada."
              : "Your information is completely protected from being lost or stolen. No one else , or any unauthorized parties have access to it, and neither will it be used for anything other than what it was authorized."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "Estas políticas pueden ser modificadas sin previo aviso, sin embargo, siempre estarán disponibles para su consulta en nuestra página web."
              : "These policies can be modified without previous notice, nonetheless will always be available for your consultation on our website."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "De Igual manera, al otorgar su consentimiento para que le sea enviada publicidad, y para que siempre se encuentre actualizado en las promociones e información que compartimos, usted podrá actualizar su información al correo electrónico de atención que pondremos a su disposición."
              : "When you deliver your consent to receive advertising and get updates on promotions and information we share, you can update your own information, to the customer attention email we shall put upon your disposal."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? "Si requiere atención personal para conocer más sobre el manejo de su información personal, o tiene algún comentario o sugerencia con respecto a la Política de Privacidad, o desea retirar el consentimiento del uso de sus datos personales, puede ponerse en contacto con nuestro Personal encargado del manejo de la información a través de correo electrónico a atención@cenotelaxtabay.com"
              : "If you require special attention to learn more about the use and management of your personal information, or if you have any additional comments or suggestions in regard to our Privacy Policy, or if you wish to retrieve your consent for the use of your personal data, then you can get in touch with our team of staff who administers the information management, on our email atencion@cenotelaxtabay.com"}
          </Paragraph>
          <h2>
            {this.props.lang === "es"
              ? "Política de uso de Cookies"
              : "Use of Cookies Policy"}
          </h2>
          <Paragraph>
            {this.props.lang === "es" ? "¿Qué son las cookies?" : ""}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? 'Una cookie es un archivo creado por un sitio web que contiene pequeñas cantidades de datos, que a su vez se envían entre un emisor y un receptor. El emisor es el servidor donde está alojada la página web que esta utilizado y el receptor es el navegador que usas para visitar cualquier página web, tiene como principal fin identificar al usuario, guardando su comportamiento en un sitio web, y lograr ofrecerle contenido de acuerdo a sus preferencias, otro de los fines es saber cuándo fue la última vez que el usuario utilizó la página web; al visitar nuestro sitio web se instala un archivo de texto llamado "cookie" en el navegador del disco duro de su computadora. Esta "cookie" no puede ser leída por ningún otro sitio web y la finalidad de su uso es saber cuestiones como los horarios en que los usuarios accedieron a nuestra página, si es alguien que lo visita regularmente, cual fue el sitio de mayor interés en nuestra página, esta información es utilizada para conocer el comportamiento de los usuarios que visiten nuestra página para fines de estadísticas de mercado.'
              : "A cookie is a file created by a website, that contains small amounts of data, which is at the same time, sent between an emisor and receptor. The emisor is the server where the website is hosted, and the receptor is the browser used to access any website. Its main purpose is identify the user, save its behaviour patterns (on the website), and therefore provide him or her content in accordance to their preferences. It also serves the purpose of knowing when it was the last time a user browsed the website: this is because every time a user visits the site, a file called “cookie” is installed, which can’t be read by any other website and is only installed to know when the user logs on to the website, if it’s a frequent user, and that kind of content of the website the user usually reads. Basically, all user behaviour data, for marketing purposes and statistics."}
          </Paragraph>
          <Paragraph>
            {this.props.lang === "es"
              ? 'En cualquier momento usted puede desactivar las cookies en su navegador, solo tiene que seguir los pasos que le indique su navegador. El desactivar las cookies podría hacer que el sitio web no funcione correctamente. Para más información sobre las  "cookies" que utiliza nuestro sitio web o como desinstalarlas pregunte en atención@cenotelaxtabay.com'
              : "At any point, you can deactivate the cookies on your browser, all you have to do is follow your browser’s instructions. Deactivating the cookies could lead to a malfunctioning of the website. For more information about the “cookies”, our website uses, or how to uninstall them, contact us at atención@cenotelaxtabay.com"}
          </Paragraph>
        </ModalComponent>
      </React.Fragment>
    );
  }
}

export default footerContainer;
