import React from 'react';

const SingleMovieSkelton = () => {
  return (
    <div className="w-[164px] sm:w-[220px] lg:w-[280px]">
      <div className="relative w-[164px] h-[110px] rounded-lg sm:w-[220px] sm:h-[140px] lg:w-[280px] lg:h-[174px] bg-semi-dark-blue animate-pulse">
        <div className="w-8 h-8 absolute top-2 right-2 rounded-full sm:top-4 sm:right-4 bg-slate-600"></div>
      </div>

      <div className="flex gap-2 mt-2 animate-pulse">
        <div className="w-6 h-2 rounded-xl bg-slate-600 sm:w-9 sm:h-3"></div>
        <div className="w-6 h-2 rounded-xl bg-slate-600 sm:w-9 sm:h-3"></div>
        <div className="w-6 h-2 rounded-xl bg-slate-600 sm:w-9 sm:h-3"></div>
      </div>

      <div className="mt-1 sm:mt-[5px] w-20 h-3 rounded-xl bg-slate-600 sm:w-32 sm:h-4 animate-pulse"></div>
    </div>
  );
};

export default SingleMovieSkelton;
