import React from "react";
import LibrarySong from "./librarySong"

const Library = ({songs,setCurrentSong,audioRef,playing})=>{

    return(
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((element,index)=>{return <LibrarySong setCurrentSong={setCurrentSong} Song={element} key={index} audioRef={audioRef} playing={playing}/>})}
            </div>
        </div>
    )
}

export default Library