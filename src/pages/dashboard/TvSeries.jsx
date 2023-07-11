import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import RootLayout from './RootLayout';
import { TvSeriesSection, SearchInput, SearchResults } from '../../components';
import { useQuery } from '@tanstack/react-query';
import customFetch from '../../utils/axios';

const TvSeries = () => {
  const [searchTerm, setSearchTerm] = useState();
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['tvseries'],
    queryFn: async () => {
      const { data } = await customFetch.get('/movies?category=TV Series');
      return data;
    },
  });

  const searchResults =
    searchTerm &&
    data?.movies?.filter((movie) => {
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

  return (
    <RootLayout>
      <div className="mt-6 px-4 sm:mt-[33px] sm:px-[25px] lg:mt-16 lg:px-0 lg:ml-[128px] lg:px-8 z-20">
        <SearchInput
          id="tvseriesSearch"
          name="tvseriesSearch"
          type="text"
          label="tvseriesSearch"
          placeholder="Search for TV series"
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </div>

      {/* TV Series */}
      {!searchTerm && (
        <div className="mt-6 px-4 sm:mt-[33px] sm:px-[25px] lg:mt-[34px] lg:px-0 lg:ml-[128px] lg:px-8 z-20">
          <TvSeriesSection
            isLoading={isLoading}
            data={data}
            isError={isError}
            error={error}
          />
        </div>
      )}

      {/* search results */}
      {searchTerm && (
        <SearchResults searchTerm={searchTerm} searchResults={searchResults} />
      )}
    </RootLayout>
  );
};

export default TvSeries;
