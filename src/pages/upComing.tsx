import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

export default function UpComing() {
  const [movie, setMovie] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const getUpComing = async (page: number) => {
    try {
      const response = await fetchData(
        `/3/movie/upcoming?language=en-US&page=${page}`
      );

      if (response && response.results.length > 0) {
        setMovie(response.results[0]);
        console.log("Upcoming Movie:", response.results[0]);
      }
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  useEffect(() => {
    getUpComing(currentPage);
  }, [currentPage]);

  return (
    <div
      className="relative h-96 bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie?.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white md:pb-20 md:p-20 flex flex-col justify-center">
        <h2 className="text-4xl font-bold pt-14">{movie?.original_title}</h2>
        <p className="mt-4 text-lg">{movie?.overview}</p>
        <p className="mt-2">Release Date: {movie?.release_date}</p>
      </div>
    </div>
  );
}
