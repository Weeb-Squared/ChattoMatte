import React from "react";

import Form from "react-bootstrap/Form"

import { CgClose } from "react-icons/cg"

function FriendsList () {
        
    return ( 
        <div id="friendsList">
            <CgClose color="#ccc" className="closeIcon" />
            <div>
                <Form.Control type="search" id="searchFriendsField"></Form.Control>
            </div>
        </div>
    );
}

export default FriendsList;