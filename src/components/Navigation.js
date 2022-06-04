/*eslint-disable no-unused-vars*/
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaUserCircle, FaModx } from "react-icons/fa";
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
                  <FaUserCircle style={{ fontSize: "30px" }} />{" "}
                  {currentUser && currentUser.email}
                </>
              }
              id="collasible-nav-dropdown"
            >
              {!currentUser ? (
                ""
              ) : (
                <>
                  <NavDropdown.Item as={Link} to="/myaccount">
                    My Account
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Workspace
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Setting
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
