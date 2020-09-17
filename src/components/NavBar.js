import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';


export default function NavBar() {
    return (
        <div id="NavBar">
           {/* <!-- Navigation Bar --> */}
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="index.html">Mallory | Shawn</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav ml-auto">
                    <Nav.Link className="nav-item" href="index.html">Home</Nav.Link>
                    <Nav.Link className="nav-item" href="/index.html#gallery">Gallery</Nav.Link>
                    <Nav.Link className="nav-item" href="/RSVP">RSVP</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
