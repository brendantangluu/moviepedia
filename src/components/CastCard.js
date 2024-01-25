import { IMAGE_URL_BASE } from "../utilities/api";

function CastCard({ castData }) {
  
  
  const CastProfileImagePath = `${IMAGE_URL_BASE}/w185${castData.profile_path}`;
  
  console.log(CastProfileImagePath)

  return (
    <div>
        <img src={CastProfileImagePath} alt="" />
    </div>
  );
}

export default CastCard;
