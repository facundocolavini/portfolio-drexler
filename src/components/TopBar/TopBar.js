import React from 'react'
import {Container,Navbar,Nav} from "react-bootstrap/dist/react-bootstrap.min"
const TopBar = () => {
    return (
 
                <Navbar collapseOnSelect expand="lg" className='navbar' bg="light"  variant="dark">
                    <Container >
                        <Navbar.Brand>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto"></Nav>
                            <Nav className="my-2 my-lg-2">
                                <Nav.Link className="text-right text-dark" href="#action1">Sobre mí</Nav.Link>
                                <Nav.Link className="text-right text-dark" href="#action2">Proyectos</Nav.Link>
                                <Nav.Link className="text-right text-dark" href="#action3">Herramientas</Nav.Link>
                                <Nav.Link className="text-right text-dark bg-primary" href="#action4"  bg="primary">Contacto</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container> 
                </Navbar>
    )
}

export default TopBar
