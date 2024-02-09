import { IMAGE_URL_BASE, fetchTrailers, getMovieDetails, getCreditDetails, getReviews } from "../utilities/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CastCard from "../components/CastCard";
import Reviews from "../components/Reviews";
import filterVideos from "../utilities/toolbelt";
import Trailer from "../components/Trailer";
import FavoriteButton from '../components/FavoriteButton'

function PageSingle(){
    
    const { id } = useParams(); 
    
    const [loadedMovieData, setLoadedMovieData] = useState();
    const [loadedTrailer, setLoadedTrailer] = useState();
    const [activeTab, setActiveTab] = useState('about');
    
    // we need to give this an empty array because  
    // the page loads without data and it will cause the site to crash
    const [creditData, setCreditData] = useState({ cast: [] }); 
    const [reviewData, setReviewData] = useState({ results: [] }); 
    
    const [activeCategoryHighlight, setActiveCategoryHighlight] = useState("text-blue-400 border-b-2 border-blue-500");
    
    // Load Movie Details, Trailer, Cast, and Reviews Data in a useEffect
    // .then and .catch to provide fallbacks in case of errors

    useEffect(() => {
        getMovieDetails(id)
            .then((data) => {
                setLoadedMovieData(data);
                fetchTrailers(id)
                    .then((data) => {
                        const trailer = filterVideos(data.results);                        
                        setLoadedTrailer(trailer);
                    })
                    .catch((trailerError) => {
                        console.error('Error fetching trailers:', trailerError);
                    });
                
                
                getCreditDetails(id)
                .then((data)=> {           
                    setCreditData(data);
                })
                .catch((creditError)=>{
                    console.error('Error fetching credits:', creditError);
                })
                
                
                getReviews(id)
                .then((data)=> {
                    setReviewData(data);
                  
                })
                .catch((reviewError)=>{
                    console.error('Error fetching credits:', reviewError);
                })
             
            })
            .catch((err) => {
                console.error('Error fetching movie details:', err);
            });
    }, [id]);
    
    if (!loadedMovieData) {
        return <p>Loading...</p>;
    }

    const imagePath = `${IMAGE_URL_BASE}/w1280${loadedMovieData.backdrop_path}`;
    const posterImagePath = `${IMAGE_URL_BASE}/w1280${loadedMovieData.poster_path}`;
    
    // Conditionals to render out color of rating circle
    let borderClass, colorClass;
    const ratingAverage = loadedMovieData.vote_average.toFixed(1);

        if (ratingAverage >= 8) {
            borderClass = "border-green-500";
        } else if (ratingAverage >= 5 && ratingAverage < 8) {
            borderClass = "border-yellow-500";
        } else {
            borderClass = "border-red-500";
        }


    return(
        <section className="relative m-auto">

          {/* banner */}
            <div className="lg:h-[500px]">
                <img className = "h-full object-cover w-full opacity-40 lg:object-top" src={imagePath} alt="Movie Banner" />
            </div>

            {/* Movie Information */}
            <div className="relative m-auto md:w-3/4">
                <div id='about' className="flex flex-wrap mx-4 gap-4">
                    <div className="mt-4 grid grid-cols-12 gap-4">

                      {/* movie poster */}
                        <img src={posterImagePath} alt="" className="col-span-4 sm:col-span-3"/>

                      
                        <div className="col-span-8">
                            <div className="flex align-middle justify-between wrap flex-wrap">
                                <div className="flex items-center justify-between mb-1">
<<<<<<< Updated upstream
                                    {/* Title */}
                                    <h2 className="font-bold text-2xl pr-2 sm:text-3xl lg:text-4xl">{loadedMovieData.title}</h2>
=======
                                    <h2 className="font-bold text-2xl pr-2 mb-2 sm:text-3xl lg:mb-4 lg:text-4xl">{loadedMovieData.title}</h2>
>>>>>>> Stashed changes
                                </div>
                            </div>

                        {/* date */}
                        <h3 className="-translate-y-2 sm:text-xl lg:text-2xl">{loadedMovieData.release_date}</h3>

                        <div className="flex align-middle text-center flex-wrap">
                            <div className="w-full flex">
                                <p className={`border ${borderClass} rounded-full p-1 w-[38px] ${colorClass} text-center mb-1 sm:text-xl sm:p-1`}>
                                    {ratingAverage}
                                </p>
                                <FavoriteButton movieData = {loadedMovieData} pageStyle={"single"}/>
                            </div>

                            {/* movie geners */}
                            {loadedMovieData.genres.length > 0 && 
                                loadedMovieData.genres.slice(0,2).map((genre) => (
                                    <div key = {genre.id} className="mr-2 mt-2 text-xs border border-logo p-1 rounded-full sm:text-base lg:p-3">
                                        <p>{genre.name}</p>
                                    </div>
                            ))}

                        </div>
                    
                        {/* Desktop movie description */}
                        <div className="hidden lg:block md:col-span-8 mb-10 2xl:mt-4">
                            <h3 className="font-bold mb-4 mt-6 text-2xl sticky left-1 border-l-4 pl-2 translate-x-1 border-logo">About</h3>
                            <p className="lg:text-2xl">{loadedMovieData.overview}</p>
                        </div>

                        </div>
                    </div>

                        {/* Mobile Movie Description */}
                        <div className="text-sm mb-10 lg:hidden">
                            <h3 className="font-bold mb-4 mt-6 text-2xl sticky left-1 border-l-4 pl-2 translate-x-1 border-logo">About</h3>
                            <p>{loadedMovieData.overview}</p>
                        </div>

                    {/* Movie Trailer */}
                    <div className="bg-[#202020] w-full p-4 rounded">
                    <h2 className="font-bold mb-4 mt-6 text-2xl sticky left-1 border-l-4 pl-2 translate-x-1 border-logo">Watch Trailer</h2>
                    <Trailer trailers={loadedTrailer}/>
                    </div>
                </div>
                <div className="relative overflow-x-scroll whitespace-nowrap p-2">
                    <h2 className="font-bold mb-4 mt-6 text-2xl sticky left-1 border-l-4 pl-2 translate-x-1 border-logo">Top Billed Cast</h2>
                    <ol className="flex list-none m-0 p-0">     
                        {creditData.cast.length > 0 &&
                        creditData.cast.slice(0, 10).map((castData) => (
                            <li key={castData.id} className="pr-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                                <CastCard castData={castData} />
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Reviews */}
                <div id='reviews' className="bg-[#202020] p-4 mt-10">
                <h2 className="font-bold mb-4 mt-6 text-2xl sticky left-1 border-l-4 pl-2 translate-x-1 border-logo">Reviews</h2>
                    {reviewData.results.length > 0 ? (
                    reviewData.results.map((reviewData) => (
                        <Reviews key={reviewData.id} reviewData={reviewData} />
                    ))
                    ) : (
                        <p className="ml-2">No reviews have been made!</p>
                    )}
                </div>
            </div>    
        </section>
    )
    
}

export default PageSingle