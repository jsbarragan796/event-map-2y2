import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Grid, Clearfix } from "react-bootstrap";


export class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:"",
      id: "",
      city: "",
      email: "",
      password: "",
      retypePassword: "",
    }
  }

  render(){
    return(
      <Grid >
        <p>login</p>
      </Grid>
    );
  }

}