import * as React from 'react';

//Bootstrap
import Alert from 'react-bootstrap/Alert';
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

function NavigationElements({ title }) {
  //const element = <div></div>;
  const element = (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Navigation
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
            {/*<Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
  return element;
}

export default NavigationElements;
