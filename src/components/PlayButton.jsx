import React from 'react';
import iconPlay from '../assets/icon-play.svg';

const PlayButton = () => {
  return (
    <button className="w-[117px] h-12 bg-primary-black rounded-[28px] opacity-25 relative">
      <span>
        <img src={iconPlay} alt="icon-play" className="w-8 h-8" />
      </span>
    </button>
  );
};

export default PlayButton;
