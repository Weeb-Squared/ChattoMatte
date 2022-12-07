import React, { useRef, useState } from "react";
import "./Login.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";

function Login () {

    const [validated, setValidated] = useState(false);
    const username = useRef();
    const password = useRef();

    /**
     * scrollEvent - method called every time user click on link to see the register form
     * 
     * @param {event} event 
     */
    function scrollEvent(e) {
        window.scrollTo(0, document.body.scrollHeight);
        document.title = "ChattoMatte - Register";
    }

    /**
     * submitEvent - method used after user clicks login button
     * 
     * @param {event} event 
     */

    async function submitEvent(event) {
        setValidated(true);        
        event.preventDefault();
        if (username.current.value==="" || password.current.value==="") {return}
        
        const headers = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'};

        const request = {
            method: "POST",
            credentials: 'include',
            body: JSON.stringify({user: username.current.value, pwd: password.current.value}),
            headers: headers
        }
        let res = await fetch("http://localhost:3500/auth", request);
        
        console.log(res);
    }
    
    return (
        <Form noValidate onSubmit={submitEvent} validated = { validated } id="login" className="loginForm">
            <Form.Group>
                <Form.Label className="formLabel">Username: </Form.Label>
                <Form.Control ref={ username } type="text" required />
                <Form.Control.Feedback type="invalid">
                    Please enter valid username
                </Form.Control.Feedback> 
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Label className="formLabel">Password:</Form.Label>
                <Form.Control ref={ password } type="password" required />
                <Form.Control.Feedback type="invalid">
                    Please enter valid password
                </Form.Control.Feedback>
            </Form.Group>
            <br />
            <p>Don't have an account? <Link to="#register" onClick={scrollEvent}>Register now!</Link></p> 
            <Button variant="primary" type="submit" className="formButton">Login</Button>
        </Form>
    );
}

export default Login;