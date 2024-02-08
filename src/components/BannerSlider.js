import { Carousel, IconButton } from "@material-tailwind/react";
import Banner from "./Banner";
import { Link } from "react-router-dom";

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
    <Carousel 
    className="lg:max-h-[800px]" 
    prevArrow={false} 
    nextArrow={false}
    navigation={({ setActiveIndex, activeIndex, length }) => (
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-2 md:h-4 cursor-pointer rounded-2xl transition-all duration-300 content-[''] ${
              activeIndex === i ? "w-6 md:w-16 bg-white" : "w-3 md:w-8 bg-white/50"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    )}
    autoplay = {true} 
    autoplayDelay = {10000} 
    loop = {true} 
    transition={{ duration: 0.5 }}>

      {shuffledMoviesData.slice(0, 6).map((movieData) => (
        <div key={movieData.id}>
          <Banner movieData={movieData} />
        </div>
      ))}
    </Carousel>
  );
}

export {CarouselDefault};