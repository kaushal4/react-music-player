import React,{ useState,useRef, useEffect } from "react";
import Player from "./components/player"
import Songs from "./components/songs"
import Library from "./components/library"
import Nav from"./components/nav"
import "./styles/app.scss"
import data from "./data";
function App() {
  //ref
  const audioRef = useRef(null);
  //state
  const [songs,setSongs] = useState(data());
  const [currentSong,setCurrentSong] = useState(songs[0]);
  const [playing,setPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    totalTime: 0,
    animationPrecentage:0
  });
  const [libStatus,setLibStatus] = useState(false);
  const songTimeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    if(current===duration){
      skipSongHandler("skip-forward");
    }
    setSongInfo({ ...songInfo, currentTime: current, totalTime: duration ,animationPrecentage : Math.round((Math.round(current)/Math.round(duration) * 100)) });
  };

  const skipSongHandler = (direction)=>{
    const currentIndex = songs.findIndex((element)=>{return element.id===currentSong.id});
    let nextIndex = currentIndex;
    if(direction==="skip-back"){
      nextIndex = nextIndex-1;
      if(nextIndex===-1) nextIndex=songs.length -1;
    }else{
      nextIndex = (nextIndex+1)%songs.length;
    }
    setCurrentSong(songs[nextIndex]);
  }

  useEffect(()=>{
    const checkIfPlaying =()=>{
      if(playing){
        audioRef.current.play();
      }
    }
    checkIfPlaying();

  },[currentSong,playing]);

  return (
    <div className={`App ${libStatus?"library-active":""}`}>
      <Nav libStatus={libStatus} setLibStatus={setLibStatus}/>
      <Songs currentSong={currentSong}/>
      <Player  setPlaying={setPlaying}  playing={playing} audioRef={audioRef} songInfo={songInfo} setSongInfo={setSongInfo} skipSongHandler={skipSongHandler} currentSong={currentSong}/>
      <Library  songs={songs} setCurrentSong={setCurrentSong} playing={playing} currentSong={currentSong} libStatus={libStatus}/>
      <audio
        onLoadedMetadata={(e) => {
          songTimeUpdateHandler(e);
        }}
        onTimeUpdate={(e) => {
          songTimeUpdateHandler(e);
        }}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
