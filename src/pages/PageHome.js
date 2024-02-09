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
  const activeCategoryHighlight = "text-logo font-bold";
  const [showTrailer, setShowTrailer] = useState([]);


  // fetch movie categories and store them in the movies useState
  // Using a switch case to handle the category switches
  // With help from ChatGPT

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
        
        // we point to result.results[0].id since the data might still return
        // an array of multiple videos
        fetchTrailers(result.results[0].id)
        .then((data) => {
            const trailer = filterVideos(data.results);
            setShowTrailer(trailer);
            console.log(trailer)
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
            
            {/* On click changes the active category to what the user selects, corresponding to the switch case values */}
            {/* If the category is active, apply these styles (activeCategoryHighlight) */}
            
            <Tab onClick={() => { setActiveCategory("Popular"); }} className={`${activeCategory === "Popular" ? activeCategoryHighlight  : ""} cursor-pointer transition ease-in-out hover:text-logo hover:-translate-y-1`}>
              Popular
            </Tab>

            <Tab onClick={() => { setActiveCategory("Top Rated"); }} className={`${activeCategory === "Top Rated" ? activeCategoryHighlight  : ""} cursor-pointer transition ease-in-out hover:text-logo hover:-translate-y-1`}>
              Top Rated
            </Tab>

            <Tab onClick={() => { setActiveCategory("Upcoming"); }} className={`${activeCategory === "Upcoming" ? activeCategoryHighlight  : ""} cursor-pointer transition ease-in-out hover:text-logo hover:-translate-y-1`}>
              Upcoming
            </Tab>

            <Tab onClick={() => { setActiveCategory("Now Playing"); }} className={`${activeCategory === "Now Playing" ? activeCategoryHighlight  : ""} cursor-pointer transition ease-in-out hover:text-logo hover:-translate-y-1`}>
              Now Playing
            </Tab>
            
          </Tab.List>
        </Tab.Group> 
        <MoviesContainer moviesData={movies} />
        <div className="w-3/5 m-auto" >
        <h2 className="font-bold mb-4 mt-6 text-2xl sticky border-l-4 pl-2 border-logo sm:text-base md:text-2xl md:mt-12 lg:text-3xl">Watch Trailer</h2>
        <h3 className="font-bold text-xl mb-1">{showTrailer.length > 0 && showTrailer[0].name}</h3>
          <Trailer trailers = {showTrailer} />
        </div>
      </div>

    </main>
  );
}

export default PageHome;
