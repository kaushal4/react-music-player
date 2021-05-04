import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay,faAngleLeft,faAngleRight,faPause } from "@fortawesome/free-solid-svg-icons";
const Song = ({playing,playButtonHandler,dragHandler,songInfo})=>{
    console.log(playing);
    const formatTime = (time)=>{
        return Math.floor(time/60)+":"+("0"+Math.floor(time%60)).slice(-2);
    }
    return(
        <div className="player">
            <div className="time-control">
                <p>{formatTime(songInfo.currentTime)}</p>
                <input type="range" min="0" max={songInfo.duration} value={songInfo.currentTime} name="" id="" onChange={dragHandler}/>
                <p>{formatTime(songInfo.totalTime)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x"/>
                <FontAwesomeIcon className="play" icon={playing?faPause:faPlay} size="2x" onClick={playButtonHandler}/>
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x"/>
            </div>
           
        </div>
    );
}

export default Song;