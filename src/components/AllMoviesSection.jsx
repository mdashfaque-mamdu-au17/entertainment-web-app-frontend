import React from 'react';
import { SingleMovie, SingleMoviesLoader, TitleHeading } from './index';

const AllMoviesSection = ({ isLoading, data, isError, error }) => {
  return (
    <section>
      {!isError && <TitleHeading>Recommended for you</TitleHeading>}
      {isLoading && <SingleMoviesLoader />}
      {!isLoading && !isError && data?.movies?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-x-[15px] gap-y-4 sm:gap-x-[30px] sm:gap-y-6 lg:mt-8 lg:gapx-10 lg:gap-y-8">
          {data?.movies?.map((movie) => {
            return <SingleMovie key={movie?._id} {...movie} />;
          })}
        </div>
      )}
    </section>
  );
};

export default AllMoviesSection;
