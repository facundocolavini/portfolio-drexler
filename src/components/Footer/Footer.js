import React from 'react';
import { Container, Row, Col } from "react-bootstrap/dist/react-bootstrap.min";
import './footer.scss';

const Footer = () => {
  return (
    <footer className="bkg-footer ">
    <Container  bg={'blue'} id="contact">
        <Row className="text-center">
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