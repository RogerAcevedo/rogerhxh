import React from 'react'

// ? BOOTSTRAP IMPORTS
import { Container, Row, Col } from "react-bootstrap"

// ? IMPORT REACT CAROUSEL
import Carousel from 'react-multi-carousel';
// ? CAROUSEL CSS
import 'react-multi-carousel/lib/styles.css';

// ? IMPORT IMAGES
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"



export const Skills = () => {
// CAROUSEL DEFAULT 
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-box">
                        <h2>
                            Skills:
                        </h2>
                        <div>
                          <h3>Languages: <p>Java, Python, JavaScript(ES6), HTML, CSS </p></h3>
                          <h3>Frameworks/Libraries: <p>Flask, Jinja2, React, Node.js, Express, bootstrap, Spring</p>  </h3>
                          <h3>Databases: <p> MySQL, MongoDB, Mongoose</p> </h3>
                          <h3>Tools: <p>AWS(EC2), REST API, JSON, PostMan, MySQL Workbench, Github, VS Code, Github, Net </p></h3>
                        </div>
                        {/* CAROUSEL LOGIC */}
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Project Management </h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Database Master </h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Businesses Expert </h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img src={colorSharp} className="background-image-left" alt="" />
    </section>

  )
}

export default Skills; 