import React from "react";
import "./App.css"

import GuildSelectList from "../components/App/GuildSelectList"
import UserInformation from "../components/App/UserInformation";
import FriendsList from "../components/App/FriendsList";

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <GuildSelectList />
                <FriendsList />
                <UserInformation />
            </div>
        )
    }
}

export default App;