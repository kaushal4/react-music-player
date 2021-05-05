import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
const Song = ({
  playing,
  setPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  skipSongHandler,
  currentSong
}) => {
  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  //other functions
  const playButtonHandler = () => {
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const trackAnim = {
    transform: `translateX(${songInfo.animationPrecentage}%)`,
  }
  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <div className="track" style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}>
        <input
          type="range"
          min="0"
          max={songInfo.totalTime || 0}
          value={songInfo.currentTime}
          name=""
          id=""
          onChange={(e) => {
            console.log("here");
            dragHandler(e);
          }}
        />
        <div className="animate-track" style={trackAnim}></div>
        </div>
        
        <p>{formatTime(songInfo.totalTime || 0)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
          onClick={() => {
            skipSongHandler("skip-back");
          }}
        />
        <FontAwesomeIcon
          className="play"
          icon={playing ? faPause : faPlay}
          size="2x"
          onClick={playButtonHandler}
        />
        <FontAwesomeIcon
          onClick={() => {
            skipSongHandler("skip-forward");
          }}
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
    </div>
  );
};

export default Song;
