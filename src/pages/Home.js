import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.SubmitEvent = this.SubmitEvent.bind(this);
    }
    SubmitEvent(event) {
        console.log(event);
        event.preventDefault();
    }

    render() {
            return (
            <form onSubmit={this.SubmitEvent}>
                Username: <input type="text"></input> <br/>
                Password: <input type="password"></input> <br />
                <input type="submit"></input>
            </form>
        );
    }
}

export default Home;