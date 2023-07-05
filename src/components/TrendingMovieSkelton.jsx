import React from 'react';

const TrendingMovieSkelton = () => {
  return (
    <div className="relative w-[240px] h-[140px] rounded-lg sm:w-[470px] sm:h-[230px] bg-semi-dark-blue">
      <div className="animate-pulse">
        <div className="absolute h-8 w-8 rounded-full top-2 right-2 sm:top-4 sm:right-6 bg-slate-600"></div>
        <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6">
          <div className="flex gap-2">
            <div className="w-9 h-4 rounded-xl bg-slate-600 sm:w-14"></div>
            <div className="w-8 h-4 rounded-xl bg-slate-600 sm:w-14"></div>
            <div className="w-8 h-4 rounded-xl bg-slate-600 sm:w-14"></div>
          </div>
          <div className="mt-2 w-40 h-4 bg-slate-600 rounded-xl sm:w-60"></div>
        </div>
      </div>
    </div>
  );
};

export default TrendingMovieSkelton;
