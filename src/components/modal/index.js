import React, { Component } from "react";
import {
  Modal,
  Background,
  ModalWrapp,
  ModalContainer,
  Close
} from "./index.styled";

class ModalComponent extends Component {
  render() {
    return (
      <Modal
        id="textModal"
        className={this.props.status === true ? "open" : ""}
      >
        <Background onClick={this.props.close} />
        <ModalWrapp>
          <ModalContainer>
            <Close onClick={this.props.close}>x</Close>
            {this.props.children}
          </ModalContainer>
        </ModalWrapp>
      </Modal>
    );
  }
}

export default ModalComponent;
