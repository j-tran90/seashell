import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import Wave from "../components/Wave";

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <>
      <div className="centered">
        <div className="text-animation text-center">Welcome</div>
        {/* <MDBContainer>
          <MDBRow></MDBRow>
          <MDBRow className="text-center">
            <Link to="/register">
              {!currentUser ? <MDBBtn className="w-50">Sign Up</MDBBtn> : ""}
            </Link>
          </MDBRow>
        </MDBContainer> */}
      </div>
      <Wave />
    </>
  );
}
