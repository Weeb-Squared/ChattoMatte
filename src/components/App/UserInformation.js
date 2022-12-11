import React, { useEffect, useState } from "react";

import { BsFillGearFill, BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";
import { TbHeadphones, TbHeadphonesOff } from "react-icons/tb"

function UserInformation () {

    const [microphone, setMicrophone] = useState(true);
    
    const [headphones, setHeadphones] = useState(true);

    useEffect(()=>{
        console.log("mic: ", microphone);
        console.log("head: ", headphones);

    }, [microphone, headphones])

    return (
        <div id="userInformation">
            <div id="userInfo">
                <p>Username dasdasdas dsadasd</p>
                <p>tag or other sdashdyasyuigdashj ghjagdhjas gdhja s</p>
            </div>
            <div id="userInfoIcons">
                { microphone ? <BsFillMicFill id="microphoneIcon" color="#fff" onClick={()=>setMicrophone(!microphone)}/> : <BsFillMicMuteFill id="microphoneIcon" color="#fff" onClick={()=>setMicrophone(!microphone)}/>}
                { headphones ? <TbHeadphones id="headphonesIcon" color="#fff" onClick={()=>setHeadphones(!headphones)}/> : <TbHeadphonesOff id="headphonesIcon" color="#fff" onClick={()=>setHeadphones(!headphones)}/> }
                <BsFillGearFill color="#fff"/>
            </div>
        </div>
    )
}

export default UserInformation;