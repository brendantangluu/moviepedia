import { IMAGE_URL_BASE } from "../utilities/api";

function Banner({movieData}) {
    const bannerPath = `${IMAGE_URL_BASE}/w780${movieData.backdrop_path}`;
    console.log(bannerPath);
    
    return(
        <div>
            <img src={bannerPath} alt="" />
        </div>    
    )
}


export default Banner;