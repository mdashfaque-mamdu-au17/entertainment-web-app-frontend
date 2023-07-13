import React, { useState } from 'react';
import { BookmarkEmpty, BookmarkFull, Spinner } from '../components/Icons';
import SubTitle from './SubTitle';
import movieIcon from '../assets/icon-category-movie.svg';
import tvSeriesIcon from '../assets/icon-category-tv.svg';
import Dot from './Dot';
import PlayButton from './PlayButton';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import customFetch from '../utils/axios';

const TrendingMovie = (props) => {
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
    <section className="relative w-[240px] h-[140px] rounded-lg overflow-hidden bg-cover bg-no-repeat sm:w-[470px] sm:h-[230px] group/item">
      <img
        src={thumbnail?.trending?.small}
        alt=""
        loading="lazy"
        className="rounded-lg sm:hidden"
      />
      <img
        src={thumbnail?.trending?.large}
        alt=""
        loading="lazy"
        className="hidden sm:block rounded-lg"
      />

      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-black to-black opacity-0 transition duration-300 ease-in-out hover:opacity-50 hover:cursor-pointer"></div>
      <button
        className="bg-primary-black opacity-60 w-8 h-8 absolute top-2 right-2 rounded-full hover:cursor-pointer hover:bg-primary-white transition duration-300 ease-in-out flex items-center justify-center sm:top-4 sm:right-6"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={bookmarkHandler}
      >
        {createBookmarkLoading || deleteBookmarkLoading ? (
          <Spinner isHovered={isHovered} />
        ) : (
          <BookmarkEmpty isBookmarked={isBookmarked} isHovered={isHovered} />
        )}
      </button>

      <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6">
        <div className="flex items-center gap-2">
          <div>
            <SubTitle type="trending">{year}</SubTitle>
          </div>
          <div className="flex items-center">
            <Dot />
            <div className="pl-2 pr-1.5">
              <img
                src={category === 'Movie' ? movieIcon : tvSeriesIcon}
                alt="movie-icon"
                className="w-3 h-3"
              />
            </div>
            <div>
              <SubTitle type="trending">{category}</SubTitle>
            </div>
          </div>

          <div className="flex items-center">
            <Dot />
            <div className="pl-2">
              <SubTitle type="trending">{rating}</SubTitle>
            </div>
          </div>
        </div>

        <div className="pt-1">
          <h4 className="text-[15px] text-primary-white font-medium sm:text-2xl">
            {title}
          </h4>
        </div>
      </div>

      <div className="invisible sm:group-hover/item:visible absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <PlayButton />
      </div>
    </section>
  );
};

export default TrendingMovie;
