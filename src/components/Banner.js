import { IMAGE_URL_BASE } from "../utilities/api";
import { Link } from 'react-router-dom';
import MoreInfoButton from "./MoreInfoButton";

function Banner({movieData}) {
    console.log(movieData)
    const bannerPath = `${IMAGE_URL_BASE}/w1280${movieData.backdrop_path}`;
    const releaseDate = movieData.release_date.slice(0,4);
    const ratingAverage = movieData.vote_average.toFixed(1);

    let borderClass;
        if (ratingAverage >= 8) {
            borderClass = "border-green-500";
        } else if (ratingAverage >= 5 && ratingAverage < 8) {
            borderClass = "border-yellow-500";
        } else {
            borderClass = "border-red-500";
        }

    return(
        <div className="relative lg:h-[600px]">
            <img className="h-full object-cover w-full opacity-40 lg:object-top" src={bannerPath} alt={movieData.name} />
            <div className="absolute bottom-10 left-4 md:bottom-24 md:left-8">
                <h2 className="text-xl sm:text-3xl md:text-5xl xl:text-7xl uppercase font-black">{movieData.title}</h2>
                <p className="text-sm sm:text-xl md:text-3xl md:mt-2 xl:text-5xl">{releaseDate}</p>
                <MoreInfoButton movieData={movieData}/>
            </div>
        </div>    
    )
}


export default Banner;