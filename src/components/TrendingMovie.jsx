import React, { useState } from 'react';
import { BookmarkEmpty, BookmarkFull } from '../components/Icons';
import iconPlay from '../assets/icon-play.svg';

const TrendingMovie = ({}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="relative w-[240px] h-[140px] rounded-lg overflow-hidden bg-cover bg-no-repeat sm:w-[470px] sm:h-[230px]">
      <img
        src="https://res.cloudinary.com/dzajmcocc/image/upload/v1686565146/Movies-backend/Beyond%20Earth/trending/small_hhtlnp.jpg"
        alt=""
        loading="lazy"
        className="rounded-lg"
      />
      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-black to-black opacity-0 transition duration-300 ease-in-out hover:opacity-50 hover:cursor-pointer"></div>
      <button
        className="bg-primary-black opacity-60 w-8 h-8 absolute top-2 right-2 rounded-full hover:cursor-pointer hover:bg-primary-white transition duration-300 ease-in-out flex items-center justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsBookmarked(!isBookmarked)}
      >
        <BookmarkEmpty isBookmarked={isBookmarked} isHovered={isHovered} />
      </button>
    </section>
  );
};

export default TrendingMovie;
