import React from "react";
import LibrarySong from "./librarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  playing,
  setSongs,
  libStatus,
  currentSong,
}) => {
  return (
    <div className={`library ${libStatus ? "active" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((element, index) => {
          return (
            <LibrarySong
              setCurrentSong={setCurrentSong}
              Song={element}
              key={index}
              audioRef={audioRef}
              playing={playing}
              setSongs={setSongs}
              songs={songs}
              currentSong={currentSong}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
