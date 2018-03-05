import React, { Component } from "react";
import { Jumbotron, Col, Row, Grid, Clearfix, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export class SingupForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }
  
  render() {
    return (
      <Grid fluid="true">
        <Jumbotron>
          <h2>Sign Up to the Website!!</h2>
          <p>
            Ingrese sus credenciales para poder ingresar!
          </p>
        </Jumbotron>
      </Grid>
    )
  }
}