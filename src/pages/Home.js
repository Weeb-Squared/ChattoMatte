import React from "react";

import Login from '../components/Home/Login';
import Register from '../components/Home/Register';
import Agreement from '../components/Home/Agreement';
import "./Home.scss"

class Home extends React.Component {

    render() {
        return (
            <div id="componentsBox">
                <div>
                    <Login />
                    <Register />
                </div>
                <div>
                    <div id="emptySpace"></div>
                    <Agreement />
                </div>
            </div>
        )
    }
}

export default Home;