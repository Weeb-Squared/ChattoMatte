import React from "react";
import "./Login.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.submitEvent = this.submitEvent.bind(this);
        this.res = {};
    }

    /**
     * scrollEvent - method called every time user click on link to see the register form
     * 
     * @param {event} event 
     */
    scrollEvent(e) {
        window.scrollTo(0, document.body.scrollHeight);
        document.title = "ChattoMatte - Register";
    }

    /**
     * submitEvent - method used after user clicks login button
     * 
     * @param {event} event 
     */
    async submitEvent(event) {
        const formNodes = document.querySelectorAll(".loginForm > input");
        console.log(formNodes);
        event.preventDefault();

        // const headers = {};
        // headers.push('Content-Type', 'application/json');
        // headers.push('Access-Control-Allow-Origin', '*');


        const headers = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}

        const request = {
            method: "POST",
            body: JSON.stringify({user: formNodes[0].value, pwd: formNodes[1].value}),
            header: headers
        }
        console.log(request)
        let res = await fetch("http://localhost:3500/auth", request);
        let data = await res.json();
        console.log(data);
        this.setState(data);
    }

    render() {
        return (
            <Form onSubmit={this.submitEvent} id="login" className="loginForm">
                <Form.Label className="formLabel">Username: </Form.Label>
                <Form.Control type="text"/> <br />
                <Form.Label className="formLabel">Password:</Form.Label>
                <Form.Control type="password"/> <br />
                <p>Don't have account? <Link to="#register" onClick={this.scrollEvent}>Register now!</Link></p> 
                <Button variant="primary" type="submit" className="formButton">Login</Button>
            </Form>
        );
    }
}

export default Login;