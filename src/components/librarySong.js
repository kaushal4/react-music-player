import React from "react";

const LibrarySong = ({
  Song,
  setCurrentSong,
  currentSong,
  songs,
  audioRef,
  playing,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    setCurrentSong(Song);
    //add active state
    // const newSong = songs.map((song)=>{
    //     if(song.id === Song.id){
    //         return {...song,active:true}
    //     }else{
    //         return {...song,active:false}
    //     }
    // })
    // setSongs(newSong);

    // if(playing){
    //     await audioRef.current.play();
    //     audioRef.current.play();
    // }
  };
  return (
    <div
      className={`lib-song-container ${
        Song.id === currentSong.id ? "selected" : ""
      }`}
      onClick={songSelectHandler}
    >
      <img src={Song.cover} alt="" />
      <div className="song-description">
        <h3>{Song.name}</h3>
        <h4>{Song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
