import React from 'react';
<<<<<<< HEAD
import { Container, Row, Col } from "react-bootstrap/dist/react-bootstrap.min";
=======
import {Container, Row, Col, Link} from "react-bootstrap/dist/react-bootstrap.min";
>>>>>>> 9e499d7987de5565e0d163108cd52a7f9c5cd982
import './footer.scss';

const Footer = () => {
  return (
    <footer className="bkg-footer ">
    <Container  bg={'blue'} id="footer">
        <Row className="text-center mt-5">
            <Col xs={12} md={12}>
                <p className="footer-title">Drexler Wilvins Sylvain</p>
            </Col>
        </Row>
        <Row className="text-center">
            <Col xs={12} md={12}>
                <section className="links-sections">
                    <a className="link-footer" href="#about">Sobre mí</a>
                    <a className="link-footer" href="#projects">Proyectos</a>
                    <a className="link-footer" href="#tools">Herramientas</a>
                    <a className="link-footer" href="#contact">Contacto</a>
                    <a className="link-footer" href="#intro">Inicio</a>
                </section>
                <div class='line-separator'></div>
            </Col>
        </Row>
        <Row className="pb-5 text-center">
            <Col xs={12} md={12}>
                <p className='footer-rights'>@2022 - Todos los derechos reservados</p>
            </Col>
        </Row>
    </Container>
    </footer>
  )
}

export default Footer