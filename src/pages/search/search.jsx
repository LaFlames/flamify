import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as C from '../../components';
import { useGetSongsBySearchQuery } from '../../redux/services/shazam-core';

const Search = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { searchTerm } = useParams();
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.tracks?.hits?.map((song) => song.track);

  if (isFetching) {
    return <C.Loader />;
  }

  if (error) {
    return <C.Error />;
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searchTerm}</span>
      </h2>

      <div className="flex flex-wrap sm-justify-start justify-center gap-8">
        {songs?.map((song, index) => (
          <C.SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
