import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Grid, Button, Jumbotron, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

export class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
    console.log(this.state.email);
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
    console.log(this.state.password);
  }

  submitLogin(event){
    console.log("Submission: " + this.state.password + this.state.email);
  }

  render(){
    return(
      <Grid>
        <Row>
          <Col sm={12} md={6}>
            <Jumbotron>
              <h1>Bienvenido!</h1>
              <br/>
              <p>
                A continuacion, ingrese sus credenciales para poder acceder a todos los servicios de la pagina!
              </p>
            </Jumbotron>
          </Col>
          <Col sm={12} md={6}>
            <form onSubmit={this.submitLogin.bind(this)}>
              <FormGroup
                controlId="emailLoginInput"
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

              <br/>

              <FormGroup
                controlId="passwordLoginInput"
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
                bsStyle="primary" 
                bsSize="large" 
                block
              >Login!
              </Button>
            </form>
          </Col>
        </Row>
        
      </Grid>
    );
  }

}