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
    return(
        <div className="movie-card">
            <h3>{movieData.title}</h3>
        </div>
    )
}

export default MovieCard;