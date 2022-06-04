import React from "react";
import { Table } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

function Inventory() {
  const { currentUser } = useAuth();
  return (
    <>
      <div className="heading">
        <h1>Inventory -</h1>
        <h4> {currentUser && currentUser.email}</h4>
      </div>
      <div className="innercontent">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Inventory;
