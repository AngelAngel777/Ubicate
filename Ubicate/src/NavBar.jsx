import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const options = [
  {
    name: 'Disable backdrop',
    scroll: false,
    backdrop: false,
    placement: 'end',
  }
];

function NavBar({ name, handleShow, ...props }) {
  return (
    <div>
      <Navbar className='Nav' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='botonesNav' href="#home">Home</Nav.Link>
            <Nav.Link className='botonesNav' href="#features">Features</Nav.Link>
            <Nav.Link className='botonesNav' href="#pricing">Pricing</Nav.Link>
            <Button variant="primary" onClick={handleShow} className="me-2 offCanva">
              {name}
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas show={props.show} onHide={props.handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav.Link href="#home">Home</Nav.Link>
        <hr />
            <Nav.Link href="#features">Features</Nav.Link>
            <hr />
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <NavBar name={name} show={show} handleClose={handleClose} handleShow={handleShow} {...props} />
    </div>
  );
}

function Example() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

export default Example;
