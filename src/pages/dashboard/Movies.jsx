import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import RootLayout from './RootLayout';
import { MoviesSection, SearchInput, SearchResults } from '../../components';
import { useQuery } from '@tanstack/react-query';
import customFetch from '../../utils/axios';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
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
    queryKey: ['movies'],
    queryFn: async () => {
      const { data } = await customFetch.get('/movies?category=Movie');
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
          id="movieSearch"
          name="movieSearch"
          type="text"
          lable="movieSearch"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </div>

      {/* movies */}
      {!searchTerm && (
        <div className="mt-6 px-4 sm:mt-[33px] sm:px-[25px] lg:mt-[34px] lg:px-0 lg:ml-[128px] lg:px-8 z-20">
          <MoviesSection
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

export default Movies;
