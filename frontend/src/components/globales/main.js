import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { Col, Row, Grid, Clearfix, Navbar, Nav, NavItem } from "react-bootstrap";


import { SingupForm } from "../login/signupForm";
import { LoginForm } from "../login/loginForm";
import { About } from "../globales/about";
import { CommonUser } from "../login/users/commonUser";
import { EnterpriceUser } from "../login/users/enterpriceUser";
import { LocationList } from "../locationsList/locationList";
import { LocationDetail } from "../locationsList/locationDetail";
import { EventList } from "../eventList/eventList";
import { EventDetail } from "../eventList/eventDetail";

export class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={About} />
        <Route path="/signup" component={SingupForm} />
        <Route path="/login" component={LoginForm} />

        <Route path="/user/:idUser" component={CommonUser} />
        <Route path="/enterprice/:idEnterprice" component={EnterpriceUser} />

        <Route path="/locations" component={LocationList} />
        <Route path="/locations/:idLocation" component={LocationDetail} />
        <Route path="/events" component={EventList} />
        <Route path="/events/:idEvent" component={EventDetail} />

      </Switch>
    );
  }
}

