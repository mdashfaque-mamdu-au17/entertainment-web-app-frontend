import React, { useEffect } from 'react';
import RootLayout from './RootLayout';
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../components/SearchInput';

const Home = () => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();
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
        />
      </div>
      <h3>Home page</h3>
    </RootLayout>
  );
};

export default Home;
