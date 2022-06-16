import React from "react";
import UploadForm from "../components/UploadForm";
import {
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";

export default function Upload() {
  return (
    <>
      <div className="innercontent">
        <MDBContainer>
          <UploadForm />
        </MDBContainer>
      </div>
    </>
  );
}
