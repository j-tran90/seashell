import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import { useAuth } from "../contexts/AuthContext";
import Wave from "../components/Wave";

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <>
      <div className="centered">
        <MDBContainer>
          <MDBRow>
            <div className="text-animation text-center">Welcome</div>
          </MDBRow>
          <MDBRow className="text-center">
            <Link to="/register">
              {!currentUser ? <MDBBtn>Sign Up</MDBBtn> : ""}
            </Link>
          </MDBRow>
        </MDBContainer>
      </div>
      <Wave />
    </>
  );
}
