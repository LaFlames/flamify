import * as C from '../../components';
import * as D from '../../duck';

const Discover = () => {
  console.log(D.genres);

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

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((song) => (
          <C.SongCard key={song.key} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
