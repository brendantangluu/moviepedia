import { useState, useEffect } from 'react';
import { IMAGE_URL_BASE } from "../utilities/api";
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import WatchButton from './WatchListButton';
import placeholder2 from '../placeholder2.svg'

function MovieCard({ movieData }) {
  const [isTapped, setIsTapped] = useState(false);
  const [isHoverEnabled, setIsHoverEnabled] = useState(false);
  const imagePath = `${IMAGE_URL_BASE}/w780${movieData.poster_path}`;
  const mobileTruncatedOverview = movieData.overview.length > 30 ? `${movieData.overview.slice(0, 35)}...` : movieData.overview;
  const desktopTruncatedOverview = movieData.overview.length > 30 ? `${movieData.overview.slice(0, 85)}...` : movieData.overview;

  useEffect(() => {
    const handleResize = () => {
      setIsHoverEnabled(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInteractionStart = () => !isHoverEnabled && setIsTapped(!isTapped);
  const handleMouseEnter = () => isHoverEnabled && setIsTapped(true);
  const handleMouseLeave = () => isHoverEnabled && setIsTapped(false);

  let borderClass;
  const ratingAverage = movieData.vote_average.toFixed(1);

      if (ratingAverage >= 8) {
          borderClass = "border-green-500";
      } else if (ratingAverage >= 5 && ratingAverage < 8) {
          borderClass = "border-yellow-500";
      } else {
          borderClass = "border-red-500";
      }

  const matches = useMediaQuery('(min-width:720px)');

  return (
    <div className="flex flex-col items-center relative">
      
      {/* handle movie images + tap state */}
      <div
        className={`relative group ${isTapped ? 'opacity-85' : ''} ${isHoverEnabled ? 'hover:opacity-85' : ''}`}
        onClick={handleInteractionStart}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >  
                                                              {/* !castData.profile_path ? placeholder : CastProfileImagePath */}
      
        <img className="object-cover rounded-lg max-w-[138px] md:max-w-[216px] 4xl:max-w-[295px]" src={!movieData.poster_path ? placeholder2 : imagePath} alt="" />
        {isTapped && (  
          <div className="px-2 absolute top-0 left-0 w-full max-w-full h-full bg-black opacity-90 flex flex-col items-center justify-between rounded-lg">
            <WatchButton movieData = {movieData}/>
            <p className='p-2 text-sm'>{matches ? desktopTruncatedOverview : mobileTruncatedOverview}</p>   
            <Link to={`/single/${movieData.id}/about`}>
              <button className="more-info-btn bg-logo text-white hover:text-logo hover:bg-white duration-300 px-1 py-1 rounded text-xs mb-4 hover:animate-pulse uppercase font-bold sm:text-sm lg:p-2 lg:text-base xl:mt-8">
                  More Info
              </button>
            </Link>
          </div>
          
        )}
      </div>

      {/* handle movie information + favourite button */}
      <div className="w-[136px] flex flex-col items-center relative mt-2 md:w-auto">
        <div className="flex items-center mb-2.5 md:w-[216px] md:justify-between lg:mt-2 lg:mb-4 4xl:w-[295px] 4xl:justify-stretch">
          <div className="flex items-center">
              <svg className="mb-0.5" xmlns="http://www.w3.org/2000/svg" width={`${matches ? "40" : "24"}`} height={`${matches ? "40" : "22"}`} viewBox="0 0 24 24" fill="yellow">
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
              </svg>
              <p className={`border-4 ${borderClass} rounded-full p-1 min-w-[34px] text-center ml-1 text-xs font-bold md:text-2xl md:p-2 md:ml-2 md:mt-1`}>
                  {ratingAverage}
              </p>
          </div>
          <div className="ml-auto">
              <FavoriteButton movieData={movieData} pageStyle={"page1"} />
          </div>
        </div>

        <div className="text-center whitespace-normal md:w-auto">
          <h3 className="text-sm italic md:text-xl 2xl:text-2xl">{movieData.release_date}</h3>
          <h4 className="text-base font-semibold my-2 leading-tight max-w-[216px] sm:text-lg md:text-2xl 2xl:text-3xl">{movieData.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;