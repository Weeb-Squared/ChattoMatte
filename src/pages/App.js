import React from "react";
import "./App.css"

import GuildSelectList from "../components/App/GuildSelectList"

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <GuildSelectList />
            </div>
        )
    }
}

export default App;