import { useEffect, useState } from "react";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies, getNowPlayingMovies } from "../utilities/api";
import { CarouselDefault } from "../components/BannerSlider";
import MoviesContainer from "../components/MoviesContainer";

function PageHome() {
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [movies, setMovies] = useState([]);
  const [activeCategoryHighlight, setActiveCategoryHighlight] = useState("text-blue-500 border-b-2 border-blue-500");

  const fetchMoviesByCategory = async (category) => {
    try {
      let result;
      switch (category) {
        case "Popular":
          result = await getPopularMovies();
          break;
        case "Top Rated":
          result = await getTopRatedMovies();
          break;
        case "Upcoming":
          result = await getUpcomingMovies();
          break;
        case "Now Playing":
          result = await getNowPlayingMovies();
          break;
        default:
          result = await getPopularMovies();
      }
      setMovies(result.results);
    } catch (error) {
      console.error(`Error fetching ${category} movies:`, error);
    }
  };
  
  useEffect(() => {
    fetchMoviesByCategory(activeCategory);
  }, [activeCategory]);
  
  

  return (
    <main id="home">
      <CarouselDefault moviesData={movies} />  
      <nav>
        <ul className="flex text-sm justify-between mx-2 my-4">
          <li onClick={() => { setActiveCategory("Popular"); }} className={`${activeCategory === "Popular" ? activeCategoryHighlight : ""} cursor-pointer`}>Popular</li>
          <li onClick={() => { setActiveCategory("Top Rated"); }} className={`${activeCategory === "Top Rated" ? activeCategoryHighlight : ""} cursor-pointer`}>Top Rated</li>
          <li onClick={() => { setActiveCategory("Upcoming"); }} className={`${activeCategory === "Upcoming" ? activeCategoryHighlight : ""} cursor-pointer`}>Upcoming</li>
          <li onClick={() => { setActiveCategory("Now Playing"); }} className={`${activeCategory === "Now Playing" ? activeCategoryHighlight : ""} cursor-pointer`}>Now Playing</li>
        </ul>
      </nav>
      <MoviesContainer moviesData={movies} />
    </main>
  );
}

export default PageHome;
