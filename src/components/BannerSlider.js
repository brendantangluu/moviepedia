import { Carousel } from "@material-tailwind/react";
import Banner from "./Banner";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

function CarouselDefault({moviesData}) {
    
    const shuffledMoviesData = [...moviesData];
    shuffleArray(shuffledMoviesData)

return (
    <Carousel autoplay = {true} autoplayDelay = {7000} loop = {true} transition={{ duration: 0.5 }}>
      {shuffledMoviesData.slice(0, 6).map((movieData) => (
        <div key={movieData.id}>
          <Banner movieData={movieData} />
        </div>
      ))}
    </Carousel>
  );
}

export {CarouselDefault};