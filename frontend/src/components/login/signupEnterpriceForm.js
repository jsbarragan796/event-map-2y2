import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Grid, Button, Jumbotron, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

export class SingupEnterpriceForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: "",
      email: "",
      password: "",
      lat: 0,
      lng: 0,
    }
  }

  getPasswordValidationState() {
    const length = this.state.password.length;
    if (length > 5) return 'success';
    else return 'error';
  }

  changeCity(event) {
    this.setState({ city: event.target.value });
    console.log(this.state.city);
  }

  changeLat(event) {
    this.setState({ lat: event.target.value });
    console.log(this.state.lat);
  }

  changeLng(event) {
    this.setState({ lng: event.target.value });
    console.log(this.state.lng);
  }

  changeName(event) {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  }

  changeEmail(event) {
    console.log("1: " + this.state.email);
    this.setState({ email: event.target.value });
    console.log("2: " + this.state.email);
  }
  changePassword(event) {
    this.setState({ password: event.target.value });
    console.log(this.state.password);
  }

  submitSignup(event) {
    if (this.state.password.length > 0 && this.state.email.length > 0 &&
        this.state.name.length > 0 && this.state.city > 0) {

    }
    else {

    }
    console.log("Submission: " + this.state.password + this.state.email);
  }
  
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12} md={6}>
            <Jumbotron>
              <h1>Registre a su Empresa!</h1>
              <br />
              <p>
                Por favor, ingrese sus datos basicos, su correo, una contraseña y las coordenadas geograficas de su local
                para poder crear la cuenta de su empresa!
              </p>
            </Jumbotron>
          </Col>
          <Col sm={12} md={6}>
            <form>

              <FormGroup
                controlId="nameSignupInput"
              >
                <ControlLabel>Name</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.name}
                  placeholder="Enter your name"
                  onChange={this.changeName.bind(this)}
                  required
                />
                <FormControl.Feedback />
              </FormGroup>

              <FormGroup
                controlId="citySignupInput"
              >
                <ControlLabel>City</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.city}
                  placeholder="Enter your city"
                  onChange={this.changeCity.bind(this)}
                  required
                />
                <FormControl.Feedback />
              </FormGroup>

              <FormGroup
                controlId="latSignupInput"
              >
                <ControlLabel>lattitude</ControlLabel>
                <FormControl
                  type="number"
                  value={this.state.lat}
                  placeholder="Enter your lattitude"
                  onChange={this.changeLat.bind(this)}
                  required
                />
                <FormControl.Feedback />
              </FormGroup>

              <FormGroup
                controlId="lngSignupInput"
              >
                <ControlLabel>Longitude</ControlLabel>
                <FormControl
                  type="number"
                  value={this.state.lng}
                  placeholder="Enter your longitude"
                  onChange={this.changeLng.bind(this)}
                  required
                />
                <FormControl.Feedback />
              </FormGroup>

              <br/>

              <FormGroup
                controlId="emailSignupInput"
              >
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  type="email"
                  value={this.state.email}
                  placeholder="Enter email"
                  onChange={this.changeEmail.bind(this)}
                  required
                />
                <FormControl.Feedback />
              </FormGroup>

              <FormGroup
                controlId="passwordSignupInput"
                validationState={this.getPasswordValidationState()}
              >
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  value={this.state.password}
                  placeholder="Enter password"
                  onChange={this.changePassword.bind(this)}
                  required
                />
                <FormControl.Feedback />
              </FormGroup>

              <Button
                onClick={this.submitSignup.bind(this)}
                bsStyle="primary"
                bsSize="large" block
              >SignUp!
              </Button>
            </form>
          </Col>
        </Row>

      </Grid>
    )
  }
}