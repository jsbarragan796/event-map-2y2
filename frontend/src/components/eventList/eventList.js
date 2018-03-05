import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Grid, Clearfix } from "react-bootstrap";

import { EventMap } from "./eventMap"

export class EventList extends Component {
  render() {
    return (
      <Grid >
        <Row>
          <Col sm={4} md={4}>

          </Col>
          <Col sm={8} md={8}>
            <EventMap />
          </Col>
        </Row>
      </Grid>
    );
  }
}