import React from 'react'
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <div className="container-fluid header">
            <div className="row">
                <div className="col-10 mx-auto">
                    <Navbar bg="light" expand="lg">
                        {/* <Container className='containe-fluid'> */}
                        <div className="container-fluid">

                            <Navbar.Brand>
                                <Link to="/"><img src={require("../images/logo.png")} alt="" /></Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto align-items-center gap-4">
                                    <Link to="/">Home</Link>
                                    <Link to="/about">About</Link>
                                    <Link to="/service">Service</Link>
                                    <Link to="/contact">Contact</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                        {/* </Container> */}
                    </Navbar>
                </div>
            </div>
        </div>
    )
}

export default NavBar