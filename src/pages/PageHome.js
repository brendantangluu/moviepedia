import { useEffect, useState } from "react";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies, getNowPlayingMovies, fetchTrailers, getMovieDetails } from "../utilities/api";
import { CarouselDefault } from "../components/BannerSlider";
import MoviesContainer from "../components/MoviesContainer";
import Trailer from "../components/Trailer";
import filterVideos from "../utilities/toolbelt";
import { Tab } from "@headlessui/react";

function PageHome() {
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [movies, setMovies] = useState([]);
  const [activeCategoryHighlight, setActiveCategoryHighlight] = useState("text-white font-bold bg-logo");
  const [showTrailer, setShowTrailer] = useState([]);
  const [banner, setBanner] = useState([]);
  const tabStyles = "cursor-pointer transition ease-in-out hover:text-logo hover:-translate-y-1 sm:border sm:border-white sm:px-4 sm:py-2 sm:rounded-full";

  useEffect(() => {
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
        
      
        fetchTrailers(result.results[0].id)
        .then((data) => {
            const trailer = filterVideos(data.results);
            setShowTrailer(trailer);
            console.log(trailer);
        })
        .catch((trailerError) => {
            console.error('Error fetching trailers:', trailerError);
        });
        
      } catch (error) {
        console.error(`Error fetching ${category} movies:`, error);
      }
    };
    fetchMoviesByCategory(activeCategory);
  }, [activeCategory]);
  
  return (
    <main id="home">
        <CarouselDefault moviesData={movies} />
      <div>
        <Tab.Group>
          <Tab.List className="flex text-xs font-bold justify-evenly mx-2 my-4 sm:mx-4 sm:text-base md:text-2xl md:my-8 lg:justify-evenly lg:my-12 lg:text-3xl">

            <Tab onClick={() => { setActiveCategory("Popular"); }} className={`${activeCategory === "Popular" ? activeCategoryHighlight  : ""} ${tabStyles}`}>
              Popular
            </Tab>

            <Tab onClick={() => { setActiveCategory("Top Rated"); }} className={`${activeCategory === "Top Rated" ? activeCategoryHighlight  : ""} ${tabStyles}`}>
              Top Rated
            </Tab>

            <Tab onClick={() => { setActiveCategory("Upcoming"); }} className={`${activeCategory === "Upcoming" ? activeCategoryHighlight  : ""} ${tabStyles}`}>
              Upcoming
            </Tab>

            <Tab onClick={() => { setActiveCategory("Now Playing"); }} className={`${activeCategory === "Now Playing" ? activeCategoryHighlight  : ""} ${tabStyles}`}>
              Now Playing
            </Tab>
            
          </Tab.List>
        </Tab.Group> 
        <MoviesContainer moviesData={movies} />
        <h2 className="font-bold mb-4 mt-6 text-2xl sticky left-1 border-l-4 pl-2 translate-x-1 border-logo sm:mx-4 sm:text-base md:text-2xl md:mt-12 lg:text-3xl">Watch Trailer</h2>
        <div className="mx-2 my-4 border sm:mx-4 md:my-8">
          <Trailer trailers = {showTrailer} />
        </div>
      </div>

    </main>
  );
}

export default PageHome;
