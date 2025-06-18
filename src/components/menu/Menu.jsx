import React from 'react'
import {Container, Navbar, Nav,} from "react-bootstrap"
import "./menu.css"
import logo from "../../assets/logo.png"

const Menu = () => {
  return (
    <>
      <Navbar expand="lg" className="navMain">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#banner">Home</Nav.Link>
            <Nav.Link href="#about">About us</Nav.Link>
            <Nav.Link href="#sermons">Sermon</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
          </Nav>
          <Nav className="ms-auto last_child">
            <Nav.Link href="#footer">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Menu