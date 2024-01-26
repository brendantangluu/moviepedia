import { IMAGE_URL_BASE } from "../utilities/api";

function CastCard({ castData }) {
  
  
  const CastProfileImagePath = `${IMAGE_URL_BASE}/h632${castData.profile_path}`;
  
  console.log(CastProfileImagePath)

  return (
    <div>
      <div className = "border rounded-lg">
        <img className = "min-w-[175px] rounded-lg" src={CastProfileImagePath} alt="" />
          <p className="text-sm text-center pt-2 pb-1 font-bold break-words">{castData.name}</p>
          <p className="text-xs text-center pb-2 break-words">{castData.character}</p>
      </div>
    </div>
  ); 
}

export default CastCard;
