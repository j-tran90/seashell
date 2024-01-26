import React, { useRef, useState } from "react";

import { RiShieldUserLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Form, Button } from "react-bootstrap";
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
      <div className="loginForm container text-center">
        <Form onSubmit={handleSubmit}>
          <RiShieldUserLine className="userShield" />

          {error && <Alert variant="danger">{error}</Alert>}
          <div className="container">
            <div className="row">
              <input
                className="mt-3"
                id="id"
                label="Email"
                icon="lock"
                group
                type="email"
                inputRef={emailRef}
                required
                style={{ border: "1px solid #2bbbad" }}
              />
            </div>
            <div className="row">
              <input
                className="mt-3"
                id="password"
                label="Password"
                icon="lock"
                group
                type="password"
                inputRef={passwordRef}
                required
                style={{ border: "1px solid #2bbbad" }}
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <Button className="w-50" disabled={loading} type="submit">
              Login
            </Button>
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-center">
              <div id="rememberMe" label="Remember me" />
            </div>
            <div className="text-center">
              <a href="#!">Forgot password?</a>
            </div>
          </div>
        </Form>{" "}
        <hr className="mt-4" />
        <div className="text-center">
          <FcGoogle
            type="button"
            onClick={googleLogin}
            style={{ fontSize: "40px" }}
          />
        </div>
        <hr className="mt-4" />
        <div className="text-center mt-2">
          Don't have an account?
          <div>
            <Link as={Link} to="/register">
              Register
            </Link>
          </div>
        </div>
        <>
          <Wave />
        </>
      </div>
    </>
  );
};

export default Login;
