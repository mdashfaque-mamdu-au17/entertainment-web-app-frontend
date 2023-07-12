import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import RootLayout from './RootLayout';
import { BookmarksSection, SearchInput, SearchResults } from '../../components';
import { useQuery } from '@tanstack/react-query';
import customFetch from '../../utils/axios';

const Bookmarked = () => {
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
    queryKey: ['bookmarks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/bookmarks');
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
          id="bookmarks"
          name="bookmarks"
          type="text"
          label="bookmarks"
          placeholder="Search for bookmarked shows"
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </div>

      {/* bookmarks */}
      {!searchTerm && (
        <div className="mt-6 px-4 sm:mt-[33px] sm:px-[25px] lg:mt-[34px] lg:px-0 lg:ml-[128px] lg:px-8 z-20">
          <BookmarksSection
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

export default Bookmarked;
