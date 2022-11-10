import React from 'react';
import { useSelector } from 'react-redux';
import * as C from '../../components';
import { useGetTopChartsQuery } from '../../redux/services/shazam-core';

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

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
        Discover Top Charts
      </h2>

      <div className="flex flex-wrap sm-justify-start justify-center gap-8">
        {data?.map((song, index) => (
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

export default TopCharts;