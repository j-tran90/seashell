import React, { useRef, useState } from "react";

import { RiShieldCrossLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Form, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import Wave from "../components/Wave";

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

  return (
    <>
      <div className="loginForm">
        <div className="container text-center">
          <RiShieldCrossLine className="userShield" />
          <Form onSubmit={handleSubmit}>
            {currentUser}
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="container">
              <div className="row">
                <input
                  className="mt-3"
                  id="name"
                  label="Enter Name"
                  placeholder="Enter Name"
                  icon="envelope"
                  group="true"
                  type="name"
                  ref={nameRef}
                  required
                  style={{ border: "1px solid #2bbbad" }}
                />
              </div>

              <div className="row">
                <input
                  className="mt-3"
                  id="email"
                  label="Enter Email"
                  placeholder="Enter Email"
                  icon="envelope"
                  group="true"
                  type="email"
                  ref={emailRef}
                  required
                  style={{ border: "1px solid #2bbbad" }}
                />
              </div>
              <div className="row">
                <input
                  className="mt-3"
                  id="password"
                  label="Choose Password"
                  placeholder="Choose Password"
                  icon="lock"
                  group="true"
                  type="password"
                  ref={passwordRef}
                  required
                  style={{ border: "1px solid #2bbbad" }}
                />
              </div>
              <div className="row">
                {" "}
                <input
                  className="mt-3"
                  id="password-confirm"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  icon="lock"
                  group="true"
                  type="password"
                  ref={passwordConfirmRef}
                  required
                  style={{ border: "1px solid #2bbbad" }}
                />
              </div>

              <div className="text-center mt-4">
                <Button className="" disabled={loading} type="submit">
                  Submit
                </Button>
              </div>
            </div>
          </Form>
          <hr className="mt-4" />
          <div className="text-center mt-2">
            Already have an account?
            <div>
              <Link as={Link} to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Wave />
    </>
  );
}
