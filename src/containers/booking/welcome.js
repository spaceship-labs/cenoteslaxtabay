import React, { Component } from "react";
import {
  Section,
  Box,
  FormBox,
  InputWrapper,
  Rows,
  Row,
  Button
} from "./index.styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      startDate: "",
      endDate: "",
      pax: "",
      message: "",
      formValid: false,
      mailSent: false,
      validFields: {
        name: false,
        phone: false,
        email: false,
        startDate: false,
        endDate: false,
        pax: false,
        message: true
      }
    };
  }
  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };
  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.validFields;

    switch (fieldName) {
      case "name":
        fieldValidationErrors.name = value.length >= 5 ? true : false;
        break;
      case "phone":
        fieldValidationErrors.phone = value.length >= 5 ? true : false;
        break;
      case "email":
        const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? true : false;
        break;
      case "pax":
        fieldValidationErrors.pax = value && value !== "" ? true : false;
        break;
      default:
        break;
    }
    console.log(fieldName, value, this.state);
    this.setState({ validFields: fieldValidationErrors }, () => {
      this.validateForm();
    });
  };
  validateForm = () => {
    const f = this.state.validFields;
    this.setState({
      formValid:
        f.name && f.phone && f.email && f.startDate && f.endDate && f.pax
    });
  };
  startDateChange = date => {
    let fieldValidationErrors = this.state.validFields;
    fieldValidationErrors.startDate = true;
    this.setState(
      {
        startDate: date,
        validFields: fieldValidationErrors
      },
      () => {
        this.validateForm();
      }
    );
  };
  endDateChange = date => {
    let fieldValidationErrors = this.state.validFields;
    fieldValidationErrors.endDate = true;
    this.setState(
      {
        endDate: date,
        validFields: fieldValidationErrors
      },
      () => {
        this.validateForm();
      }
    );
  };
  handleSubmit = event => {
    event.preventDefault();
    const formData = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      startDate: this.state.startDate.toDateString(),
      endDate: this.state.endDate.toDateString(),
      pax: this.state.pax,
      message: this.state.message
    };
    //const data = new FormData(formData);
    const url = "/contact/book.php";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ mailSent: data });
      });
  };
  render() {
    const message =
      this.props.lang === "en"
        ? "The message has been sent, someone will contact you soon."
        : "Su mensaje ha sido enviado, alguien se contactará con usted pronto.";
    return (
      <React.Fragment>
        <Section>
          <h1>{this.props.lang === "es" ? "Bienvenidos" : "Welcome"}...</h1>
          <Box>
            <p>
              
                {this.props.lang === "es"
                  ? (<b>Sumerge tus sentidos en una tierra llena de espiritualidad y <i>mindfulness</i>.</b>)
                  : (<b>Immerse your senses into a land filled with spirituality & mindfulness…</b>)}
              {this.props.lang === "es"
                ? "Despréndete, relájate y disfruta ¿Estás listo para una experiencia como ninguna? La Xtabay comprende una tierra mística, donde podrás alojarte en una de 5 exclusivas cabañas, las cuales rodean un sagrado cenote en medio de la jungla maya"
                : " Relax, drift off and enjoy… Are you ready for a unique experience? La Xtabay is a land full of mysticism, where you can stay in one of our 5 exclusive cabanas, which surround a sacred cenote in the midst of the Maya jungle."}
            </p>
          </Box>
        </Section>
        <FormBox>
          <form onSubmit={this.handleSubmit}>
            <h2>
              {this.props.lang === "es"
                ? "Reserva con nosotros"
                : "Book with us"}
            </h2>
            <p>
              <b>
                {this.props.lang === "es"
                  ? "Déjanos tu información y un representante se pondrá en contacto contigo."
                  : "Leave us your information and someone will contact you soon."}
              </b>
            </p>
            <br />
            <br />
            <InputWrapper>
              <label>
                {this.props.lang === "es" ? "Nombre Completo" : "Full Name"}:
              </label>
              <input
                name="name"
                type="text"
                onChange={event => this.handleUserInput(event)}
              />
            </InputWrapper>
            <InputWrapper>
              <label>{this.props.lang === "es" ? "Teléfono" : "Phone"}:</label>
              <input
                name="phone"
                type="text"
                onChange={event => this.handleUserInput(event)}
              />
            </InputWrapper>
            <InputWrapper>
              <label>{this.props.lang === "es" ? "Correo" : "Email"}:</label>
              <input
                name="email"
                type="text"
                onChange={event => this.handleUserInput(event)}
              />
            </InputWrapper>
            <br />
            <br />
            <h3>
              {this.props.lang === "es"
                ? "Datos de la reservación"
                : "Reservation Data"}
            </h3>
            <br />
            <Rows>
              <Row>
                <InputWrapper>
                  <label>
                    {this.props.lang === "es"
                      ? "Fecha de entrada"
                      : "Arrival Date"}
                    :
                  </label>
                  <DatePicker
                    name="startDate"
                    selected={this.state.startDate}
                    onChange={this.startDateChange}
                  />
                </InputWrapper>
              </Row>
              <Row>
                <InputWrapper>
                  <label>
                    {this.props.lang === "es"
                      ? "Fecha de salida"
                      : "Departure Date"}
                    :
                  </label>
                  <DatePicker
                    name="endDate"
                    selected={this.state.endDate}
                    onChange={this.endDateChange}
                  />
                </InputWrapper>
              </Row>
            </Rows>
            <InputWrapper>
              <label>
                {this.props.lang === "es"
                  ? "Número de adultos"
                  : "Adults number"}
                :
              </label>
              <input
                name="pax"
                type="number"
                onChange={event => this.handleUserInput(event)}
              />
            </InputWrapper>
            <InputWrapper>
              <label>
                {this.props.lang === "es" ? "Comentarios" : "Comments"}:
              </label>
              <textarea
                rows="5"
                name="message"
                onChange={event => this.handleUserInput(event)}
              />
            </InputWrapper>
            <Button
              hidden={this.state.mailSent}
              disabled={!this.state.formValid}
              type="submit"
            >
              {this.props.lang === "es" ? "Reserva Ahora" : "Book Now"}
            </Button>
            <p>{this.state.mailSent ? message : ""}</p>
          </form>
        </FormBox>
      </React.Fragment>
    );
  }
}

export default Welcome;
