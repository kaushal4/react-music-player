import React from "react";

const LibrarySong = ({Song,setCurrentSong,songs,audioRef,playing})=>{
    const songSelectHandler = async ()=>{
        setCurrentSong(Song);  
        
        if(playing){
            await audioRef.current.play();
            audioRef.current.play();
        }   
    }
    return(
        <div className="lib-song-container" onClick={songSelectHandler}>
            <img src={Song.cover} alt=""/>
            <div className="song-description">
                <h3>{Song.name}</h3>
                <h4>{Song.artist}</h4>
            </div>
            
        </div>
    );
}

export default LibrarySong;