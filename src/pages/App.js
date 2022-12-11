import React from "react";
import "./App.css"

import GuildSelectList from "../components/App/GuildSelectList"
import UserInformation from "../components/App/UserInformation";

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <GuildSelectList />
                <UserInformation />
            </div>
        )
    }
}

export default App;