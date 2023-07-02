import React from 'react';
import iconPlay from '../assets/icon-play.svg';

const PlayButton = () => {
  return (
    <button className="w-[117px] h-12 bg-primary-black rounded-[28px] opacity-25 relative">
      <div className="flex items-center ml-[9px] gap-[19px]">
        <img src={iconPlay} alt="icon-play" className="w-8 h-8" />
        <h6 className="text-primary-white text-lg font-medium">Play</h6>
      </div>
    </button>
  );
};

export default PlayButton;
