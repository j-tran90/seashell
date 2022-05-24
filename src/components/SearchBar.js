import React from 'react'
import { Nav, Button, Container, Navbar, NavDropdown, Form, FormControl} from 'react-bootstrap'
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <>
    <Container>
    <Form className="d-flex ">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success"><BsSearch /></Button>
      </Form>
    </Container>
    </>
  )
}

export default SearchBar