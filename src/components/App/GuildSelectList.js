import React from "react";

function GuildSelectList () {

    return (
        <div id="guildSelectList">
            {Array(30).fill(1).map((el, i) =>{
                let id = `selectGuildId${i}`
                return <div id={ id }> </div>
            })}
            
        </div>

    )
}

export default GuildSelectList;