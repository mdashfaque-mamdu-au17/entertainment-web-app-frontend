import React from 'react';
import { TrendingMovieSkelton } from './index';

const TrendingMovieLoader = () => {
  return (
    <div className="flex gap-4 sm:gap-10">
      <div>
        <TrendingMovieSkelton />
      </div>
      <div>
        <TrendingMovieSkelton />
      </div>
      <div>
        <TrendingMovieSkelton />
      </div>
      <div>
        <TrendingMovieSkelton />
      </div>
    </div>
  );
};

export default TrendingMovieLoader;
