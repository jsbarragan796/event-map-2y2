import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Grid, Clearfix, Panel } from "react-bootstrap";

import { LocationMap } from "./locationMap";

export class LocationList extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      locations:[],
      areaFilter:"",
      locationNameFilter:"",
    };
  }

  componentWillMount(){
    //peticion http
  }
  
  render() {
    return (
      <Grid >
        <Row>
          <Col sm={4} md={4}>
            <Panel>
              <Panel.Body>
                <form>
                  <FormGroup controlId="locationFormSelect">
                    <ControlLabel>Buscar por Zona</ControlLabel>
                    <FormControl componentClass="select" placeholder="seleccionar zona">
                      <option value="select">Zona Rosa</option>
                      <option value="other">Zona T</option>
                      <option value="other">Parque de la 93</option>
                      <option value="other">Calle 85</option>
                    </FormControl>
                  </FormGroup>
                  <FormGroup controlId={id}>
                    <ControlLabel>Buscar Lugar</ControlLabel>
                    <FormControl type="text" placeholder="..." />
                  </FormGroup>
                </form>
              </Panel.Body>
            </Panel>
            {this.state.locations.map((l, index)=>{
              return (
                <Panel bsStyle="primary" key={index}>
                  <Panel.Heading>
                    <Panel.Title componentClass="h3">{l.name}</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <p>Contact: {l.email}</p>
                  </Panel.Body>
                </Panel>
              );
            })}
          </Col>
          <Col sm={8} md={8}>
            <LocationMap/>
          </Col>
        </Row>
      </Grid>
    );
  }
}