import { IMAGE_URL_BASE } from "../utilities/api";
import {API_ENDPOINT} from "../utilities/api";

const defaultMovieData = {
    "adult": false,
    "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    "genre_ids": [
        18,
        36
    ],
    "id": 872585,
    "original_language": "en",
    "original_title": "Oppenheimer",
    "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    "popularity": 531.021,
    "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "release_date": "2023-07-19",
    "title": "Oppenheimer",
    "video": false,
    "vote_average": 8.115,
    "vote_count": 6273
};



function PageSingle({ movieData = defaultMovieData }){
    const imagePath = `${IMAGE_URL_BASE}/w780${movieData.backdrop_path}`;
    const truncatedOverview = movieData.overview.length > 30 ? `${movieData.overview.slice(0, 120)}...` : movieData.overview;
    const trailerPath = `${API_ENDPOINT}/movie/${movieData.id}/videos`;
    
    return(
        <div className="relative">
            <img src={imagePath} alt="" />

            {/* Movie Info */}
            <div className="m-2">
                {/* Buttons */}
                <div className="flex w-[80px]">
                    <button className="text-4xl">﹢</button>
                    <button className="text-2xl w-[36px]">&#9829;</button>
                </div>

                {/* Movie Info */}
                <h2>{movieData.title}</h2>
                <h3>{movieData.release_date}</h3>

                {/* Movie Info - Rating and Date */}
                <div className="flex">
                    <svg className = "mb-0.5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                    <h3 className="text-sm ml-2">{movieData.vote_average.toFixed(1)}</h3>
                </div>

            </div>

            {/* Movie Info Tabs */}
            <nav className="m-5 mx-6 text-base">
                <ul className="flex justify-between">
                    <li>About</li>
                    <li>Cast</li>
                    <li>Reviews</li>
                    <li>More</li>
                </ul>
            </nav>

            {/* Movie Description */}
            <div className="mx-6 text-sm">
                <p>{truncatedOverview}</p>
            </div>

            {/* Movie Trailer */}
            <div>
                <iframe
                width="100%"
                height="315"
                src={trailerPath}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div>

        </div>
    )
}


export default PageSingle