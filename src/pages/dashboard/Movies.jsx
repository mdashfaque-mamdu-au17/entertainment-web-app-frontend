import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import RootLayout from './RootLayout';
import { MoviesSection, SearchInput } from '../../components';

const Movies = () => {
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
      <div className="mt-6 px-4 sm:mt-[33px] sm:px-[25px] lg:mt-[34px] lg:px-0 lg:ml-[128px] lg:px-8 z-20">
        <MoviesSection />
      </div>
    </RootLayout>
  );
};

export default Movies;
