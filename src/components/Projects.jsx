import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";



// // ? IMPORT IMAGES
import projImg1 from "../assets/img/project-img1.gif";
import projImg2 from "../assets/img/project-img2.gif";
import projImg3 from "../assets/img/project-img3.gif";
import projImg4 from "../assets/img/project-img4.gif";
import projImg5 from "../assets/img/project-img5.gif";
import projImg6 from "../assets/img/project-img6.gif";
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
            title: "Modern Electrician Website",
            description: "Welcome to our cutting-edge electrician website built with React, JavaScript, HTML, and CSS. Discover a seamless user experience and explore our range of modern electrical services, powered by the latest web technologies.",
            imgUrl: projImg1,
        },
        {
            title: "OP Chess ",
            description: "Immerse yourself in the world of chess with our interactive chessboard. Experience the thrill of moving draggable pieces on a visually captivating board, brought to life through JavaScript, HTML, and CSS.",
            imgUrl: projImg3,
        },
        {
            title: "Who is that Pokemon?",
            description: "Embark on a nostalgic journey with our captivating memory card game, where you can match your favorite Pokémon characters. Powered by JavaScript, HTML, and CSS, and fueled by the Pokémon API, this game will test your memory skills while indulging your Pokémon passion.",
            imgUrl: projImg2,
        },

        {
            title: "Pika Jumpa",
            description: "Play as a Pokémon character, dodge obstacles, all while enjoying the nostalgic pixel art and thrilling gameplay powered by JavaScript, HTML, and CSS..",
            imgUrl: projImg4,
        },
        {
            title: "Day & Night Weather App",
            description: "Experience weather forecasting with a twist in our Naruto-themed weather app. Stay informed about the current weather conditions, get accurate forecasts, and embark on a ninja-inspired journey while exploring the immersive UI designed with JavaScript, HTML, and CSS, and enriched by real-time weather data from the Weather API",
            imgUrl: projImg5,
        },
        {
            title: "JUST DO IT",
            description: "Stay organized and boost your productivity with our sleek and customizable todo app. With its modern interface built using JavaScript, HTML, and customizable CSS, you can easily manage tasks, set reminders, and achieve your goals in style. ",
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