import React from 'react'
import { useState, useEffect } from "react";

  // ? IMPORT TRACKVISIBILITY in component TO TRACK WHEN USER IS ON SCREEN FOR ANIMATIONS
import TrackVisibility from 'react-on-screen';

// ? IMPORT IMAGES
import HeaderImg from "../assets/img/header-img.png";

// ? BOOTSTRAP IMPORTS
import { Container, Row, Col } from "react-bootstrap"

// ? BOOTSTRAP ICONS IMPORTS
import { FaArrowCircleRight } from 'react-icons/fa';



export const Banner = () => {
  // toRotate - LIST OF WORDS THAT WILL GET ROTATED/DISPLAYED
    const toRotate = ["Web Developer", "Project Manager", "Problem Solver"];

  // loopNum - INDICATES THE INDEX OF WORD BEING DISPLAYED
  const [loopNum, setLoopNum] =useState(0);

  // isDeleting - IS THE WORD BEING TYPED OUT OR DELETED
  const [isDeleting, setIsDeleting] = useState(false);

  // text -  DISPLAYS EACH LETTER OF THE WORD
  const [text, setText] = useState('');

  // period - AMOUNT OF TIME THAT PASSES BETWEEN ONE LETTER TO ANOTHER
  const period = 2000;

  //
  const [delta, setDelta] = useState(300 - Math.random() * 100); 

  // ! useEffect
  useEffect( () => {
    let ticker = setInterval( () => {
      tick();
    }, delta)

    return () => {clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

     setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum +1);
      setDelta(500);
    }
  }


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">

          <Col xs={12} md={6} xl={7} >
            <TrackVisibility>
              {/* NEEDS TO BE WRAPPED AND DESTRUCTURED IN ORDER TO HAVE ACCESS  */}
              {({ isVisible}) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to Rogerhxh</span>
                <h1>{ "Roger Acevedo:"} <span className="wrap">{text}</span> </h1>
                <p>I am Roger. Future King of the Coders</p>
                <button to='javascript:void(0)' onClick={() => window.location = 'mailto:rogeracevedocreate@gmail.com'}>
                  Contact Me
                  <FaArrowCircleRight size={25} />
                </button>
              </div> }
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5} >
            <img src={ HeaderImg } alt="Header Img" />
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default Banner;