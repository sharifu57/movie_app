import React, { useEffect, useState } from "react";
import { fetchData } from "../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"; // Import the plus icon
import { defaultColors } from "../utils/colors";

export default function UpComing() {
  const [movie, setMovie] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const secondaryColor = defaultColors.secondaryColor;
  const primaryColor = defaultColors.primaryColor;

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
        <article className="text-pretty">
          <p className="text-balance mt-4 text-md">{movie?.overview}</p>
        </article>
        <p className="mt-2">Release Date: {movie?.release_date}</p>
      </div>

      <div className="absolute bottom-5 z-20 md:px-20">
        {" "}
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          style={{ backgroundColor: primaryColor }}
        >
          Add WatchList
          <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </button>
      </div>
    </div>
  );
}
