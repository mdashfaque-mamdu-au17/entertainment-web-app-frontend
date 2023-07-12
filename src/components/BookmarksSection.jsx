import React from 'react';
import { SingleMovie, SingleMoviesLoader, TitleHeading } from './index';

const BookmarksSection = ({ isLoading, data, isError, error }) => {
  const movies =
    data?.movies?.length > 0 &&
    data?.movies?.filter((movie) => {
      return movie?.category === 'Movie';
    });

  const tvSeries =
    data?.movies?.length > 0 &&
    data?.movies?.filter((movie) => {
      return movie?.category === 'TV Series';
    });
  return (
    <>
      {/* movies section */}
      {!isLoading && data?.movies.length === 0 && (
        <TitleHeading>No Bookmarks Found!</TitleHeading>
      )}
      <section>
        {isLoading && (
          <div className="w-20 h-3 rounded-xl bg-slate-600 sm:w-40 sm:h-8 animate-pulse"></div>
        )}
        {!isError && !isLoading && movies.length > 0 && (
          <TitleHeading>Bookmarked Movies</TitleHeading>
        )}
        {isLoading && <SingleMoviesLoader />}
        {!isLoading && !isError && movies?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-x-[15px] gap-y-4 sm:gap-x-[29px] sm:gap-y-6 lg:mt-[38px] lg:gap-x-10 lg:gap-y-8">
            {movies?.map((movie) => {
              return <SingleMovie key={movie?._id} {...movie} />;
            })}
          </div>
        )}
      </section>

      {/* tv series section */}
      <section className="mt-6 sm:mt-12 lg:mt-10">
        {isLoading && (
          <div className="w-20 h-3 rounded-xl bg-slate-600 sm:w-40 sm:h-8 animate-pulse"></div>
        )}
        {!isError && !isLoading && tvSeries.length > 0 && (
          <TitleHeading>Bookmarked TV Series</TitleHeading>
        )}
        {isLoading && <SingleMoviesLoader />}
        {!isLoading && !isError && tvSeries?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-x-[15px] gap-y-4 sm:gap-x-[29px] sm:gap-y-6 lg:mt-[38px] lg:gap-x-10 lg:gap-y-8">
            {tvSeries?.map((movie) => {
              return <SingleMovie key={movie?._id} {...movie} />;
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default BookmarksSection;
