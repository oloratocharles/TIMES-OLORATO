import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">NY TIMES MOST POPULAR</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="leftmenu">
        <Nav className="navigationbar">
          <Nav.Item><Nav.Link href="/">Where The Crawdads Sing</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">Malibu Rising</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/about">The Silent Patient</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/about">Of  Women And Salt</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)