import { useEffect, useState } from "react";
import { getPopularMovies } from "../utilities/api";
import MoviesContainer from "../components/MoviesContainer";
import { CarouselDefault } from "../components/BannerSlider";


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
            <CarouselDefault/>
            <MoviesContainer title = "Popular Movies" moviesData = {popMovies}/>
        </main>

    )
}

export default PageHome;