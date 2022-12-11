import React, { createRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import { Link } from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.submitEvent = this.submitEvent.bind(this);
        this.username = createRef(this.username);
        this.email = createRef();
        this.password = createRef();
        this.repeatPassword = createRef();
        this.agreement = createRef();
    }
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
    async submitEvent(event) {
        event.preventDefault();

        const headers = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'};

        const request = {
            method: "POST",
            credentials: 'include',
            body: JSON.stringify({user: this.username.current.value, pwd:this.password.current.value}),
            headers: headers
        }
        console.log(request)
        let res = await fetch("http://localhost:3500/register", request);
        let data = await res.json();
        console.log(data);
    }

    render() {
        return (
            <Form onSubmit={this.submitEvent} id='registerForm'>
                <Form.Group>
                    <Form.Label className="formLabel"> Username: </Form.Label>
                    <Form.Control ref={ this.username } type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="formLabel">E-mail:</Form.Label>
                    <Form.Control ref={ this.email } type="email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="formLabel">Password:</Form.Label>
                    <Form.Control ref={ this.password } type="password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="formLabel">Repeat password:</Form.Label>
                    <Form.Control ref={ this.repeatPassword } type="password" />
                </Form.Group>
                <br />
                <div id='agreementForm'>
                    <Form.Check ref={ this.agreement }/> I read and accept the&nbsp;<Link to="#agreement" onClick={this.scrollEvent}>agreement</Link>.
                </div>
                <p>Already have an account? <Link to="#login" onClick={this.scrollEvent}>Login now!</Link></p>
                <Button variant="primary" type="submit" className="formButton">Register</Button>
            </Form>   
        )
    }
} 

export default Register;