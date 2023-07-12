import React from 'react';
import { TitleHeading, SingleMovie } from './index';

const SearchResults = ({ searchTerm, searchResults }) => {
  return (
    <section className="mt-6 px-4 sm:mt-[34px] lg:mt-[35px]sm:px-[25px] lg:px-0 lg:ml-[128px] lg:px-8 ">
      <TitleHeading>
        {searchResults.length > 0
          ? `Found ${searchResults.length} results for '${searchTerm}'`
          : `No results found for '${searchTerm}'`}
      </TitleHeading>
      {searchResults.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-x-[15px] gap-y-4 sm:gap-x-[30px] sm:gap-y-6 lg:mt-8 lg:gapx-10 lg:gap-y-8">
          {searchResults?.map((movie) => {
            return <SingleMovie key={movie?._id} {...movie} />;
          })}
        </div>
      )}
    </section>
  );
};

export default SearchResults;
