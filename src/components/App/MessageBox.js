import React from "react";

import { BsFillChatLeftTextFill, BsTwitch, BsWhatsapp, BsSpotify, BsReddit } from "react-icons/bs"

import Form from "react-bootstrap/Form"

function MessageBox() {

    return (
        <div id="messageBox">
            <div id="contentLabel">
                <div>
                    <BsFillChatLeftTextFill color="#ddd"></BsFillChatLeftTextFill>
                    Some username or other things
                </div>
                <div>
                    <BsTwitch color="#6441A4"></BsTwitch>
                    <BsWhatsapp color="#25D366"></BsWhatsapp>
                    <BsReddit color="#FF4500"></BsReddit>
                    <BsSpotify color="#1ED760"></BsSpotify>
                </div>
            </div>
            <div id ="messages">
                {Array(100).fill(1).map((el, i) =>{
                    let id = `message${i}`
                    return <div id={ id } key={i} > Message { i } </div>
                })}
            </div>
            <div id="messageInputBox">
                <Form.Control placeholder="Message this weeb"></Form.Control>
            </div>
        </div>
    );
}

export default MessageBox;