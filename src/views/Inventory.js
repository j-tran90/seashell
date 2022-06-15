import {
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

function Inventory() {
  const { currentUser } = useAuth();
  return (
    <>
      <div className="innercontent">
        <MDBContainer>
          <MDBRow>
            <div className="heading">
              <h1>Inventory </h1>
            </div>
          </MDBRow>
          <MDBRow className="mb-4 mt-4 w-50">
            <MDBBtn>Manage Inventory</MDBBtn>
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
