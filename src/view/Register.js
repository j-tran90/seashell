import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { RiShieldCrossLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";

function Register() {
  return (
    <div className="loginForm centered">
      <MDBContainer>
        <MDBRow>
          <form>
            <p className="text-center">
              <RiShieldCrossLine className="userShield" />
            </p>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                style={{ margin: "auto" }}
              />
              <MDBInput
                label="Choose your password"
                icon="lock"
                group
                type="password"
                validate
                style={{ margin: "auto" }}
              />
              <MDBInput
                label="Confirm your password"
                icon="lock"
                group
                type="password"
                validate
                style={{ margin: "auto" }}
              />
            </div>
            <div className="text-center">
              <MDBBtn>Register</MDBBtn>
            </div>
          </form>
          <hr style={{ color: "grey", marginTop: "25px", maxWidth: "480px" }} />
          <div className="text-center">
            Already have an account?
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </div>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Register;
