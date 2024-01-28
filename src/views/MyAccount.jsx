/*eslint-disable no-unused-vars*/
import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  Accordion,
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";

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
      <Container>
        <div className="display-1">My Account</div>
        <Container>
          <Card className="mt-4">
            <Card>
              <h2>
                <img src={currentUser.photoURL} alt="" />
                Profile
              </h2>
              <hr />
              <h4>Name: {currentUser && currentUser.displayName}</h4>
              <h4>Email: {currentUser && currentUser.email}</h4>
              <h4>
                Account Created:
                {creationDate}
              </h4>
            </Card>
          </Card>

          <Row>
            {/* Update password  */}
            <Col md={6}>
              <Card className="mt-2">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Change Password</Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        <Row>
                          <input
                            className="mt-3"
                            id="password-current"
                            label="Current Password"
                            placeholder="Current Password"
                            icon="lock"
                            group="true"
                            type="password"
                            ref={passwordRef}
                            required
                            style={{ margin: "auto" }}
                          />
                        </Row>
                        <Row>
                          <input
                            className="mt-3 "
                            id="password-new"
                            label="New Password"
                            placeholder="New Password"
                            icon="lock"
                            group="true"
                            type="password"
                            ref={passwordRef}
                            required
                            style={{ margin: "auto" }}
                          />
                        </Row>
                        <Row>
                          <input
                            className="mt-3"
                            id="password-confirm"
                            label="Confirm New Password"
                            placeholder="Confirm New Password"
                            icon="lock"
                            group="true"
                            type="password"
                            ref={passwordConfirmRef}
                            required
                            style={{ margin: "auto" }}
                          />
                        </Row>

                        <Container className="mt-3 text-center">
                          <Button
                            className="me-3 w-50"
                            onClick=""
                            variant="primary"
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
                        </Container>
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card>
            </Col>

            {/* Settings */}
            <Col md={6}>
              <Card className="mt-2">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Settings</Accordion.Header>
                    <Accordion.Body>
                      <Container className="text-center">
                        <Button variant="danger" onClick={deleteAccount}>
                          Delete
                        </Button>
                      </Container>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card>
            </Col>
          </Row>

          <Container className="text-center mt-3">
            <Button variant="link" onClick={handleLogout}>
              Logout
            </Button>
          </Container>
        </Container>
      </Container>
    </>
  );
}
