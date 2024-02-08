import PageHome from "../pages/PageHome";
import {Link} from "react-router-dom"

function Logo({className}){
    return (
        <Link to="/" className="flex p-2 text-3xl md:text-5xl md:mx-4">
            <h2 className={className}>M</h2>
            <h2 className='text-logo'>P</h2>
        </Link>
    );
}


export default Logo;