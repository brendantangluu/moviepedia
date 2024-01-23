import { IMAGE_URL_BASE } from "../utilities/api";

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
  return (
    <div className="movie-card h-64 bg-gray-200 p-4">
      <img className="w-full h-48 object-cover mb-4" src={imagePath} alt="" />
      <div className="title-and-release">
        <h3 className="text-lg font-semibold mb-2">{movieData.title}</h3>
        <h4 className="text-sm">{movieData.release_date}</h4>
      </div>
      <h4 className="text-sm mt-2">{movieData.vote_average.toFixed(1)}</h4>
      <button className="favourite">&#9829;</button>
    </div>
  );
}

export default MovieCard;
