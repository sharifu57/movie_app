import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import UpComing from "../upComing";
import Spinner from "../../components/spinner";
import { defaultColors } from "../../utils/colors";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const primaryColor = defaultColors.primaryColor;
  const secondaryColor = defaultColors.secondaryColor;

  const getMovies = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await fetchData(
        `/3/movie/popular?language=en-US&page=${page}`
      );

      if (response) {
        setIsLoading(false);
        setMovies(response?.results);
        setTotalPages(response?.total_pages);
      }
    } catch (error: any) {
      setIsLoading(false);
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    getMovies(currentPage);
  }, [currentPage]);

  const handlePageChange = (direction: string) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <UpComing />
      <div className="container mx-auto md:px-20 py-8">
        <h1 className="text-xl font-bold mb-4 py-5">Popular Movies</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading ? (
            <Spinner />
          ) : (
            movies.map((movie: any) => (
              <div
                key={movie.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group relative"
              >
                <img
                  className="w-full h-64 object-cover"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />

                <div className="p-4">
                  <h2 className="text-lg font-semibold">
                    {movie?.original_title}
                  </h2>
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-bold">
                    Rating: {movie?.vote_average}/10
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-center items-center mt-8">
          <button
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
            className="px-3 py-1 text-white rounded-lg mr-2 text-sm disabled:opacity-50"
            style={{ backgroundColor: primaryColor }}
          >
            Previous
          </button>
          <span className="px-4">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() => handlePageChange("next")}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-white rounded-lg ml-2 text-sm disabled:opacity-50"
            style={{ backgroundColor: primaryColor }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
