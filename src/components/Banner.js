import { IMAGE_URL_BASE } from "../utilities/api";
import { Link } from 'react-router-dom';

function Banner({movieData}) {
    const bannerPath = `${IMAGE_URL_BASE}/w780${movieData.backdrop_path}`;    
    return(
        <div>
            <Link to ={`/single/${movieData.id}/about`}>
                <img src={bannerPath} alt="" />
            </Link>
        </div>    
    )
}


export default Banner;