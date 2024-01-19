import { useEffect, useState } from "react";
import { getPopularMovies } from "../utilities/api";
import MoviesContainer from "../components/MoviesContainer";

function PageHome(){
        const [popMovies, setPopMovies] = useState([]);

        useEffect(()=>{
            getPopularMovies()

            .then((data)=>{
                console.log(data)
                setPopMovies(data.results);
                
            })

            .catch((err)=>{
                alert(err);
            })
            
        },[])

        console.log(popMovies);

    return(
        <main id="home">
            <MoviesContainer title = "Popular Movies" moviesData = {popMovies}/>
        </main>

    )
}

export default PageHome;