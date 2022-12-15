import React from "react";
import "./App.scss"

import GuildSelectList from "../components/App/GuildSelectList"
import UserInformation from "../components/App/UserInformation";
import CollapsibleMenu from "../components/App/CollapsibleMenu";

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <GuildSelectList />
                <CollapsibleMenu />
                <UserInformation />
            </div>
        )
    }
}

export default App;