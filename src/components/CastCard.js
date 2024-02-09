import { IMAGE_URL_BASE } from "../utilities/api";
import placeholder from '../placeholder.svg'

function CastCard({ castData }) {
  
  
  const CastProfileImagePath = `${IMAGE_URL_BASE}/h632${castData.profile_path}`;
  
  return (
  <div className="min-w-[172px] overflow-auto shadow border border-gray-200 rounded-lg bg-gray-900 border-gray-700 flex flex-col items-center justify-center"> {/* Updated class */}
    <img className="object-cover rounded-lg" src={!castData.profile_path ? placeholder : CastProfileImagePath} alt="" />
    <div className="text-center">
      <p className="text-sm pt-2 pb-1 font-bold break-words">{castData.name}</p>
      <p className="text-xs pb-2 break-words">{castData.character}</p>
    </div>
  </div>
  
  ); 
}

export default CastCard;
