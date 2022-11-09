import React from 'react';
import SongBar from '../song-bar';

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePause,
  handlePlay,
  artistId,
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

      <div className="mt-6 w-full flex flex-col">
        {data?.map((song, index) => (
          <SongBar
            key={`${song.key}-${artistId}`}
            song={song}
            index={index}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePause}
            handlePlay={handlePlay}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;
