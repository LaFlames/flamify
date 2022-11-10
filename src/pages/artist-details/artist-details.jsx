import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as C from '../../components';

import { useGetArtistDetailsQuery } from '../../redux/services/shazam-core';

const ArtistDetails = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { id: artistId } = useParams();

  const { data, isFetching, error } = useGetArtistDetailsQuery(artistId);

  if (isFetching) {
    return <C.Loader />;
  }

  if (error) {
    return <C.Error />;
  }

  return (
    <div className="flex flex-col">
      <C.DetailsHeader artistId={artistId} artistData={data} />

      <C.RelatedSongs
        data={Object.values(data?.songs)}
        isPlaying={isPlaying}
        activeSong={activeSong}
        artistId={artistId}
      />
    </div>
  );
};

export default ArtistDetails;
