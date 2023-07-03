import React from 'react';
import { TitleHeading } from './index';
import { useQuery } from '@tanstack/react-query';
import customFetch from '../utils/axios';

const TrendingMoviesSection = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['getTrendingMovies'],
    queryFn: async () => {
      const { data } = await customFetch.get('/movies?isTrending=true');
      return data;
    },
  });

  return (
    <section>
      <div className="pl-4 sm:pl-[25px] lg:pl-9">
        <TitleHeading>Trending</TitleHeading>
      </div>
    </section>
  );
};

export default TrendingMoviesSection;
