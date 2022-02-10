import React from 'react';
import {Container, Row, Col} from "react-bootstrap/dist/react-bootstrap.min";

import './about.scss';

const About = () => {
  return (
    <Container id="about">
        <Row className=" about">
            <Col xs={12} md={6}>
                <div className="box-content-1">
                    <h2 className="about-title ">Sobre</h2>
                    <h2 className="about-title about-title--variant">Drexler</h2>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className='box-content-2'>
                    Eficiente Desarrollador Web y Analista en sistemas, dispuesto a ayudar a los demás a solucionar sus intereses de computación, cooperativo en su trabajo e inteligente.
                </div>
            </Col>
        </Row>
    </Container>
  );
};

export default About;
