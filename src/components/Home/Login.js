import React from "react";
import "./Login.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.submitEvent = this.submitEvent.bind(this);
    }

    /**
     * scrollEvent - method called every time user click on link to see the register form
     * 
     * @param {event} event 
     */
    scrollEvent(e) {
        window.scrollTo(0, document.body.scrollHeight);
    }

    /**
     * submitEvent - method used after user clicks login button
     * 
     * @param {event} event 
     */
    submitEvent(event) {
        const formNodes = document.querySelectorAll(".loginForm > input");
        console.log(formNodes);
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.submitEvent} id="login" className="loginForm">
                <Form.Label className="formLabel"> Username: </Form.Label>
                <Form.Control type="text" className="formControl" /> <br />
                <Form.Label className="formLabel">Password:</Form.Label>
                <Form.Control type="password" className="formControl"/> <br />
                <p>Don't have account? <Link to="#register" onClick={this.scrollEvent}>Register now!</Link></p> 
                <Button variant="primary" type="submit" className="formButton">Login</Button>
            </Form>
        );
    }
}

export default Home;