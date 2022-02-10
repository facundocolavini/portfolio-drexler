import React from 'react';
import {Container, Row, Col} from "react-bootstrap/dist/react-bootstrap.min";

import './about.scss';

const About = () => {
  return (
    <Container id="about" className="about">
        <Row >
            <Col className="text-center text-lg-start mt-5 mb-4" xs={12} md={12} lg={12}>
                <h2 className="about-title ">Sobre</h2>
                    <h2 className="about-title about-title--variant">Drexler</h2>
            </Col>
            <Col  xs={12} md={12} lg={{span: 6, offset: 6}}>
            <p className="text-about text-center text-md-center text-lg-start mt-5 mb-4">
                Eficiente Desarrollador Web y Analista en sistemas, dispuesto a ayudar a los demás a solucionar sus intereses de computación, cooperativo en su trabajo e inteligente.
            </p>
            </Col>
        </Row>
    </Container>
  );
};

export default About;
