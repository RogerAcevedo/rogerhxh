import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

// ? IMPORT IMAGES
import contactImg from "../assets/img/contact-img.png"

// ? IMPORT TRACKVISIBILITY in component TO TRACK WHEN USER IS ON SCREEN FOR ANIMATIONS
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

    // ! STATE FOR FORM
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    // STATE TO HOLD FORM DETAILS FROM formInitialDetails & reset later on
    const [formDetails, setFormDetails] = useState(formInitialDetails);

    // SUBMIT BUTTON - initially set to send - once its sent, it will update to "sending"
    const [buttonText, setButtonText] = useState('Send');

    // See status of message - sent succesful or unsuccesful 
    const [status, setStatus] = useState({});

    // FORM UPDATE - updates form details state - only field that has been indicated in the argument
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    // SUBMIT FORM FUNCTION - MAKE REQUEST TO OUR EMAIL API
    // "async" for making call to an API
    const handleSubmit = async(e) => {
        // PREVENT PAGE TO GET RELOADED AFTER FORM IS SUBMITTED
        e.preventDefault();
        setButtonText("Sending...")
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            // BODY NEEDS TO BE A STRING AND "STRINGIFY"
            body: JSON.stringify(formDetails),
        });
        // REST FORM ONCE THE MESSAGE HAS BEEN SENT OR FAILED
        setButtonText("Send");
        let result = await response.json();
        // IF FORM SENDS, WE CLEAR THE FORM
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: "Message Sent" })
            // IF FORM DOES NOT SEND, WE WILL DISPLAY AN ERROR MESSAGE
        } else {
            setStatus({ success: false, message: "Something went wrong. Please try again later." })
        }
    };

    return (
        <div>
            <section className="contact" id="connect">
                <Container>

                    <Row className="align-items-center">

                        {/* LEFT SIDE OF COLUMN - IMAGE */}
                        <Col size={12} md={6}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                                }
                            </TrackVisibility>
                        </Col>

                        {/* RIGHT SIDE OF COLUMN - CONTACT FORM */}
                        <Col size={12} md={6}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <h2>About Me</h2>
                                            <h4>An experienced Project Manager with a record of delivering complex projects on time. 
                                                Skilled in leading cross functional teams and managing expectations. 
                                                Proactive and detail oriented, with a focus on problem solving. 
                                                I am extremely thrilled to make this transition into this new career. 
                                                I am passionate about writing clean and well structured code. 
                                                I enjoy solving smaller problems that later help solve a bigger issue. 
                                                I am excited to bring my experience and enthusiasm to my new software developer role. 
                                            </h4>
                                        
                                    </div>}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    )
}

export default Contact;


// FORM DOES NOT WORK - WILL UPDATE ONCE ITS WORKING 
                            // <h2>Get In Touch</h2>
                            //             <form onSubmit={handleSubmit}>
                            //                 <Row>
                            //                     <Col size={12} sm={6} className="px-1" >
                            //                         <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                            //                     </Col>

                            //                     <Col size={12} sm={6} className="px-1" >
                            //                         <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                            //                     </Col>

                            //                     <Col size={12} sm={6} className="px-1" >
                            //                         <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                            //                     </Col>

                            //                     <Col size={12} sm={6} className="px-1" >
                            //                         <input type="tel" value={formDetails.phone} placeholder="Telphone #" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                            //                     </Col>

                            //                     <Col>
                            //                         <textarea rows="8" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>

                            //                         <button type='submit' >
                            //                             {/* buttonText varialbe updates from send to sending back to send */}
                            //                             <span> {buttonText}</span>
                            //                         </button>
                            //                     </Col>

                            //                     {/* DISPLAY BUTTON STATUS MESSAGE AFTER USER TAKES ACTION (CSS IN DEFAULT CSS IN APP.JS)*/}
                            //                     {
                            //                         status.message &&
                            //                         <Col>
                            //                             <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            //                         </Col>
                            //                     }

                            //                 </Row>
                            //             </form>