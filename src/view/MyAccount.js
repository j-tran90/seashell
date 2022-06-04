/*eslint-disable no-unused-vars*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Card } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function MyAccount() {
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
      <h2 className="text-center mt-4">
        Hi! {currentUser && currentUser.email}
      </h2>

      <div className="innercontent">
        <Container>
          <Card>
            <Card.Body>
              <h2 className="text-center mt-4">Update Password</h2>
            </Card.Body>
            <Card.Body className="mt-2">
              <h2 className="text-center">Settings</h2>
            </Card.Body>
          </Card>

          <Button className="w-100 mt-4" onClick={handleLogout}>
            Logout
          </Button>
        </Container>
      </div>
    </>
  );
}
