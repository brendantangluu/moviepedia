import { IMAGE_URL_BASE } from "../utilities/api";

function CastCard({ castData }) {
  
  
  const CastProfileImagePath = `${IMAGE_URL_BASE}/h632${castData.profile_path}`;
  
  console.log(CastProfileImagePath)

  return (
    <div>
      <div className = "border">
        <img className = "min-w-[175px]" src={CastProfileImagePath} alt="" />
          <p className="text-sm text-center pt-2 pb-1 font-bold bg-white text-black break-words">{castData.name}</p>
          <p className="text-xs text-center pb-2 bg-white text-black break-words">{castData.character}</p>
      </div>
    </div>
  ); 
}

export default CastCard;
