import { Link } from 'react-router-dom';

function MoreInfoButton({movieData}){
    const buttonStyles = "more-info-btn bg-logo text-white hover:bg-white hover:text-logo duration-300 px-1 py-1 rounded text-xs mt-2 uppercase font-bold sm:px-4 sm:py-2 sm:text-base md:mt-4 xl:mt-8 xl:px-6 xl:py-4 xl:text-2xl";
    return(
        <Link to={`/single/${movieData.id}/about`}>
            <button className={buttonStyles}>
               More Info
            </button>
        </Link>
    )
}

export default MoreInfoButton;