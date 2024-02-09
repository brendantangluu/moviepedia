import tmdbLogo from '../tmdb-logo.svg';
function PageAbout(){
   
    return(
        <div className="text-text h-dvh">
            <h1 className="font-bold mb-4 mt-6 text-2xl border-l-4 pl-2 translate-x-1 border-logo sm:mx-3 sm:text-base md:text-3xl md:mt-12 lg:text-4xl">About</h1>
            <p className="px-4 text-base md:text-xl lg:w-3/4">
                Moviepedia is your ultimate destination for all things cinema. Our company, aptly named Moviepedia, is a dynamic and innovative online platform dedicated to bringing you the latest and greatest in the world of film. With a user-friendly interface and a vast database of popular movies, we are your go-to source for everything related to the silver screen. 
                <br />
                <br />
                Whether you are seeking inspiration for your next movie night or just want to stay informed about the hottest trends in the film industry, Moviepedia has you covered. Join us on our cinematic journey and explore the wonderful world of movies right at your fingertips. Moviepedia: Where the magic of movies comes to life!
            </p>
            <div className='mt-4 px-4 text-xs'>
                <p className='font-bold italic md:text-base'>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
                <img className = "w-16 mt-2 md:w-36" src={tmdbLogo} alt="The Movie Database Logo" />
            </div>
        </div>
    )
}

export default PageAbout;