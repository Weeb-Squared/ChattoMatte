import React from "react";

import Login from '../components/Home/Login';
import Register from '../components/Home/Register';
import "./Home.css"

class Home extends React.Component {

    render() {
        return (
            <div id="componentsBox">
                <Login />
                <Register />
            </div>
        )
    }
}

export default Home;