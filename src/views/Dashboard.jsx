import React from "react";
import { Container, Card } from "react-bootstrap";

export default function Dashboard() {
  return (
    <>
      <Container>
        <div className="display-1">Dashboard</div>
        <Card>Chat Room 1</Card>
        <Card>Chat Room 2</Card>
        <Card>Chat Room 3</Card>
      </Container>
    </>
  );
}
