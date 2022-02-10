import React from 'react'
import {Container, Row, Col, Image} from "react-bootstrap/dist/react-bootstrap.min";
import iconCPlusPlus from '../../assets/images/c++.png';
import iconCss from '../../assets/images/css.png';
import iconHmtl from '../../assets/images/html.png';
import iconJavascript from '../../assets/images/javascript.png';
import iconIllustrator from '../../assets/images/ai.png';
import iconPhotoshop from '../../assets/images/ps.png';
import iconWordPress from '../../assets/images/wordpress.png';
import iconWix from '../../assets/images/wix.png';
import iconJava from '../../assets/images/java.png';
import './technologies.scss';

const Technologies = () => {
  return (
    <Container id="technologies">
        <Row className="text-center text-md-start mt-5 mb-4'">
            <Col xs={12} md={6}>
                <h2 className="technologies-title">Tecnologías</h2>
                <h2 className="technologies-title technologies-title--variant">Usadas</h2>
            </Col>
        </Row>
        <Row className='mt-4 mb-5'>
            <Col className='text-md-end text-center' xs={12} md={12} lg={{span: 6, offset: 6}}>
                <div className='list-tech'>
                    <div className='circle-border'><Image className='tech-img' src={iconPhotoshop} alt='icon'/></div>
                    <div className='circle-border'><Image className='tech-img' src={iconWix}alt='icon'/></div>
                    <div className='circle-border'><Image className='tech-img' src={iconIllustrator} alt='icon'/></div>
                    <div className='circle-border'><Image className='tech-img' src={iconWordPress} alt='icon'/></div>
                </div>
            </Col> 
        </Row>
        <Row  className='mt-5 mb-4'>
            <Col className='text-md-center text-center' xs={12} md={12} lg={{span: 7, offset: 4}}>
                <div className='list-tech'>
                    <div className='circle-border'><Image  className='tech-img' src={iconCPlusPlus} alt='icon'/></div>
                    <div className='circle-border'><Image className='tech-img' src={iconJavascript} alt='icon'/></div>
                    <div className='circle-border'><Image className='tech-img' src={iconHmtl} alt='icon'/></div>
                    <div className='circle-border'><Image className='tech-img' src={iconJava} alt='icon'/></div>
                    <div className='circle-border'><Image className='tech-img' src={iconCss} alt='icon'/></div>
                </div>         
            </Col>
        </Row>
    </Container>
  )
}

export default Technologies