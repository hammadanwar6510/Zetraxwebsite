import "./navbar.scss";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="navbarmain">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home"><img className="img-fluid" src="\assets\logo.svg" alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Tools" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Features</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Telegram Bot
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">Features</Nav.Link>
                <Nav.Link href="#link">Telegram Bot</Nav.Link>
                <Nav.Link href="#link">Token</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <button className="buttonnav"  >Launch Bot <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <g clip-path="url(#clip0_189_99)">
                <path d="M10.6338 5L13 7.33333L10.6338 9.66667" stroke="white" stroke-linecap="square" />
                <path d="M1 7.33333H12.1549" stroke="white" stroke-linecap="square" />
              </g>
              <defs>
                <clipPath id="clip0_189_99">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg></button>
            <button onClick={handleShow} className="offcanvasbutton"  ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 17H21M3 12H21M3 7H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></button>
          </Container>
        </Navbar>

      </section>



      <Offcanvas placement="top" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="offcanvasheader"> <img className="img-fluid" src="\assets\logo.svg" alt="" /> <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M14 14L1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14 1L1 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvasbody">
          <Nav className="me-auto">
            <NavDropdown title="Tools" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Features</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Telegram Bot
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="anchoroffcanvas" href="#home">Features</Nav.Link>
            <Nav.Link className="anchoroffcanvas" href="#link">Telegram Bot</Nav.Link>
            <Nav.Link className="anchoroffcanvas" href="#link">Token</Nav.Link>
          </Nav>
          <div className="offcanvasbutton">
            <button>Launch Bot
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                <g clip-path="url(#clip0_257_384)">
                  <path d="M11.1338 5L13.5 7.33333L11.1338 9.66667" stroke="white" stroke-linecap="square" />
                  <path d="M1.5 7.33331H12.6549" stroke="white" stroke-linecap="square" />
                </g>
                <defs>
                  <clipPath id="clip0_257_384">
                    <rect width="14" height="14" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
