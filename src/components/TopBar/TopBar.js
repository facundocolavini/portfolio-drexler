import React from 'react';
import {Container,Navbar,Nav} from "react-bootstrap/dist/react-bootstrap.min";

import './topbar.scss';

const TopBar = () => {
    return (

        <Navbar  expand="lg" className='navbar' variant="dark">
            <Container >
                <Navbar.Brand> 
                </Navbar.Brand>
                <Navbar.Toggle className="btn-collapse" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav className="text-center text-lg-right  my-2 my-lg-2">
                        <Nav.Link className="text-dark" href="#about">Sobre mí</Nav.Link>
                        <Nav.Link className="text-dark" href="#projects">Proyectos</Nav.Link>
                        <Nav.Link className="text-dark" href="#tools">Herramientas</Nav.Link>
                        <Nav.Link className="text-light bg-primary" href="#contact">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container> 
        </Navbar>
 
    )
}

export default TopBar
