import FavoriteButton from "./FavoriteButton";
import MovieCard from "./MovieCard";
import { useState } from "react";

function MoviesContainer({ title, moviesData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % moviesData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + moviesData.length) % moviesData.length);
  };

  return (
    <section>
      <h2 className="text-xl font-bold my-4 pl-2">{title}</h2>
      <div className="relative overflow-x-scroll whitespace-nowrap">
        <div className="flex sm:mx-2 md:grid md:grid-cols-3 md:justify-items-center md:gap-4 md:mx-6 lg:grid-cols-4 2xl:grid-cols-5" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
          {moviesData.length > 0 &&
            moviesData.map((movieData) => (
              <div key={movieData.id} className="w-full md:w-auto px-2 md:px-0 lg:max-w-[350px]">
                <MovieCard movieData={movieData} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default MoviesContainer;
