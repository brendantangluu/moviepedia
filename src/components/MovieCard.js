import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { IMAGE_URL_BASE } from "../utilities/api";
import { Link } from 'react-router-dom';

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
  return (
    <div className="w-[136px] flex flex-col items-center relative">
      <div
        className={`relative group ${isTapped ? 'opacity-85' : ''} ${isHoverEnabled ? 'hover:opacity-85' : ''}`}
        onClick={handleInteractionStart}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="h-[204px] object-cover mb-2" src={imagePath} alt="" />
        {isTapped && (
          <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-90 flex flex-col items-center justify-between p-2">
            <p className='line-clamp-3 text-xs w-[100px] h-[100px] overflow-hidden'>
              {movieData.overview}
            </p>
            <Link to={`/single/${movieData.id}/about`}>
              <button className="more-info-btn bg-logo text-white px-2 py-1 rounded mb-2 text-sm">
                More Info
              </button>
            </Link>
          </div>
        )}
      </div>

      <div className="flex w-[136px] align-middle items-center mb-2.5">
        <svg className="mb-0.5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
        <h4 className="text-sm ml-2">{movieData.vote_average.toFixed(1)}</h4>
      </div>
      <button
        className={`absolute bottom-16 right-0 ${isFavorite ? 'text-red-500' : 'text-gray-500'}`}
        onClick={handleToggleFavorite}
      >
        &#9829;
      </button>
      <div className="title-and-release text-center max-w-[120px] whitespace-normal">
        <h3 className="text-sm">{movieData.release_date}</h3>
        <h4 className="text-base sm:text-lg font-semibold my-2 leading-tight">{truncatedTitle}</h4>
      </div>
    </div>
  );
}

export default MovieCard;