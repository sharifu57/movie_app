import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import UpComing from "../upComing";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getMovies = async (page: number) => {
    try {
      const response = await fetchData(
        `/3/movie/popular?language=en-US&page=${page}`
      );

      if (response) {
        setMovies(response?.results);
        setTotalPages(response?.total_pages);
      }
    } catch (error: any) {
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
          {movies.map((movie: any) => (
            <div
              key={movie.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
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
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8">
          <button
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() => handlePageChange("next")}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
