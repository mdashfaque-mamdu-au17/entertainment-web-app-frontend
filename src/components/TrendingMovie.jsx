import React, { useState } from 'react';
import { BookmarkEmpty, BookmarkFull } from '../components/Icons';
import SubTitle from './SubTitle';
import movieIcon from '../assets/icon-category-movie.svg';
import Dot from './Dot';
import PlayButton from './PlayButton';

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
    <section className="relative w-[240px] h-[140px] rounded-lg overflow-hidden bg-cover bg-no-repeat sm:w-[470px] sm:h-[230px] group/item">
      <img
        src="https://res.cloudinary.com/dzajmcocc/image/upload/v1686565146/Movies-backend/Beyond%20Earth/trending/small_hhtlnp.jpg"
        alt=""
        loading="lazy"
        className="rounded-lg"
      />
      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-black to-black opacity-0 transition duration-300 ease-in-out hover:opacity-50 hover:cursor-pointer"></div>
      <button
        className="bg-primary-black opacity-60 w-8 h-8 absolute top-2 right-2 rounded-full hover:cursor-pointer hover:bg-primary-white transition duration-300 ease-in-out flex items-center justify-center sm:top-4 sm:right-6"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsBookmarked(!isBookmarked)}
      >
        <BookmarkEmpty isBookmarked={isBookmarked} isHovered={isHovered} />
      </button>

      <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6">
        <div className="flex items-center gap-2">
          <div>
            <SubTitle type="trending">2019</SubTitle>
          </div>
          <div className="flex items-center">
            <Dot />
            <div className="pl-2 pr-1.5">
              <img src={movieIcon} alt="movie-icon" className="w-3 h-3" />
            </div>
            <div>
              <SubTitle type="trending">Movie</SubTitle>
            </div>
          </div>

          <div className="flex items-center">
            <Dot />
            <div className="pl-2">
              <SubTitle type="trending">PG</SubTitle>
            </div>
          </div>
        </div>

        <div className="pt-1">
          <h4 className="text-[15px] text-primary-white font-medium sm:text-2xl">
            Beyond Earth
          </h4>
        </div>
      </div>

      <div className="invisible group-hover/item:visible absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <PlayButton />
      </div>
    </section>
  );
};

export default TrendingMovie;
