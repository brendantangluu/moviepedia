import { Link } from 'react-router-dom';

function MoreInfoButton({movieData}){
    return(
        <Link to={`/single/${movieData.id}/about`}>
            <button className="more-info-btn bg-logo text-white px-1 py-1 rounded text-xs mt-2 hover:animate-pulse uppercase font-bold sm:px-4 sm:py-2 sm:text-base md:mt-4 xl:mt-8 xl:px-6 xl:py-4 xl:text-2xl">
                More Info
            </button>
        </Link>
    )
}

export default MoreInfoButton;