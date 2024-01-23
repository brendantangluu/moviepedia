import { Carousel } from "@material-tailwind/react";
import Banner from "./Banner";

// Creates a function randomizing the array of banner images
// This ensures that each time a user requests it will output 4 random banners (from Popular Movies) to the carousel

function shuffleArray(array) {
    // Function to shuffle the array using Fisher-Yates algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

function CarouselDefault({moviesData}) {
    console.log("moviesData:", moviesData);
    
    const shuffledMoviesData = [...moviesData];
    shuffleArray(shuffledMoviesData)

return (
    <Carousel autoplay = {true} autoplayDelay = {7000} loop = {true} transition={{ duration: 1.5 }}>
      {shuffledMoviesData.slice(0, 6).map((movieData) => (
        <div key={movieData.id}>
          <Banner movieData={movieData} />
        </div>
      ))}
    </Carousel>
  );
}

export {CarouselDefault};