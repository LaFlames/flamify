import { useSelector, useDispatch } from 'react-redux';
import * as C from '../../components';
import * as D from '../../duck';
import { selectGenreListId } from '../../redux/features/player-slice';
import { useGetSongsByGenreQuery } from '../../redux/services/shazam-core';

const Discover = () => {
  const dispatch = useDispatch();
  const { isPlaying, activeSong, genreListId } = useSelector(
    (state) => state.player
  );

  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId || 'POP'
  );
  const genreTitle =
    D.genres.find((genre) => genre.value === genreListId)?.title || 'Pop';

  if (isFetching) {
    return <C.Loader />;
  }

  if (error) {
    return <C.Error />;
  }

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white">Discover {genreTitle}</h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'POP'}
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
          {data.map((song, i) => (
            <C.SongCard
              key={song.key}
              song={song}
              index={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Discover;
