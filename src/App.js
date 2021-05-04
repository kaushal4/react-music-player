import React,{ useState,useRef } from "react";
import Player from "./components/player"
import Songs from "./components/songs"
import Library from "./components/library"
import "./styles/app.scss"
import data from "./util";
function App() {
  //ref
  const audioRef = useRef(null)
  //state
  const [songs,setSongs] = useState(data());
  const [currentSong,setCurrentSong] = useState(songs[0]);
  const [playing,setPlaying] = useState(false);
  const [songInfo,setSongInfo] = useState({
    currentTime : 0,
    totalTime: 0, 
  });
  //other functions
  const playButtonHandler = ()=>{
    if(playing){

        audioRef.current.pause();
        setPlaying(false);
    }else{
        audioRef.current.play();
        setPlaying(true);
    }
}
const songTimeUpdateHandler = (e)=>{
  const current = e.target.currentTime;
  const duration = e.target.duration;
  setSongInfo({...songInfo,currentTime:current,totalTime:duration})
}
const dragHandler=(e)=>{
  audioRef.current.currentTime = e.target.value;
  setSongInfo({...songInfo,currentTime: e.target.value})
}

  return (
    <div>
      <Songs currentSong={currentSong}/>
      <Player  playButtonHandler={playButtonHandler} dragHandler={dragHandler} songInfo={songInfo} playing={playing}/>
      <Library audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} playing={playing}/>
      <audio onLoadedMetadata={(e)=>{songTimeUpdateHandler(e)}} onTimeUpdate={(e)=>{songTimeUpdateHandler(e)}} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
