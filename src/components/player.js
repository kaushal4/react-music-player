import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay,faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";
const song = ()=>{
    return(
        <div className="player">
            <div className="time-control">
                <p>Start time</p>
                <input type="range" name="" id=""/>
                <p>end time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x"/>
                <FontAwesomeIcon className="play" icon={faPlay}/>
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x"/>
            </div>
        </div>
    );
}

export default song;