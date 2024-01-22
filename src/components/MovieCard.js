import { IMAGE_URL_BASE } from "../utilities/api";

const defaultMovieData = {
    "adult": false,
    "backdrop_path": "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
    "genre_ids": [
    36,
    10752,
    18
    ],
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

function MovieCard({movieData=defaultMovieData}){
    const imagePath = `${IMAGE_URL_BASE}/w185${movieData.poster_path}`
    return(
        <div className="movie-card">
            <img src={imagePath} alt="" />
            <div className="title-and-release">
                <h3 className="title">{movieData.title}</h3>
                <h4 className="release-date">{movieData.release_data}</h4>
            </div>
            <h4 className="vote-average">{movieData.vote_average.toFixed(1)}</h4>
            <button className="favourite">&#9829;</button>
        </div>
    )
}

export default MovieCard;