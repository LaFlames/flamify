import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import * as LC from './components';
import MusicPlayer from '../music-player';
import TopPlay from '../top-play';
import SearchBar from '../search-bar';

const Layout = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <LC.Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <SearchBar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Outlet />
          </div>

          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div
          className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup
         bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10"
        >
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default Layout;
