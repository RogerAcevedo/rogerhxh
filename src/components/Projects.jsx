import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";



// // ? IMPORT IMAGES
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

// // ? IMPORT ANIMATE CSS
// import 'animate.css';
  // ? IMPORT TRACKVISIBILITY in component TO TRACK WHEN USER IS ON SCREEN FOR ANIMATIONS
  import TrackVisibility from 'react-on-screen';

// ? IMPORT COMPONENTS
import ProjectCard from '../helpers/ProjectCard'


export const Projects = () => {

    const projects = [
        {
            title: "Mission Hills Smokeshop",
            description: "A smokeshop business website developed with React is a modern and user-friendly online platform designed to cater to the needs of customers who are interested in purchasing smoking accessories",
            imgUrl: projImg1,
        },
        {
            title: "Kick-Off Kicks ",
            description: "An e-commerce website designed with JavaScript, HTML, and CSS is a frontend-only platform designed to provide users with a seamless online shopping experience.",
            imgUrl: projImg3,
        },
        {
            title: "Rogerhxh Test",
            description: "A dynamic portfolio  website  that allows individuals or companies to showcase their work and skills in a visually appealing and interactive way.",
            imgUrl: projImg2,
        },

        {
            title: "Zero Football",
            description: "An online soccer app developed using the Scorebat API is a platform that provides users with up-to-date information on soccer matches worldwide.",
            imgUrl: projImg4,
        },
        {
            title: "Pokedex 101",
            description: "An application that uses the Pokemon API displays all the Pokemon in a styled Pokedex, providing users with an interactive and engaging platform for exploring and learning about different Pokemon.",
            imgUrl: projImg5,
        },
        {
            title: "Studio City Narutofied",
            description: "An application created with the Google Maps API is a location-based platform that provides users with custom features and functionalities based on a specific theme(Naruto). ",
            imgUrl: projImg6,
        },
    ];




    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {/* NEEDS TO BE WRAPPED AND DESTRUCTURED IN ORDER TO HAVE ACCESS  */}
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>Projects</h2>

                                    <p>One Project at a Time</p>
                                </div>}
                        </TrackVisibility>
                                    {/* BOOTSTRAP PILLS TABS */}
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first" >

                                        {/* TABS */}
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                                
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>

                                        {/* TAB CONTENT - MAP THROUGH EACH PROJECT */}
                                        <Tab.Content>

                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                // DISPLAY PROJECT CAR COMPONENT - KEY IS NECESSARY
                                                                // SPREAD OPERATOR TO TO PASS REST OF THE FIELDS
                                                                <ProjectCard key={index} {...project} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>

                                            <Tab.Pane evenKey="second">
                                                EVENT 2ND 
                                            
                                            </Tab.Pane>
                                                        
                                            <Tab.Pane evenKey="third"> 
                                                EVENT 3RD 
                                            
                                            </Tab.Pane>

                                        </Tab.Content>


                                    </Tab.Container>
                                </Col>
                </Row>
                    </Container>
                    <img className="background-image-right" src={colorSharp2} />
                </section>
                )
}

                export default Projects;