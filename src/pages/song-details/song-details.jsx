import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as C from '../../components';
import { playPause, setActiveSong } from '../../redux/features/player-slice';
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from '../../redux/services/shazam-core';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { songId, id: artistId } = useParams();

  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery(songId);
  const {
    data: relatedSongsData,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetSongRelatedQuery(songId);

  const handlePause = () => {
    dispatch(playPause(false));
  };
  const handlePlay = (song, index) => {
    dispatch(setActiveSong({ song, data: relatedSongsData, index }));
    dispatch(playPause(true));
  };

  if (isFetchingSongDetails || isFetchingRelatedSongs) {
    return <C.Loader />;
  }

  if (error) {
    return <C.Error />;
  }

  return (
    <div className="flex flex-col">
      <C.DetailsHeader songData={songData} />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS' ? (
            songData.sections[1].text.map((line) => (
              <p className="text-gray-400 text-base my-1">{line}</p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, no lyrics find!
            </p>
          )}
        </div>
      </div>

      <C.RelatedSongs
        data={relatedSongsData}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePlay={handlePlay}
        handlePause={handlePause}
        artistId={artistId}
      />
    </div>
  );
};

export default SongDetails;
