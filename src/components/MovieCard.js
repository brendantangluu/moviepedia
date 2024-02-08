import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { IMAGE_URL_BASE } from "../utilities/api";
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import useMediaQuery from '@mui/material/useMediaQuery';


const defaultMovieData = {
  "adult": false,
  "backdrop_path": "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
  "genre_ids": [36, 10752, 18],
  "id": 753342,
  "original_language": "en",
  "original_title": "Napoleon",
  "overview": "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
  "popularity": 1811.36,
  "poster_path": "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
  "release_date": "2023-11-22",
  "title": "Napoleon",
  "video": false,
  "vote_average": 6.529,
  "vote_count": 1268,
};

function MovieCard({ movieData = defaultMovieData }) {
  const [isTapped, setIsTapped] = useState(false);
  const [isHoverEnabled, setIsHoverEnabled] = useState(false);
  const { favorites, addToFavorites, removeFromFavorites } = useContext(GlobalContext);
  const isFavorite = favorites.some((fav) => fav.id === movieData.id);

  const handleToggleFavorite = () => {
    isFavorite ? removeFromFavorites(movieData) : addToFavorites(movieData);
  };

  const imagePath = `${IMAGE_URL_BASE}/w780${movieData.poster_path}`;
  const truncatedTitle = movieData.title.length > 30 ? `${movieData.title.slice(0, 20)}...` : movieData.title;

  useEffect(() => {
    const handleResize = () => {
      setIsHoverEnabled(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInteractionStart = () => !isHoverEnabled && setIsTapped(!isTapped);
  const handleMouseEnter = () => isHoverEnabled && setIsTapped(true);
  const handleMouseLeave = () => isHoverEnabled && setIsTapped(false);

  let borderClass;
  const ratingAverage = movieData.vote_average.toFixed(1);

      if (ratingAverage >= 8) {
          borderClass = "border-green-500";
      } else if (ratingAverage >= 5 && ratingAverage < 8) {
          borderClass = "border-yellow-500";
      } else {
          borderClass = "border-red-500";
      }

  const matches = useMediaQuery('(min-width:960px)');

  return (
    <div className="flex flex-col items-center relative">
      {/* handle movie images + tap state */}
      <div
        className={`relative group ${isTapped ? 'opacity-85' : ''} ${isHoverEnabled ? 'hover:opacity-85' : ''}`}
        onClick={handleInteractionStart}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="object-cover mb-2 rounded-lg" src={imagePath} alt="" />
        {isTapped && (
          <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-90 flex flex-col items-center justify-between rounded-lg">
            <p className='line-clamp-2 max-w-[100px]'>
              {movieData.overview}
            </p>
            <Link to={`/single/${movieData.id}/about`}>
              <button className="more-info-btn bg-logo text-white px-2 py-2 rounded text-sm mb-6">
                More Info
              </button>
            </Link>
          </div>
          
        )}
      </div>
      {/* handle movie information + favourite button */}
      <div className="w-[136px] flex flex-col items-center relative md:w-auto">
        <div className="flex align-middle items-center mb-2.5 md:w-[156px] md:justify-between lg:mt-2 lg:mb-4 lg:w-[216px]">
            <svg className = "mb-0.5" xmlns="http://www.w3.org/2000/svg" width={`${matches ? "40" : "24" }`} height={`${matches ? "40" : "22" }`} viewBox="0 0 24 24" fill="yellow">
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
            </svg>
            <p className={`border ${borderClass} rounded-full p-1 min-w-[34px] text-center ml-1 text-xs lg:text-xl lg:p-2`}>
              {ratingAverage}
            </p>
            <FavoriteButton movieData = {movieData}/>
        </div>
        <div className="title-and-release text-center whitespace-normal md:w-auto">
          <h3 className="text-sm lg:text-xl">{movieData.release_date}</h3>
          <h4 className="text-base sm:text-lg font-semibold my-2 leading-tight lg:text-2xl">{movieData.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;