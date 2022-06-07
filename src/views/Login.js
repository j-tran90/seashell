import React, { useRef, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCol,
  MDBCheckbox,
  MDBTable,
} from "mdb-react-ui-kit";
import { RiShieldUserLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import Wave from "../components/Wave";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, googleLogin } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/myaccount", { replace: true });
    } catch {
      setError("Failed to login");
    }
    setLoading(false);
  }
  return (
    <>
      <div className="loginForm centered">
        <MDBContainer>
          <MDBRow>
            <Form onSubmit={handleSubmit}>
              <p className="text-center">
                <RiShieldUserLine className="userShield" />
              </p>
              {error && <Alert variant="danger">{error}</Alert>}
              <div className="grey-text">
                <MDBInput
                  className="mt-3"
                  id="id"
                  label="Email"
                  icon="lock"
                  group
                  type="email"
                  inputRef={emailRef}
                  required
                />
                <MDBInput
                  className="mt-3"
                  id="password"
                  label="Password"
                  icon="lock"
                  group
                  type="password"
                  inputRef={passwordRef}
                  required
                />
              </div>
              <div className="text-center mt-4">
                <MDBBtn className="w-50" disabled={loading} type="submit">
                  Login
                </MDBBtn>
              </div>
              <MDBRow className="mt-4">
                <MDBCol className="d-flex justify-content-center">
                  <MDBCheckbox id="rememberMe" label="Remember me" />
                </MDBCol>
                <MDBCol>
                  <a href="#!">Forgot password?</a>
                </MDBCol>
              </MDBRow>
            </Form>
            <hr className="mt-4" style={{ maxWidth: "480px" }} />
            <div className="text-center">
              <FcGoogle
                type="button"
                onClick={googleLogin}
                style={{ fontSize: "40px" }}
              />
            </div>
            <hr className="mt-4" style={{ maxWidth: "480px" }} />
            <div className="text-center mt-2">
              Don't have an account?
              <div>
                <Link as={Link} to="/register">
                  Register
                </Link>
              </div>
            </div>
          </MDBRow>
        </MDBContainer>
      </div>
      <Wave />
    </>
  );
};

export default Login;
