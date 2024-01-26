import { IMAGE_URL_BASE, fetchTrailers, getMovieDetails, getCreditDetails, getReviews } from "../utilities/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CastCard from "../components/CastCard";
import Reviews from "../components/Reviews";
import filterVideos from "../utilities/toolbelt";




function PageSingle(){
    
    const { id } = useParams(); 
    
    const [loadedMovieData, setLoadedMovieData] = useState();
    const [loadedTrailer, setLoadedTrailer] = useState();
    const [activeTab, setActiveTab] = useState('about');
    const [creditData, setCreditData] = useState();
    const [reviewData, setReviewData] = useState();
    const [youtubeMovieData, setYoutubeMovieData] = useState();
    const [activeCategoryHighlight, setActiveCategoryHighlight] = useState("text-blue-400 border-b-2 border-blue-500");
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollToSection = (section) => {
        setActiveTab(section);
        const e = document.getElementById(section);
        if(e){
            e.scrollIntoView({behavior: 'smooth'});
        }

    }
   const pbj =  {
    "id": 787699,
    "results": [
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "They Call Me Lofty",
            "key": "V5P7q4WJAzg",
            "site": "YouTube",
            "size": 1080,
            "type": "Clip",
            "official": true,
            "published_at": "2024-01-23T16:00:19.000Z",
            "id": "65afffba67b613010c60e13a"
        },
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Ten Minute Preview",
            "key": "YkQVETRgaBc",
            "site": "YouTube",
            "size": 1080,
            "type": "Clip",
            "official": true,
            "published_at": "2024-01-22T12:56:51.000Z",
            "id": "65aed6f525cd8500ea0d8dc8"
        },
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Official IMAX® Interview",
            "key": "AIytAE_X1zQ",
            "site": "YouTube",
            "size": 1080,
            "type": "Featurette",
            "official": true,
            "published_at": "2023-12-15T23:05:21.000Z",
            "id": "6586b882b0cd205394575aa7"
        },
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Soundtrack Out Now!",
            "key": "vCcGYxy6PNA",
            "site": "YouTube",
            "size": 1080,
            "type": "Teaser",
            "official": true,
            "published_at": "2023-12-08T18:18:07.000Z",
            "id": "6573b5a3bbe1dd0138cedc81"
        },
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "World Premiere",
            "key": "Df1-tQ8IiDA",
            "site": "YouTube",
            "size": 1080,
            "type": "Featurette",
            "official": true,
            "published_at": "2023-12-07T15:15:46.000Z",
            "id": "6572a61f6f6a9901392b232b"
        },
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Chocolate Statue Reveal",
            "key": "pkoqu0wZr_s",
            "site": "YouTube",
            "size": 1080,
            "type": "Featurette",
            "official": true,
            "published_at": "2023-12-06T08:00:29.000Z",
            "id": "657032ce41ad8d06e3cc1ab5"
        },
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Recipe for an Icon",
            "key": "a1LcSbGRpIE",
            "site": "YouTube",
            "size": 1080,
            "type": "Behind the Scenes",
            "official": true,
            "published_at": "2023-12-05T17:25:19.000Z",
            "id": "65700711d18fb9013aa85bab"
        },
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Becoming Wonka - Featurette",
            "key": "9Dup3jnovFs",
            "site": "YouTube",
            "size": 1080,
            "type": "Featurette",
            "official": true,
            "published_at": "2023-11-24T17:47:00.000Z",
            "id": "656383fcb234b900acfb9747"
        },
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "\"A Good Chocolate\" Clip",
            "key": "JXIpIVelQkc",
            "site": "YouTube",
            "size": 1080,
            "type": "Clip",
            "official": true,
            "published_at": "2023-11-14T17:00:16.000Z",
            "id": "65551212d4fe04011b9138ce"
        },
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "\"Funny Little Man\" Clip",
            "key": "CsU0Yq6_LyQ",
            "site": "YouTube",
            "size": 1080,
            "type": "Clip",
            "official": true,
            "published_at": "2023-11-14T17:00:07.000Z",
            "id": "6555120c53866e00ff06aed9"
        },
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "\"Try One\" Clip",
            "key": "19bhnCBezs4",
            "site": "YouTube",
            "size": 1080,
            "type": "Clip",
            "official": true,
            "published_at": "2023-11-14T17:00:02.000Z",
            "id": "65551206ac4161013b4aa62e"
        },
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Dream TV Spot",
            "key": "d2lVg-b_E2g",
            "site": "YouTube",
            "size": 1080,
            "type": "Teaser",
            "official": true,
            "published_at": "2023-11-13T21:00:05.000Z",
            "id": "6552b2790816c700c3da0e8f"
        },
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Watch Full Trailer Now!",
            "key": "NiCEEIxI1ME",
            "site": "YouTube",
            "size": 1080,
            "type": "Teaser",
            "official": true,
            "published_at": "2023-10-12T16:07:23.000Z",
            "id": "6528549c81383100fe3df66a"
        },
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Trailer #2",
            "key": "wYmtRhKvmVE",
            "site": "YouTube",
            "size": 2160,
            "type": "Trailer",
            "official": true,
            "published_at": "2023-10-12T16:00:44.000Z",
            "id": "652854bffd63005d7a2d884b"
        },
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Official Trailer",
            "key": "otNh9bTjXWg",
            "site": "YouTube",
            "size": 2160,
            "type": "Trailer",
            "official": true,
            "published_at": "2023-07-11T16:00:39.000Z",
            "id": "64ad8035b686b9010e0dcf7f"
        }
    ]
}

    useEffect(() => {
        getMovieDetails(id)
            .then((data) => {
                setLoadedMovieData(data);
              
                // fetchTrailers returning undefined, need to fix
                fetchTrailers(id)
                    .then((data) => {
                        // console.log(data)
                        // console.log(data.id)
                        // console.log(data.results)
                        // console.log(typeof data.results)
                        const Trailer = filterVideos(data.results);


                        console.log(Trailer) //why returns empty?
                        setYoutubeMovieData(data)
                        setLoadedTrailer(Trailer);
                       

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

    const imagePath = `${IMAGE_URL_BASE}/w780${loadedMovieData.backdrop_path}`;

    


    const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % creditData.cast.length);
    };
  
    const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + creditData.cast.length) % creditData.cast.length);
    };

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
                <div id='about' className="flex flex-wrap mx-4 gap-4">
                    {/* Movie Info */}
                    <div className="flex flex-wrap flex-col gap-1">
                        {/* Movie Info */}
                        <h2 className="font-bold text-2xl">{loadedMovieData.title}</h2>
                        <h3>{loadedMovieData.release_date}</h3>
                        
                        {/* Map out Genre Array */}
                        <div className="flex text-center">
                            {loadedMovieData.genres.length > 0 && 
                                loadedMovieData.genres.map((genre) => (
                                    <div key = {genre.id} className="mr-2 text-xs">
                                        <p>{genre.name}</p>
                                    </div>
                            ))}
                        </div>
                        {/* Movie Info - Rating and Date */}
                        <div className="flex">
                            <svg className = "mb-0.5 mr-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="yellow"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <p className={`border ${borderClass} rounded-full p-1 min-w-[34px] ${colorClass} text-center`}>
                                {ratingAverage}
                            </p>
                        </div>

                    </div>

                        {/* Movie Description */}
                        <div className="text-sm">
                            <p>{loadedMovieData.overview}</p>
                        </div>

                    {/* Movie Trailer */}
                    <div>
                        {loadedTrailer ? (
                        <iframe
                            width="100%"
                            height="315"
                            src={`https://youtube.com/embed/${loadedTrailer[0].key}`}
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
                    <h2 className="font-bold mb-4 text-2xl sticky left-1">Top Billed Cast</h2>
                    <ol className="flex list-none m-0 p-0" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>    
                    
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
                    {reviewData.results.length > 0 &&
                        reviewData.results.map((reviewData) => (
                            <Reviews reviewData={reviewData} />
                        ))}
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
                        <p></p>
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