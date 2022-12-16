import React from "react";
import "./App.scss"

import GuildSelectList from "../components/App/GuildSelectList"
import UserInformation from "../components/App/UserInformation";
import CollapsibleMenu from "../components/App/CollapsibleMenu";
import MessageBox from "../components/App/MessageBox"

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <GuildSelectList />
                <CollapsibleMenu />
                <UserInformation />
                <MessageBox />
            </div>
        )
    }
}

export default App;