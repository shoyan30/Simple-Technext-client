// import React from 'react';

import {  Container,  Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
    return (
        <Container className="mb-4 sticky-top">
            <Navbar collapseOnSelect expand="lg" className="bg-warning bg-gradient ">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className="text-white fs-5" href="/">Home</Nav.Link>
                            <Nav.Link className="text-white fs-5" href="/about">About</Nav.Link>
                            <Nav.Link className="text-white fs-5" href="/contact">Contact</Nav.Link>
                        </Nav>
                        {/* <Nav className='d-flex align-items-center'>
                            {user && <Nav.Link href="#deets">
                                <FaUserCircle className='fs-2'></FaUserCircle>
                            </Nav.Link>
                            }
                            <Nav.Link >
                                {user ? <Button onClick={handleLogOut} variant="secondary">Log Out</Button> :
                                    <Link to='/login'><Button  variant="secondary">Login</Button></Link> &&
                                    <Link to='/register'><Button variant="secondary">Registration</Button></Link>
                                }
                            </Nav.Link>
                        </Nav> */}

                        <nav className="d-flex">
                           
                        </nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Navigation;