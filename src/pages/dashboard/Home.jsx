import React, { useEffect, useState } from 'react';
import RootLayout from './RootLayout';
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../components/SearchInput';
import TrendingMovie from '../../components/TrendingMovie';

const Home = () => {
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

  return (
    <RootLayout>
      <div className="mt-6 px-4 sm:mt-[33px] sm:px-[25px] lg:mt-16 lg:px-0 lg:ml-[128px] lg:px-8">
        <SearchInput
          id="homeSearch"
          name="homeSearch"
          type="text"
          label="homeSearch"
          placeholder="Search for movies or TV series"
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </div>

      <div className="mt-6 px-4 sm:mt-[33px] sm:px-[25px] lg:mt-16 lg:px-0 lg:ml-[128px] lg:px-8">
        <TrendingMovie />
      </div>
    </RootLayout>
  );
};

export default Home;
