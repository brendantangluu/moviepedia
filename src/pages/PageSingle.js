import { IMAGE_URL_BASE, fetchTrailers, getPopularMovies, getMovieDetails, getCreditDetails } from "../utilities/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CastCard from "../components/CastCard";




function PageSingle(){
    
    const { id } = useParams(); 
    
    const [loadedMovieData, setLoadedMovieData] = useState();
    const [loadedTrailer, setLoadedTrailer] = useState();
    const [activeTab, setActiveTab] = useState('about');
    const [creditData, setCreditData] = useState();
    const [activeCategoryHighlight, setActiveCategoryHighlight] = useState("text-blue-400 border-b-2 border-blue-500");

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollToSection = (section) => {
        setActiveTab(section);
        const e = document.getElementById(section);
        if(e){
            e.scrollIntoView({behavior: 'smooth'});
        }

    }

    useEffect(() => {
        getMovieDetails(id)
            .then((data) => {
                setLoadedMovieData(data);
                console.log(data);
                
                // fetchTrailers returning undefined, need to fix
                fetchTrailers({ movieData: data })
                    .then((trailerData) => {
                        setLoadedTrailer(trailerData);
                        console.log(trailerData);
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
                console.log(data);

            })
            .catch((err) => {
                console.error('Error fetching movie details:', err);
            });
    }, [id]);
    
    if (!loadedMovieData) {
        return <p>Loading...</p>;
    }

    const imagePath = `${IMAGE_URL_BASE}/w780${loadedMovieData.backdrop_path}`;
    const truncatedOverview = loadedMovieData.overview.length > 30 ? `${loadedMovieData.overview.slice(0, 120)}...` : loadedMovieData.overview;
    


    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % creditData.cast.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + creditData.cast.length) % creditData.cast.length);
    };


    return(
        <div className="relative">
            <img src={imagePath} alt="" />
            <nav className="m-5 mx-6 text-base">
                        <ul className="flex justify-between">
                            <li onClick={() => { scrollToSection('about') }} className={`${activeTab === "about" ? activeCategoryHighlight : ""} cursor-pointer`}>About</li>
                            <li onClick={() => { scrollToSection('cast') }} className={`${activeTab === "cast" ? activeCategoryHighlight : ""} cursor-pointer`}>Cast</li>
                            <li onClick={() => { scrollToSection('reviews') }} className={`${activeTab === "reviews" ? activeCategoryHighlight : ""} cursor-pointer`}>Reviews</li>
                            <li onClick={() => { scrollToSection('more') }} className={`${activeTab === "more" ? activeCategoryHighlight : ""} cursor-pointer`}>More</li>
                        </ul>
                    </nav>
            {activeTab === 'about' && (
                <div id='about'>
                    {/* Movie Info */}
                    <div className="m-2">
                        {/* Buttons */}
                        <div className="flex w-[80px]">
                            <button className="text-4xl">﹢</button>
                            <button className="text-2xl w-[36px]">&#9829;</button>
                        </div>

                        {/* Movie Info */}
                        <h2 className="font-bold text-2xl">{loadedMovieData.title}</h2>
                        <h3>{loadedMovieData.release_date}</h3>

                        {/* Movie Info - Rating and Date */}
                        <div className="flex">
                            <svg className = "mb-0.5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="yellow"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <h3 className="text-sm ml-2">{loadedMovieData.vote_average.toFixed(1)}</h3>
                        </div>

                    </div>

                    {/* Movie Description */}
                    <div className="mx-6 text-sm">
                        <p>{truncatedOverview}</p>
                    </div>

                    {/* Movie Trailer */}
                    <div>
                        {loadedTrailer ? (
                        <iframe
                            width="100%"
                            height="315"
                            src={loadedTrailer}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <p>No Final Trailer available</p>
                    )}
                    </div>


                </div>
            )}
            {activeTab === 'cast' && (
                <div className="relative overflow-x-scroll whitespace-nowrap p-2">
                    <ol className="flex list-none m-0 p-0" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>    
                        {console.log(creditData)}
                        {creditData.cast.length > 0 &&
                        creditData.cast.slice(0, 10).map((castData) => (
                            <li key={castData.id} className="pr-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2">
                                <CastCard castData={castData} />
                            </li>
                        ))}
                    </ol>
                </div>
            )}
            {activeTab === 'reviews' && (
                <div id='reviews'>
                    {/* Movie Info */}
                    <div className="m-2">
                        {/* Buttons */}
                    
                        <div className="flex w-[80px]">
                            <button className="text-4xl">﹢</button>
                            <button className="text-2xl w-[36px]">&#9829;</button>
                        </div>

                        {/* Movie Info */}
                        <h2 className="font-bold text-2xl">{loadedMovieData.title}</h2>
                        <h3>{loadedMovieData.release_date}</h3>

                        {/* Movie Info - Rating and Date */}
                        <div className="flex">
                            <svg className = "mb-0.5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="yellow"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <h3 className="text-sm ml-2">{loadedMovieData.vote_average.toFixed(1)}</h3>
                        </div>

                    </div>

                    {/* Movie Description */}
                    <div className="mx-6 text-sm">
                        <p>{truncatedOverview}</p>
                    </div>

                    {/* Movie Trailer */}
                    <div>
                        {loadedTrailer ? (
                        <iframe
                            width="100%"
                            height="315"
                            src={loadedTrailer}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <p>No Final Trailer available</p>
                    )}
                    </div>


                </div>
            )}
            {activeTab === 'more' && (
                <div id='more'>
                    {/* Movie Info */}
                    <div className="m-2">
                        {/* Buttons */}
                        <div className="flex w-[80px]">
                            <button className="text-4xl">﹢</button>
                            <button className="text-2xl w-[36px]">&#9829;</button>
                        </div>

                        {/* Movie Info */}
                        <h2 className="font-bold text-2xl">{loadedMovieData.title}</h2>
                        <h3>{loadedMovieData.release_date}</h3>

                        {/* Movie Info - Rating and Date */}
                        <div className="flex">
                            <svg className = "mb-0.5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="yellow"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <h3 className="text-sm ml-2">{loadedMovieData.vote_average.toFixed(1)}</h3>
                        </div>

                    </div>

                    {/* Movie Description */}
                    <div className="mx-6 text-sm">
                        <p>{truncatedOverview}</p>
                    </div>

                    {/* Movie Trailer */}
                    <div>
                        {loadedTrailer ? (
                        <iframe
                            width="100%"
                            height="315"
                            src={loadedTrailer}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <p>No Final Trailer available</p>
                    )}
                    </div>


                </div>
            )}
        </div>
    )
    
}


export default PageSingle