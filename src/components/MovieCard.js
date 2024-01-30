import { IMAGE_URL_BASE } from "../utilities/api";
import { Link } from 'react-router-dom';
import FavoriteButton from "./FavoriteButton";
import WatchListButton from "./WatchListButton";

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
  const imagePath = `${IMAGE_URL_BASE}/w780${movieData.poster_path}`;
  const truncatedTitle = movieData.title.length > 30 ? `${movieData.title.slice(0, 20)}...` : movieData.title;
  
  // Conditionals to render out color of rating circle
  let borderClass;
  const ratingAverage = movieData.vote_average.toFixed(1);

      if (ratingAverage >= 8) {
          borderClass = "border-green-500";
      } else if (ratingAverage >= 5 && ratingAverage < 8) {
          borderClass = "border-yellow-500";
      } else {
          borderClass = "border-red-500";
      }
  return (
    <div className="w-[136px] flex flex-col items-center relative">
      <Link to ={`/single/${movieData.id}/about`}>
        <img className="h-[204px] object-cover mb-2" src={imagePath} alt="" />
      </Link>
      <div className="flex w-[136px] align-middle items-center mb-2.5">
          <svg className = "mb-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 24" fill="yellow"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
            <p className={`border ${borderClass} rounded-full p-1 min-w-[34px] text-center ml-1 text-xs`}>
              {ratingAverage}
            </p>
            <FavoriteButton movieData = {movieData}/>
      </div>


      <div className="title-and-release text-center max-w-[120px] whitespace-normal">
        <h3 className="text-sm">{movieData.release_date}</h3>
        <h4 className="text-base sm:text-lg font-semibold my-2 leading-tight">{truncatedTitle}</h4>
      </div>
    </div>
  );
}

export default MovieCard;
