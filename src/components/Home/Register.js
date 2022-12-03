import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import "./Register.css"

import { Link } from "react-router-dom";

class Register extends React.Component {

    scrollEvent(e) {
        if (e.currentTarget.href.includes("login")) window.scrollTo(0, 0);
        else window.scrollTo(document.documentElement.scrollWidth, document.body.scrollHeight);
    }

    render() {
        return (
            <Form id="register" className='registerForm'>
                <Form.Label className="formLabel"> Username: </Form.Label>
                <Form.Control type="text" className="formControl" /> <br />
                <Form.Label className="formLabel">E-mail:</Form.Label>
                <Form.Control type="email" className="formControl"/> <br />
                <Form.Label className="formLabel">Password:</Form.Label>
                <Form.Control type="password" className="formControl"/> <br />
                <Form.Label className="formLabel">Repeat password:</Form.Label>
                <Form.Control type="password" className="formControl"/> <br />
                <div id='agreementForm'>
                    <Form.Check /> I read and accept the&nbsp;<Link to="#agreement" onClick={this.scrollEvent}>agreement</Link>.
                </div>
                <p>Have already an account? <Link to="#login" onClick={this.scrollEvent}>Login now!</Link></p>
                <Button variant="primary" type="submit" className="formButton">Register</Button>
            </Form>   
        )
    }
} 

export default Register;