import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import * as C from '../../components';

import { useGetSongsByCountryQuery } from '../../redux/services/shazam-core';

const AroundYou = () => {
  const [country, setCountry] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  React.useEffect(() => {
    axios
      .get(
        'https://geo.ipify.org/api/v2/country?apiKey=at_L5IluEReTINgI9Ou3XgBoORl1WgFZ',
      )
      .then((res) => setCountry(res.data.location.country))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [country]);

  if (isFetching || loading) {
    return <C.Loader />;
  }

  if (error) {
    return <C.Error />;
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl text-white text-left mt-4 mb-10">
        Around You <span className="font-black">({country})</span>
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

export default AroundYou;
