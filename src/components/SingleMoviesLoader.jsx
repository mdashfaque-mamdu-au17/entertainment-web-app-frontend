import React from 'react';
import { SingleMovieSkelton } from './index';

const SingleMoviesLoader = () => {
  return (
    <div className="mt-6 flex flex-wrap gap-x-[15px] gap-y-4 sm:gap-x-[30px] sm:gap-y-6 lg:mt-8 lg:gapx-10 lg:gap-y-8">
      <SingleMovieSkelton />
      <SingleMovieSkelton />
      <SingleMovieSkelton />
      <SingleMovieSkelton />
      <SingleMovieSkelton />
    </div>
  );
};

export default SingleMoviesLoader;
