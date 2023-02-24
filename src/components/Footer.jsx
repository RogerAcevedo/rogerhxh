import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

//! IMPORT IMAGES
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";
import navIcon4 from '../assets/img/nav-icon4.png';


export const Footer = () => {
  return (
    <div>
        <footer className="footer">
            <Container>
                <Row className="align-item-center">

                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>

                    <Col sm={6} className="text-center text-sm-center">
                        <div className="social-icon">
                            <a href="https://twitter.com/Rogerhxh" target="_blank"><img src={navIcon1} alt="" /></a>
                            <a href="https://www.linkedin.com/in/roger-acevedo-9b57bb1aa/" target="_blank"><img src={navIcon2}  /></a>
                            <a href="https://github.com/RogerAcevedo" target="_blank" ><img src={navIcon3} /></a>
                            <a href='javascript:void(0)'onClick={() => window.location = 'mailto:rogeracevedocreate@gmail.com'} target="_blank" ><img src={navIcon4} /></a>
                        </div>
                        <hr />
                        <p>CopyRight 2023 - Rogerhxh </p>

                    </Col>
                </Row>
            </Container>
        </footer>

    </div>
  )
}

export default Footer;

