import React from "react";
import "./Home.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.SubmitEvent = this.SubmitEvent.bind(this);
    }
    SubmitEvent(event) {
        console.log(event);
        const formNodes = document.querySelectorAll(".loginForm > input");
        console.log(formNodes);
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.SubmitEvent} className="loginForm">
                <Form.Label className="formLabel"> Username: </Form.Label>
                <Form.Control type="text" className="formControl" /> <br />
                <Form.Label className="formLabel">Password:</Form.Label>
                <Form.Control type="password" className="formControl"/> <br />
                <Button variant="primary" type="submit" className="formButton">Login</Button>
            </Form>
        );
    }
}

export default Home;