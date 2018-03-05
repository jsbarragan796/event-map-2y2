import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";


export class NavHeader extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link href="/" to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} componentClass={Link} href="/LocationList" to="/LocationList">
              Buscar Lugares
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/EventList" to="/EventList">            
              Buscar Eventos
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/login" to="/login">
              Login
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/signupUser" to="/signupUser">
              Signup
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/signupBusiness" to="/signupBusiness">
              Signup as Business
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}