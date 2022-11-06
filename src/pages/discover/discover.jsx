import * as C from '../../components';
import * as D from '../../duck';
import { useGetTopChartsQuery } from '../../redux/services/shazam-core';

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log(data);

  if (isFetching) {
    return <C.Loader />;
  }

  if (error) {
    return <C.Error />;
  }

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white">
          Discover {D.genres[0].title}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {D.genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      {data.length && (
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {data.map((song) => (
            <C.SongCard key={song.key} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Discover;
