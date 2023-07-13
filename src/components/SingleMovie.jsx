import React, { useState } from 'react';
import { BookmarkEmpty, BookmarkFull, Spinner } from './Icons';
import { Dot, PlayButton, SubTitle } from './index';
import movieIcon from '../assets/icon-category-movie.svg';
import tvSeriesIcon from '../assets/icon-category-tv.svg';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import customFetch from '../utils/axios';
import { toast } from 'react-toastify';
import iconfull from '../assets/icon-bookmark-full.svg';
import iconEmpty from '../assets/icon-bookmark-empty.svg';

const SingleMovie = (props) => {
  const { title, year, category, rating, thumbnail, isBookmarked } = props;
  const [isHovered, setIsHovered] = useState(false);
  const queryClient = useQueryClient();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const { mutate: createBookmark, isLoading: createBookmarkLoading } =
    useMutation({
      mutationFn: async (movieId) =>
        customFetch.post('/bookmarks', { movieId }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['getTrendingMovies'] });
        queryClient.invalidateQueries({ queryKey: ['getAllMovies'] });
        queryClient.invalidateQueries({ queryKey: ['movies'] });
        queryClient.invalidateQueries({ queryKey: ['tvseries'] });
        queryClient.invalidateQueries({ queryKey: ['bookmarks'] });
      },
    });

  const { mutate: deleteBookmark, isLoading: deleteBookmarkLoading } =
    useMutation({
      mutationFn: async (movieId) => {
        return customFetch.delete(`/bookmarks/${movieId}`, { movieId });
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['getTrendingMovies'] });
        queryClient.invalidateQueries({ queryKey: ['getAllMovies'] });
        queryClient.invalidateQueries({ queryKey: ['movies'] });
        queryClient.invalidateQueries({ queryKey: ['tvseries'] });
        queryClient.invalidateQueries({ queryKey: ['bookmarks'] });
      },
    });

  const bookmarkHandler = () => {
    if (!isBookmarked) {
      createBookmark(props._id);
    }
    if (isBookmarked) {
      deleteBookmark(props._id);
    }
  };

  return (
    <section className="w-[164px] sm:w-[220px] lg:w-[280px]">
      <div className="relative w-[164px] h-[110px] rounded-lg overflow-hidden bg-cover bg-no-repeat sm:w-[220px] sm:h-[140px] lg:w-[280px] lg:h-[174px] group/item">
        <img
          src={thumbnail?.regular?.small}
          alt=""
          loading="lazy"
          className="rounded-lg w-full h-full sm:hidden"
        />
        <img
          src={thumbnail?.regular?.medium}
          alt=""
          loading="lazy"
          className="hidden sm:block rounded-lg w-full h-full"
        />
        <img
          src={thumbnail?.regular?.large}
          alt=""
          loading="lazy"
          className="hidden lg:block rounded-lg w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-black to-black opacity-0 transition duration-300 ease-in-out hover:opacity-50 hover:cursor-pointer"></div>
        <button
          className="bg-primary-black opacity-60 w-8 h-8 absolute top-2 right-2 rounded-full hover:cursor-pointer hover:bg-primary-white transition duration-300 ease-in-out flex items-center justify-center sm:top-4 sm:right-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={bookmarkHandler}
        >
          {createBookmarkLoading || deleteBookmarkLoading ? (
            <Spinner isHovered={isHovered} />
          ) : isBookmarked ? (
            <img src={iconfull} />
          ) : (
            <img src={iconEmpty} />
          )}
        </button>

        <div className="invisible sm:group-hover/item:visible absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <PlayButton />
        </div>
      </div>

      <div className="pt-2">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div>
            <SubTitle type="normal">{year}</SubTitle>
          </div>
          <div className="flex items-center">
            <Dot styles="bg-primary-white/50" />
            <div className="pl-1.5 pr-1 sm:pl-2 sm:pr-1.5">
              <img
                src={category === 'Movie' ? movieIcon : tvSeriesIcon}
                alt="movie-icon"
                className="w-2.5 h-2.5 sm:w-3 sm:h-3"
              />
            </div>
            <div>
              <SubTitle type="normal">{category}</SubTitle>
            </div>
          </div>

          <div className="flex items-center">
            <Dot styles="bg-primary-white/50" />
            <div className="pl-1.5 sm:pl-2">
              <SubTitle type="normal">{rating}</SubTitle>
            </div>
          </div>
        </div>

        <div className="pt-1 sm:pt-[5px]">
          <h4 className="text-sm text-primary-white font-medium sm:text-lg">
            {title}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
