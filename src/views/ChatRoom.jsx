import React, { useState, useRef } from "react";
import ChatMessage from "../components/ChatMessage";
import { Container, Row, Button, Form, Col } from "react-bootstrap";
import { auth, firestore } from "../config/Firebase";
import firebase from "firebase/compat/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { IoIosSend } from "react-icons/io";
import "../stylesheets/Chatbox.css";

export default function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(100);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    this.dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Container>
        <div className="display-1">Chat</div>
        <Row>
          <main className="chat-main">
            {messages &&
              messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

            <div ref={dummy}></div>
          </main>
        </Row>

        <Row className="mt-4 chat-form container">
          <Form onSubmit={sendMessage} className="">
            <Col>
              <input
                className="chat-input"
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
                placeholder="Enter Message"
              />
              <Button
                type="submit"
                disabled={!formValue}
                className="chat-button"
              >
                <IoIosSend />
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </>
  );
}
