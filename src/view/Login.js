import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { RiShieldUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";

const Login = () => {
  return (
    <div className="loginForm centered">
      <MDBContainer>
        <MDBRow>
          <form>
            <p className="text-center">
              <RiShieldUserLine className="userShield" />
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
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                style={{ margin: "auto" }}
              />
            </div>
            <div className="text-center">
              <MDBBtn>Login</MDBBtn>
            </div>
          </form>
          <hr style={{ marginTop: "25px", maxWidth: "480px" }} />
          <div className="text-center">
            Don't have an account?
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
          </div>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Login;
