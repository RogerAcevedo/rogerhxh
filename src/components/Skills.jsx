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
// LANGUAGES
import Java from "../assets/img/javalogo.png"
import Javascript from "../assets/img/jslogo.png"
import Python from "../assets/img/pythonlogo.png"
import Html from "../assets/img/htmllogo.png"
import Css from "../assets/img/csslogo.png"
// FRAMEWORKS/LIBRARIES
import Flask from "../assets/img/flasklogo.png"
import Jinja from "../assets/img/jinjalogo.png"
import Reactlogo from "../assets/img/reactlogo.png"
import Node from "../assets/img/nodelogo.png"
import Bootstraplogo from "../assets/img/bootstraplogo.webp"
import Spring from "../assets/img/springlogo.webp"
// DATABASE
import Mongo from "../assets/img/mongologo.png"
import Mongoose from "../assets/img/mongooselogo.png"

import Mysql from "../assets/img/mysqllogo.png"
//TOOLS
import Postman from "../assets/img/postmanlogo.png"
import Restapi from "../assets/img/apilogo.png"
import Github from "../assets/img/githublogo.png"
import Gitlab from "../assets/img/gitlablogo.png"
import Json from "../assets/img/jsonlogo.png"
import Mysqlbench from "../assets/img/mysqlbenchlogo.png"


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

  // !LANGUAGES
  const languages = [
    {
      id: 1,
      img: Java,
      title: "Java"
    },
    {
      id: 2,
      img: Javascript,
      title: "Javascript"
    },

    {
      id: 3,
      img: Python,
      title: "Python"
    },
    {
      id: 4,
      img: Html,
      title: "HTML"
    },
    {
      id: 5,
      img: Css,
      title: "CSS"
    },
    {
      id: 6,
      img: Flask,
      title: "Flask"
    },
    {
      id: 7,
      img: Jinja,
      title: "Jinja"
    },

    {
      id: 8,
      img: Reactlogo,
      title: "React.js"
    },
    {
      id: 9,
      img: Node,
      title: "Node.js"
    },
    {
      id: 10,
      img: Bootstraplogo,
      title: "Bootstrap"
    },
    {
      id: 11,
      img: Spring,
      title: "Spring"
    },
    {
      id: 12,
      img: Restapi,
      title: "Rest API"
    },
    {
      id: 13,
      img: Github,
      title: "Github"
    },

    {
      id: 14,
      img: Gitlab,
      title: "Gitlab"
    },
    {
      id: 15,
      img: Json,
      title: "Json"
    },
    {
      id: 16,
      img: Mysqlbench,
      title: "MySQL Workbench"
    },
    {
      id: 17,
      img: Postman,
      title: "Postman"
    },
    {
      id: 18,
      img: Mongo,
      title: "MongoDB"
    },
    {
      id: 19,
      img: Mongoose,
      title: "Mongoose"
    },

    {
      id: 20,
      img: Mysql,
      title: "MySQL"
    },
  ]

  // //! FRAMEWORKS/LIBRARIES
  // const libraries = [
  //   {
  //   id:6,
  //   img: Flask,
  //   title: "Flask"
  //   },
  //   {
  //     id:7,
  //     img: Jinja,
  //     title: "Jinja"
  //   },

  //   {
  //     id:8,
  //     img: Reactlogo,
  //     title: "React.js"
  //   },
  //   {
  //     id:9,
  //     img: Node,
  //     title: "Node.js"
  //   },
  //   {
  //     id:10,
  //     img: Bootstraplogo,
  //     title: "Bootstrap"
  //   },
  //   {
  //     id:11,
  //     img: Spring,
  //     title: "Spring"
  //   },
  // ]

  //! FRAMEWORKS/LIBRARIES
  // const databases = [
  //   {
  //   id:6,
  //   img: Mongo,
  //   title: "MongoDB"
  //   },
  //   {
  //     id:7,
  //     img: Mongoose,
  //     title: "Mongoose"
  //   },

  //   {
  //     id:8,
  //     img: Mysql,
  //     title: "MySQL"
  //   },
  // ]

  // //! TOOLS
  // const tools = [
  //   {
  //   id:12,
  //   img: Restapi,
  //   title: "Rest API"
  //   },
  //   {
  //     id:13,
  //     img: Github,
  //     title: "Github"
  //   },

  //   {
  //     id:14,
  //     img: Gitlab,
  //     title: "Gitlab"
  //   },
  //   {
  //     id:15,
  //     img: Json,
  //     title: "Json"
  //   },
  //   {
  //     id:16,
  //     img: Mysqlbench,
  //     title: "MySQL Workbench"
  //   },
  //   {
  //     id:17,
  //     img: Postman,
  //     title: "Postman"
  //   },
  // ]

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">

              <h2>
                Technical Skills:
              </h2>
              
              <div>
                <h3>Languages: <p>Java, Python, JavaScript(ES6), HTML, CSS </p></h3>
                <h3>Frameworks/Libraries: <p>Flask, Jinja2, React, Node.js, Express, bootstrap, Spring</p>  </h3>
                <h3>Databases: <p> MySQL, MongoDB, Mongoose</p> </h3>
                <h3>Tools: <p>AWS(EC2), REST API, JSON, PostMan, MySQL Workbench, Github, VS Code, Github, Net </p></h3>
              </div>
              {/* <h4>Languages, Tools & Libraries</h4> */}
              <br></br>
              <Carousel responsive={responsive} infinite={true} className="skill-slider" autoPlay={true} autoPlaySpeed={1000} >
                {languages.map((language) => (
                  <div key={language.id} className="item">
                    <img src={language.img} alt="Image" />
                    <h6>{language.title}</h6>
                  </div>
                ))}
              </Carousel>
              

              
              {/* CAROUSEL LOGIC */}
              {/* <Carousel responsive={responsive} infinite={true} className="skill-slider" autoPlay={true} autoPlaySpeed={2000}>
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
              </Carousel> */}
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left" alt="" />
    </section>

  )
}

export default Skills;

{/* <h4>Database:</h4>
                        <div id="logos3">
                        {databases.map((datebase) => (
                          <div key={datebase.id}>
                            <img src={datebase.img} alt="Image" />
                            <h6>{datebase.title}</h6>
                          </div>
                        ))}
                        </div>

                        <h4>Frameworks/Libraries:</h4>
                        <div id="logos2">
                        {libraries.map((library) => (
                          <div key={library.id}>
                            <img src={library.img} alt="Image" />
                            <h6>{library.title}</h6>
                          </div>
                        ))}
                        </div>

                        <h4>Tools:</h4>
                        <div id="logos2">
                        {tools.map((tool) => (
                          <div key={tool.id}>
                            <img src={tool.img} alt="Image" />
                            <h6>{tool.title}</h6>
                          </div>
                        ))}
                        </div>
                         */}
