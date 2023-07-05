import React, { useState, useEffect, useLayoutEffect } from 'react';
import { TitleHeading, TrendingMovie, TrendingMovieLoader } from './index';
import { useQuery } from '@tanstack/react-query';
import customFetch from '../utils/axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper';

const TrendingMoviesSection = () => {
  const [responsiveData, setResponsiveData] = useState({
    slidersPerView: 1.5,
    gap: 16,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 420) {
        setResponsiveData({ ...responsiveData, slidersPerView: 1.5, gap: 16 });
      } else if (window.innerWidth > 420 && window.innerWidth <= 480) {
        setResponsiveData({ ...responsiveData, slidersPerView: 1.7, gap: 16 });
      } else if (window.innerWidth > 480 && window.innerWidth <= 520) {
        setResponsiveData({ ...responsiveData, slidersPerView: 1.8 });
      } else if (window.innerWidth > 520 && window.innerWidth <= 580) {
        setResponsiveData({ ...responsiveData, slidersPerView: 2, gap: 20 });
      } else if (window.innerWidth > 580 && window.innerWidth <= 620) {
        setResponsiveData({ ...responsiveData, slidersPerView: 2.2, gap: 16 });
      } else if (window.innerWidth > 620 && window.innerWidth <= 640) {
        setResponsiveData({ ...responsiveData, slidersPerView: 2.4 });
      } else if (window.innerWidth > 640 && window.innerWidth <= 680) {
        setResponsiveData({ ...responsiveData, slidersPerView: 1.3, gap: 40 });
      } else if (window.innerWidth > 680 && window.innerWidth <= 720) {
        setResponsiveData({ ...responsiveData, slidersPerView: 1.4, gap: 40 });
      } else if (window.innerWidth > 720 && window.innerWidth <= 780) {
        setResponsiveData({ ...responsiveData, slidersPerView: 1.5, gap: 40 });
      } else if (window.innerWidth > 780 && window.innerWidth <= 820) {
        setResponsiveData({ ...responsiveData, slidersPerView: 1.6, gap: 40 });
      } else if (window.innerWidth > 820 && window.innerWidth <= 890) {
        setResponsiveData({ ...responsiveData, slidersPerView: 1.7, gap: 40 });
      } else if (window.innerWidth > 890 && window.innerWidth <= 930) {
        setResponsiveData({ ...responsiveData, slidersPerView: 1.8, gap: 40 });
      } else if (window.innerWidth > 930 && window.innerWidth <= 1000) {
        setResponsiveData({ ...responsiveData, slidersPerView: 1.9, gap: 40 });
      } else if (window.innerWidth > 1000 && window.innerWidth <= 1023) {
        setResponsiveData({ ...responsiveData, slidersPerView: 2, gap: 40 });
      } else if (window.innerWidth > 1023 && window.innerWidth <= 1080) {
        setResponsiveData({ ...responsiveData, slidersPerView: 1.8, gap: 40 });
      } else if (window.innerWidth > 1080 && window.innerWidth <= 1110) {
        setResponsiveData({ ...responsiveData, slidersPerView: 1.9, gap: 40 });
      } else if (window.innerWidth > 1110 && window.innerWidth <= 1180) {
        setResponsiveData({ ...responsiveData, slidersPerView: 2, gap: 40 });
      } else if (window.innerWidth > 1180 && window.innerWidth <= 1230) {
        setResponsiveData({ ...responsiveData, slidersPerView: 2.1, gap: 40 });
      } else if (window.innerWidth > 1230 && window.innerWidth <= 1270) {
        setResponsiveData({ ...responsiveData, slidersPerView: 2.2, gap: 40 });
      } else if (window.innerWidth > 1270 && window.innerWidth <= 1310) {
        setResponsiveData({ ...responsiveData, slidersPerView: 2.3, gap: 40 });
      } else if (window.innerWidth > 1310 && window.innerWidth <= 1370) {
        setResponsiveData({ ...responsiveData, slidersPerView: 2.4, gap: 40 });
      } else if (window.innerWidth > 1370 && window.innerWidth <= 1420) {
        setResponsiveData({ ...responsiveData, slidersPerView: 2.5, gap: 40 });
      } else if (window.innerWidth > 1420 && window.innerWidth <= 1470) {
        setResponsiveData({ ...responsiveData, slidersPerView: 2.6, gap: 40 });
      } else if (window.innerWidth > 1470 && window.innerWidth <= 1510) {
        setResponsiveData({ ...responsiveData, slidersPerView: 2.7, gap: 40 });
      } else if (window.innerWidth > 1510 && window.innerWidth <= 1550) {
        setResponsiveData({ ...responsiveData, slidersPerView: 2.8, gap: 40 });
      } else if (window.innerWidth > 1550 && window.innerWidth <= 1600) {
        setResponsiveData({ ...responsiveData, slidersPerView: 2.9, gap: 40 });
      } else if (window.innerWidth > 1600 && window.innerWidth <= 1650) {
        setResponsiveData({ ...responsiveData, slidersPerView: 3, gap: 40 });
      } else if (window.innerWidth > 1650 && window.innerWidth <= 1700) {
        setResponsiveData({ ...responsiveData, slidersPerView: 3.1, gap: 40 });
      } else if (window.innerWidth > 1700 && window.innerWidth <= 1750) {
        setResponsiveData({ ...responsiveData, slidersPerView: 3.2, gap: 40 });
      } else if (window.innerWidth > 1750 && window.innerWidth <= 1800) {
        setResponsiveData({ ...responsiveData, slidersPerView: 3.3, gap: 40 });
      } else if (window.innerWidth > 1800 && window.innerWidth <= 1850) {
        setResponsiveData({ ...responsiveData, slidersPerView: 3.4, gap: 40 });
      } else if (window.innerWidth > 1850 && window.innerWidth <= 1900) {
        setResponsiveData({ ...responsiveData, slidersPerView: 3.5, gap: 40 });
      } else if (window.innerWidth > 1900 && window.innerWidth <= 2000) {
        setResponsiveData({ ...responsiveData, slidersPerView: 3.6, gap: 40 });
      } else if (window.innerWidth > 2000 && window.innerWidth <= 2050) {
        setResponsiveData({ ...responsiveData, slidersPerView: 3.7, gap: 40 });
      } else if (window.innerWidth > 2050 && window.innerWidth <= 2100) {
        setResponsiveData({ ...responsiveData, slidersPerView: 3.8, gap: 40 });
      } else if (window.innerWidth > 2100 && window.innerWidth <= 2170) {
        setResponsiveData({ ...responsiveData, slidersPerView: 3.9, gap: 40 });
      } else if (window.innerWidth > 2170 && window.innerWidth <= 2220) {
        setResponsiveData({ ...responsiveData, slidersPerView: 4, gap: 40 });
      } else if (window.innerWidth > 2220 && window.innerWidth <= 2270) {
        setResponsiveData({ ...responsiveData, slidersPerView: 4.1, gap: 40 });
      } else if (window.innerWidth > 2270 && window.innerWidth <= 2340) {
        setResponsiveData({ ...responsiveData, slidersPerView: 4.2, gap: 40 });
      } else if (window.innerWidth > 2340 && window.innerWidth <= 2380) {
        setResponsiveData({ ...responsiveData, slidersPerView: 4.3, gap: 40 });
      } else if (window.innerWidth > 2380 && window.innerWidth <= 2430) {
        setResponsiveData({ ...responsiveData, slidersPerView: 4.4, gap: 40 });
      } else if (window.innerWidth > 2430 && window.innerWidth <= 2480) {
        setResponsiveData({ ...responsiveData, slidersPerView: 4.5, gap: 40 });
      } else if (window.innerWidth > 2480 && window.innerWidth <= 2530) {
        setResponsiveData({ ...responsiveData, slidersPerView: 4.6, gap: 40 });
      } else if (window.innerWidth > 2530 && window.innerWidth <= 2580) {
        setResponsiveData({ ...responsiveData, slidersPerView: 4.7, gap: 40 });
      } else if (window.innerWidth > 2580 && window.innerWidth <= 2630) {
        setResponsiveData({ ...responsiveData, slidersPerView: 4.8, gap: 40 });
      } else if (window.innerWidth > 2630) {
        setResponsiveData({ ...responsiveData, slidersPerView: 5, gap: 40 });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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

      <div className="pl-4 sm:pl-[25px] lg:pl-9 mt-4 sm:mt-[25px]">
        {isLoading && <TrendingMovieLoader />}
        {!isLoading && data.movies.length > 0 && (
          <Swiper
            slidesPerView={responsiveData.slidersPerView}
            spaceBetween={responsiveData.gap}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper"
          >
            {data?.movies?.map((movie) => {
              return (
                <SwiperSlide key={movie?._id}>
                  <TrendingMovie {...movie} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default React.memo(TrendingMoviesSection);
