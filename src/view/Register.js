import React, { useRef, useState } from "react";
import { MDBContainer, MDBRow, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { RiShieldCrossLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { Nav, Alert, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { register, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await register(emailRef.current.value, passwordRef.current.value);
      navigate("/myaccount", { replace: true });
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  /**TO DO */
  // if (currentUser !== null) {
  //   try {
  //     setError("");
  //     setLoading(true);
  //     navigate("/myAccount", { replace: true });
  //   } catch {
  //     setError("Already a user");
  //   }
  // }

  return (
    <>
      <div className="loginForm centered">
        <MDBContainer>
          <MDBRow>
            <Form onSubmit={handleSubmit}>
              <p className="text-center">
                <RiShieldCrossLine className="userShield" />
              </p>
              {currentUser}
              {error && <Alert variant="danger">{error}</Alert>}
              <div className="form-group grey-text">
                <MDBInput
                  className="mt-3"
                  id="name"
                  label="Enter Name"
                  icon="envelope"
                  group
                  type="name"
                  inputRef={nameRef}
                  required
                  style={{ margin: "auto" }}
                />
                <MDBInput
                  className="mt-3"
                  id="email"
                  label="Enter Email"
                  icon="envelope"
                  group
                  type="email"
                  inputRef={emailRef}
                  required
                  style={{ margin: "auto" }}
                />
                <MDBInput
                  className="mt-3"
                  id="password"
                  label="Choose Password"
                  icon="lock"
                  group
                  type="password"
                  inputRef={passwordRef}
                  required
                  style={{ margin: "auto" }}
                />
                <MDBInput
                  className="mt-3"
                  id="password-confirm"
                  label="Confirm Password"
                  icon="lock"
                  group
                  type="password"
                  inputRef={passwordConfirmRef}
                  required
                  style={{ margin: "auto" }}
                />
                <div className="text-center mt-4">
                  <MDBBtn disabled={loading} type="submit">
                    Submit
                  </MDBBtn>
                </div>
              </div>
            </Form>
            <hr className="mt-4" />
            <div className="text-center mt-2">
              Already have an account?
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </div>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}
