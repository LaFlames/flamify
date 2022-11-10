import React from 'react';
import * as C from '../../components';
import { useGetTopChartsQuery } from '../../redux/services/shazam-core';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) {
    return <C.Loader />;
  }

  if (error) {
    return <C.Error />;
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl text-white text-left mt-4 mb-10">
        Top Artists
      </h2>

      <div className="flex flex-wrap sm-justify-start justify-center gap-8">
        {data?.map((track) => (
          <C.ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
