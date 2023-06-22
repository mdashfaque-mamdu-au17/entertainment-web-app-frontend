import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/image-avatar.png';
import {
  HomeIcon,
  MovieIcon,
  TvSeriesIcon,
  BookmarkIcon,
} from '../../components/Icons';
import Button from '../../components/Button';
import { useGlobalContext } from '../../context';

const RootLayout = ({ children }) => {
  const { logoutUser } = useGlobalContext();
  const [showLogout, setShowLogout] = useState(false);

  const logoutHandler = () => {
    setShowLogout(!showLogout);
  };

  return (
    <>
      {/* for mobile and tablet */}
      <header className="bg-semi-dark-blue h-14 flex items-center justify-between px-4 sm:h-[72px] sm:px-6 sm:mx-[25px] sm:mt-[23px] sm:rounded-[10px] lg:hidden">
        {/* logo */}
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-[25px] h-5 sm:w-8 sm:h-[26px]"
          />
        </div>

        {/* navigations */}
        <div className="flex items-center gap-6 sm:gap-8">
          <NavLink to="/">
            {({ isActive, isPending }) => (
              <HomeIcon color={isActive ? '#fff' : '#5A698F'} />
            )}
          </NavLink>

          <NavLink to="/movies">
            {({ isActive, isPending }) => (
              <MovieIcon color={isActive ? '#fff' : '#5A698F'} />
            )}
          </NavLink>

          <NavLink to="/tv-series">
            {({ isActive, isPending }) => (
              <TvSeriesIcon color={isActive ? '#fff' : '#5A698F'} />
            )}
          </NavLink>

          <NavLink to="/bookmarks">
            {({ isActive, isPending }) => (
              <BookmarkIcon color={isActive ? '#fff' : '#5A698F'} />
            )}
          </NavLink>
        </div>

        {/* avatar */}
        {showLogout && (
          <div className="absolute top-14 sm:top-[95px] right-0 sm:right-6">
            <Button
              type="btn"
              style="w-[120px] md:w-[120px]"
              onClick={logoutUser}
            >
              Logout
            </Button>
          </div>
        )}
        <button onClick={logoutHandler}>
          <img src={avatar} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </header>

      <header className="hidden lg:block lg:fixed lg:top-8 lg:left-8 bg-semi-dark-blue w-24 h-[900px] rounded-[20px]">
        <div>
          {/* logo */}
          <div className="absolute top-9 right-1/2 transform translate-x-1/2">
            <img src={logo} alt="logo" className="w-8 h-[26px]" />
          </div>

          {/* navigations */}
          <div className="absolute top-[136px] right-1/2 transform translate-x-1/2">
            <div className="flex flex-col gap-10">
              <NavLink to="/">
                {({ isActive, isPending }) => (
                  <HomeIcon color={isActive ? '#fff' : '#5A698F'} />
                )}
              </NavLink>

              <NavLink to="/movies">
                {({ isActive, isPending }) => (
                  <MovieIcon color={isActive ? '#fff' : '#5A698F'} />
                )}
              </NavLink>

              <NavLink to="/tv-series">
                {({ isActive, isPending }) => (
                  <TvSeriesIcon color={isActive ? '#fff' : '#5A698F'} />
                )}
              </NavLink>

              <NavLink to="/bookmarks">
                {({ isActive, isPending }) => (
                  <BookmarkIcon color={isActive ? '#fff' : '#5A698F'} />
                )}
              </NavLink>
            </div>
          </div>

          {/* avatar */}
          {showLogout && (
            <div className="absolute bottom-6 left-24 z-50">
              <Button type="btn" style="md:w-[120px]" onClick={logoutUser}>
                Logout
              </Button>
            </div>
          )}

          <button onClick={logoutHandler}>
            <img
              src={avatar}
              alt=""
              className="absolute bottom-8 right-1/2 transform translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8"
            />
          </button>
        </div>
      </header>
      {children}
    </>
  );
};

export default RootLayout;
