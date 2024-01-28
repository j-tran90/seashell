/*eslint-disable no-unused-vars*/
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
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
      <Navbar collapseOnSelect expand="lg" bg="white">
        <Container>
          <Navbar.Brand className="logo" as={Link} to="/">
            <GiPalmTree /> SeaShell
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/shop" hidden>
                Browse Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" hidden>
                Cart
              </Nav.Link>
              {!currentUser ? null : (
                <Nav.Link as={Link} to="/chatroom">
                  Chat
                </Nav.Link>
              )}
            </Nav>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
