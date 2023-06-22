import React, { useEffect } from 'react';
import RootLayout from './RootLayout';
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';

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
      <h3>Home page</h3>
    </RootLayout>
  );
};

export default Home;
