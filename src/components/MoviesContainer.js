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
    <section className="movies-container">
      <h2 className="text-xl font-bold my-4 pl-2">{title}</h2>
      <div className="movie-carousel relative overflow-x-scroll whitespace-nowrap">
        <div className="movie-cards flex" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
          
          {moviesData.length > 0 &&
            moviesData.map((movieData) => (
              <div key={movieData.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                <MovieCard movieData={movieData} />
              </div>
            ))}
            
        </div>
      </div>
    </section>
  );
}

export default MoviesContainer;
