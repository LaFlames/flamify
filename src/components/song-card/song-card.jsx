import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { playPause, setActiveSong } from '../../redux/features/player-slice';
import PlayPause from '../play-pause';

const SongCard = ({ song, index, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();

  const handlePause = () => {
    dispatch(playPause(false));
  };
  const handlePlay = () => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80
     backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
    >
      <div className="relative w-full h-54 group">
        <div
          className={`absolute inset-0 justify-center items-center
           bg-black bg-opacity-50 group-hover:flex ${
             activeSong?.title === song?.title
               ? 'flex bg-black bg-opacity-70'
               : 'hidden'
           }`}
        >
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePause}
            handlePlay={handlePlay}
          />
        </div>
        <img src={song.images?.coverart} alt="song_img" />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <NavLink to={`/songs/${song?.key}`}>{song.title}</NavLink>
        </p>
        <p className="text-sm text-gray-300 mt-1 truncate">
          <NavLink
            to={
              song.artists
                ? `/artists/${song?.artists[0].adamid}`
                : '/top-artists'
            }
          >
            {song.subtitle}
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
