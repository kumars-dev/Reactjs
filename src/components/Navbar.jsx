import React,{useState} from 'react'
import {Form} from "react-bootstrap";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import  NavDropdown  from 'react-bootstrap/NavDropdown';
import { BiBookAlt,BiMoon,BiSun } from 'react-icons/bi';
const Header = ({
    isDark, setIsDark
}) => {
  return (
   <Navbar expand="lg"
   className="bg-transparent mx-auto"
   style={{ maxWidth: "700px" }}
 >
    <Container>
    <Navbar.Brand>
          <BiBookAlt
            style={{
              color: "gray",
              fontSize: "45px",
            }}
          />
          <span>Lexicon</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-4">
            <NavDropdown
              title="Serif"
              className={`${isDark ? "text-light" : "text-dark"}`}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>Serif</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Monospace</NavDropdown.Item>
            </NavDropdown>
            <div className="d-flex gap-1 align-items-center">
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  checked={isDark}
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      setIsDark(true);
                    } else {
                      setIsDark(false);
                    }
                  }}
                />
              </Form>
              {isDark ? <BiSun /> : <BiMoon />}
            </div>
          </Nav>
        </Navbar.Collapse>
    </Container>
 </Navbar>
  )
}

export default Header;