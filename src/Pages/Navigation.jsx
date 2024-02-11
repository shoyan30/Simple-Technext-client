// import React from 'react';

import { useContext } from "react";
import {  Button, Container,  Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "./Provider/AuthProvider";
import { Link } from "react-router-dom";

const Navigation = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <Container className="mb-4 sticky-top">
            <Navbar collapseOnSelect expand="lg" className="bg-info bg-gradient ">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className="text-white fs-5" href="/">Home</Nav.Link>
                            <Nav.Link className="text-white fs-5" href="/about">About</Nav.Link>
                            <Nav.Link className="text-white fs-5" href="/contact">Contact</Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            <Nav.Link >
                            
                                {user ? <Button onClick={handleLogOut} variant="danger">Log Out</Button> :
                                    <Link to='/login'><Button  variant="success">Login</Button></Link> 
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Navigation;