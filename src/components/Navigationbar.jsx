import React from 'react'
import { useState, useEffect } from 'react';




// BOOTSTRAP IMPORTS
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// IMPORT IMAGES

import navIcon1 from '../assets/img/nav-icon1.png';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.png';


export const Navigationbar = () => {

    // !USE STATE
    // MANAGE LINK WE ARE CURRENTLY ON - HOME
    const [activeLink, setActiveLink] = useState('home');
    // TRACK NAVIGATION/SCROLLING OF PAGE TO FADE BACKGROUND COLOR
    const [scrolled, setScrolled] = useState('false')


    // ! USE EFFECT
    // TRACK NAVIGATION/SCROLLING OF PAGE TO FADE BACKGROUND COLOR - activate on scroll
    useEffect(() => {
        const onScroll = () => {
            // scrollY to determine screen vertical
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        // FIRES ON SCROLL
        window.addEventListener("scroll", onScroll);

        // EVENT LISTENER NEEDS TO BE REMOVED
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    // HAVE LINKS LIGHT UP ON CLICK
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    return (
        <div>

            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>

                    <Navbar.Brand href="/">
                        {/* <img src={logo} alt="" /> */}
                        <h1 id='rogerhxh'>Rogerhxh</h1>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" >
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            <Nav.Link
                                href="#home"
                                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink("home")}>
                                Home
                            </Nav.Link>

                            <Nav.Link
                                href="#skills"
                                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink("skills")}>
                                Skills
                            </Nav.Link>

                            <Nav.Link
                                href="#project"
                                className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink("project")} >
                                Projects 
                            </Nav.Link>

                            <Nav.Link
                                href="#connect"
                                className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink("connect")} >
                                About Me
                            </Nav.Link>
                        </Nav>

                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://twitter.com/Rogerhxh" target="_blank"><img src={navIcon1} alt="" /></a>
                                <a href="https://www.linkedin.com/in/roger-acevedo-9b57bb1aa/" target="_blank"><img src={navIcon2} /></a>
                                <a href="https://github.com/RogerAcevedo" target="_blank" ><img src={navIcon3} /></a>
                                {/* <a href='javascript:void(0)'onClick={() => window.location = 'mailto:rogeracevedocreate@gmail.com'} target="_blank" ><img src={navIcon4} /></a> */}

                            </div>
                            <button className="vvd" to='javascript:void(0)'
                                onClick={() => window.location = 'mailto:rogeracevedocreate@gmail.com'}>
                                <span>Contact Me</span>
                            </button>
                        </span>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}

export default Navigationbar;