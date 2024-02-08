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
  const [activeCategoryHighlight, setActiveCategoryHighlight] = useState("text-blue-500 font-bold");
  const [showTrailer, setShowTrailer] = useState([]);
  const [banner, setBanner] = useState([]);

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
          <Tab.List className="flex text-xs font-bold justify-between mx-2 my-4 sm:mx-4 sm:text-base md:text-2xl md:my-8 lg:justify-evenly lg:my-12 lg:text-3xl">

            <Tab onClick={() => { setActiveCategory("Popular"); }} className={`${activeCategory === "Popular" ? activeCategoryHighlight  : ""} cursor-pointer`}>
              Popular
            </Tab>

            <Tab onClick={() => { setActiveCategory("Top Rated"); }} className={`${activeCategory === "Top Rated" ? activeCategoryHighlight  : ""} cursor-pointer`}>
              Top Rated
            </Tab>

            <Tab onClick={() => { setActiveCategory("Upcoming"); }} className={`${activeCategory === "Upcoming" ? activeCategoryHighlight  : ""} cursor-pointer`}>
              Upcoming
            </Tab>

            <Tab onClick={() => { setActiveCategory("Now Playing"); }} className={`${activeCategory === "Now Playing" ? activeCategoryHighlight  : ""} cursor-pointer`}>
              Now Playing
            </Tab>
            
          </Tab.List>
        </Tab.Group> 
        <MoviesContainer moviesData={movies} />
        <h2 className="text-sm font-bold mt-2 mx-2 sm:mx-4 sm:text-base md:text-2xl lg:text-3xl">Trailer</h2>
        <div className="mx-2 my-4 sm:mx-4 md:my-8 border">
          <Trailer trailers = {showTrailer} />
        </div>
      </div>

    </main>
  );
}

export default PageHome;
