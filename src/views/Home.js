import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import Wave from "../components/Wave";

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <>
      <div className="">
        <div className="text-animation text-center display-1">Hello</div>
      </div>
      <div className="text-center">
        <Link to="/register">
          {!currentUser ? (
            <button className="btn btn-primary" type="button">
              Sign Up
            </button>
          ) : (
            ""
          )}
        </Link>
      </div>
      <Wave />
    </>
  );
}
