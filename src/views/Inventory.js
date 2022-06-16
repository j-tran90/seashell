import {
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import React from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { BiAddToQueue } from "react-icons/bi";
import { VscOpenPreview } from "react-icons/vsc";
import UploadForm from "../components/UploadForm";

function Inventory() {
  const { currentUser } = useAuth();
  return (
    <>
      <div className="innercontent">
        <MDBContainer>
          <MDBRow>
            <div className="heading">
              <h1>{currentUser && currentUser.displayName}'s Inventory </h1>
            </div>
          </MDBRow>
          <MDBRow className="mb-4 mt-4">
            {/* <Button className="w-25">
              Add Item <BiAddToQueue />
            </Button> */}

            {/* <Button className="w-25 ms-3">
              Preview Vendor <VscOpenPreview />
            </Button> */}

            <UploadForm />
          </MDBRow>
          <MDBRow>
            <MDBTable striped hover>
              <MDBTableHead dark>
                <tr>
                  <th scope="col" className="w-10">
                    #
                  </th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>{currentUser && currentUser.displayName}</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default Inventory;
