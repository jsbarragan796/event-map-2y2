import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { Col, Row, Grid, Clearfix, Navbar, Nav, NavItem } from "react-bootstrap";

import { SingupCommonForm } from "../login/signupCommonForm";
import { SingupEnterpriceForm } from "../login/signupEnterpriceForm";
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
        <Route exact path="/" component={About} />
        <Route exact path="/signupUser" component={SingupCommonForm} />
        <Route exact path="/signupBusiness" component={SingupEnterpriceForm} />
        <Route exact path="/login" component={LoginForm} />

        <Route path="/user" component={CommonUser} />
        <Route path="/enterprice" component={EnterpriceUser} />

        <Route exact path="/locations" component={LocationList} />
        
        <Route exact path="/events" component={EventList} />
        

      </Switch>
    );
  }
}

