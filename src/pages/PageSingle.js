import { IMAGE_URL_BASE, fetchTrailers, getPopularMovies, getMovieDetails } from "../utilities/api";
import {API_ENDPOINT} from "../utilities/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PageSingle(){
    
    const { id } = useParams(); 
    
    const [loadedMovieData, setLoadedMovieData] = useState();
    
    useEffect(() => {
        getMovieDetails(id)
        .then((data) => {
            setLoadedMovieData(data);
            console.log(data)
        })
        .catch((err) => {
            console.error(err);
        });
    }, [id]);
    
    if (!loadedMovieData) {
        // You can render a loading state here
        return <p>Loading...</p>;
      }

    const imagePath = `${IMAGE_URL_BASE}/w780${loadedMovieData.backdrop_path}`;
    const truncatedOverview = loadedMovieData.overview.length > 30 ? `${loadedMovieData.overview.slice(0, 120)}...` : loadedMovieData.overview;
    const trailerPath = `${API_ENDPOINT}/movie/${loadedMovieData.id}/videos`;


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
                <h2>{loadedMovieData.title}</h2>
                <h3>{loadedMovieData.release_date}</h3>

                {/* Movie Info - Rating and Date */}
                <div className="flex">
                    <svg className = "mb-0.5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                    <h3 className="text-sm ml-2">{loadedMovieData.vote_average.toFixed(1)}</h3>
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
            {/* <div>
                <iframe
                width="100%"
                height="315"
                src={trailerPath}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div> */}

        </div>
    )
}


export default PageSingle