import React, { Component } from 'react'
import {Navbar, Nav, MenuItem, NavItem } from 'react-bootstrap'

export default class Menu extends Component{
  render(){
    return(
      <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#">SaluD/Os</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={2} href="#">Sign Up</NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
  }
}
