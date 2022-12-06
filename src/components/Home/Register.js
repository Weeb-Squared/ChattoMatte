import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import "./Register.css"

import { Link } from "react-router-dom";

class Register extends React.Component {

    /**
     * scrollEvent - method called every time user clicks on link to see login form or agreement
     * 
     * @param {event} event
     */
    scrollEvent(e) {
        if (e.currentTarget.href.includes("login")) {
            document.title = "ChattoMatte - Login";
            window.scrollTo(0, 0);
        } else {
            document.title = "ChattoMatte - Agreement";
            window.scrollTo(document.documentElement.scrollWidth, document.body.scrollHeight);
        }
    }

    /**
     * submitEvent - method used after user clicks login button
     * 
     * @param {event} event 
     */
    submitEvent(event) {
        const formNodes = document.querySelectorAll(".registerForm > input");
        console.log(formNodes);

        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.submitEvent} id="register" className='registerForm'>
                <Form.Label className="formLabel"> Username: </Form.Label>
                <Form.Control type="text" /> <br />
                <Form.Label className="formLabel">E-mail:</Form.Label>
                <Form.Control type="email" /> <br />
                <Form.Label className="formLabel">Password:</Form.Label>
                <Form.Control type="password" /> <br />
                <Form.Label className="formLabel">Repeat password:</Form.Label>
                <Form.Control type="password" /> <br />
                <div id='agreementForm'>
                    <Form.Check /> I read and accept the&nbsp;<Link to="#agreement" onClick={this.scrollEvent}>agreement</Link>.
                </div>
                <p>Already have an account? <Link to="#login" onClick={this.scrollEvent}>Login now!</Link></p>
                <Button variant="primary" type="submit" className="formButton">Register</Button>
            </Form>   
        )
    }
} 

export default Register;