/*eslint-disable no-unused-vars*/
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Form,
  Button,
} from "react-bootstrap";
import { FaUserCircle, FaModx } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import { useAuth } from "../contexts/AuthContext";

function Navigation() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login", { replace: true });
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container>
            <Navbar.Brand className="logo" as={Link} to="/">
              <GiPalmTree /> <span className="logo-text">SeaShell</span>
            </Navbar.Brand>
            <Navbar.Toggle
              className="me-auto"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  className="logo"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  <GiPalmTree /> SeaShell
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/shop" hidden>
                    Browse Shop
                  </Nav.Link>
                  <Nav.Link as={Link} to="/cart" hidden>
                    Cart
                  </Nav.Link>
                  <Nav.Link as={Link} to="/chatroom">
                    Chat
                  </Nav.Link>

                  {/* FOR PRODUCTION */}
                  {/* {!currentUser ? null : (
                    <Nav.Link as={Link} to="/chatroom">
                      Chat
                    </Nav.Link>
                  )} */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <NavDropdown
              title={
                <>
                  {!currentUser ? (
                    <FaUserCircle style={{ fontSize: "40px" }} />
                  ) : (
                    <img src={currentUser.photoURL} alt="..." />
                  )}

                  {currentUser && currentUser.displayName}
                </>
              }
              id="collasible-nav-dropdown"
            >
              {!currentUser ? null : (
                <>
                  <NavDropdown.Item as={Link} to="/myaccount">
                    My Account
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/inventory" hidden>
                    Inventory
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </>
              )}

              <NavDropdown.Item>
                {!currentUser ? (
                  <NavDropdown.Item onClick={handleLogout}>
                    Login
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                )}
              </NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigation;
