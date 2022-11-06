import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({
  song,
  isPlaying,
  activeSong,
  handlePlay,
  handlePause,
}) => {
  if (isPlaying && activeSong?.title === song.title) {
    return (
      <FaPauseCircle
        size={35}
        className="text-gray-300"
        onClick={handlePause}
      />
    );
  }

  return (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );
};

export default PlayPause;
