import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle, FaModx } from "react-icons/fa";

function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="white">
        <Container>
          <Navbar.Brand className="logo" as={Link} to="/">
            <FaModx /> MarketShell
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/inventory">
                Inventory
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Cart
              </Nav.Link>
            </Nav>
            <hr />
            <NavDropdown
              title={
                <>
                  <FaUserCircle style={{ fontSize: "30px" }} /> John
                </>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">My Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Workspace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Setting</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
