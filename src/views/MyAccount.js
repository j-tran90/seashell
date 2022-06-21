/*eslint-disable no-unused-vars*/
import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Accordion, Form, Button } from "react-bootstrap";
import {
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { FaEdit } from "react-icons/fa";

export default function MyAccount() {
  const { currentUser, logout, deleteAccount } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  //TO FIX
  let creationDate = currentUser?.metadata.creationDate;

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
      <div className="innercontent">
        <MDBContainer>
          <MDBRow>
            <div className="heading">
              <h1>My Account </h1>
            </div>
          </MDBRow>
          <MDBContainer className="">
            <MDBCard className="mt-4">
              <MDBCardBody>
                <h2 className="text-center mb-4">
                  <img src={currentUser.photoURL} />
                  Profile
                </h2>
                <hr />
                <h4>Name: {currentUser && currentUser.displayName}</h4>
                <h4>Email: {currentUser && currentUser.email}</h4>
                <h4>
                  Account Created:
                  {creationDate}
                </h4>
              </MDBCardBody>
            </MDBCard>
            <div className="loginForm">
              <MDBCard className="mt-2">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className="text-center">Update Password</div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        <MDBInput
                          className="mt-3"
                          id="password"
                          label="New Password"
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
                          label="Confirm New Password"
                          icon="lock"
                          group
                          type="password"
                          inputRef={passwordConfirmRef}
                          required
                          style={{ margin: "auto" }}
                        />
                        <MDBContainer className="mt-3 text-center">
                          <Button
                            className="me-3 w-50"
                            onClick=""
                            type="submit"
                            disabled
                          >
                            Update
                          </Button>
                          <Button
                            className=""
                            onClick=""
                            variant="warning"
                            type="submit"
                            disabled
                          >
                            Cancel
                          </Button>
                        </MDBContainer>
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </MDBCard>
              <MDBCard className="mt-2">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Settings</Accordion.Header>
                    <Accordion.Body>
                      <MDBContainer className="text-center">
                        <Button
                          className=""
                          variant="danger"
                          onClick={deleteAccount}
                        >
                          Delete
                        </Button>
                      </MDBContainer>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </MDBCard>
            </div>
            <MDBContainer className="text-center mt-3">
              <Button variant="link" onClick={handleLogout}>
                Logout
              </Button>
            </MDBContainer>
          </MDBContainer>
        </MDBContainer>
      </div>
    </>
  );
}
