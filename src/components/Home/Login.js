import React, { useRef, useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"
import axios from "../api/axios";

const Login = () => {

    const [validated, setValidated] = useState(false);
    const username = useRef();
    const password = useRef();
    const [error, setError] = useState(null);

    const { setAuth, persist, setPersist } = useAuth();
    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";

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
        setError(false);
        setValidated(true);
        event.preventDefault();
        if (username.current.value === "" || password.current.value === "") { return }
        try {
            const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

            const res = await axios.post('/auth', 
                JSON.stringify({ user: username.current.value, pwd: password.current.value }), 
                {
                    headers: headers,
                    withCredentials: true
                }
            )
            const accessToken = res?.data?.accessToken;
            const roles = res?.data?.roles;
            setAuth({ username, password, roles, accessToken });
            navigate('/app', {replace: true})
        } catch (err) {
            console.log(err)
            setError(true);
        }
    }

    const togglePersist = () => {
        setPersist(prev => !prev);
    }

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist])

    return (
        <Form noValidate onSubmit={submitEvent} validated={validated} id="loginForm">
            <Form.Group>
                <Form.Label className="formLabel">Username: </Form.Label>
                <Form.Control ref={username} type="text" required />
                <Form.Control.Feedback type="invalid">
                    Please enter valid username
                </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Label className="formLabel">Password: </Form.Label>
                <Form.Control ref={password} type="password" required />
                <Form.Control.Feedback type="invalid">
                    Please enter valid password
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Check onChange={togglePersist} checked={persist} />
                <Form.Text>Trust this device</Form.Text>
            </Form.Group>
            <br />
            <div className={!error ? "hidden" : "visible"}>
                Incorrect username or password
            </div>
            <br className={!error ? "hidden" : "visible"} />
            <p>Don't have an account? <Link to="#register" onClick={scrollEvent}>Register now!</Link></p>
            <Button variant="primary" type="submit" className="formButton">Login</Button>
        </Form>
    );
}

export default Login;