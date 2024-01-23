const API_TOKEN = process.env.REACT_APP_TMDB_TOKEN;
const API_ENDPOINT = "https://api.themoviedb.org/3";
const IMAGE_URL_BASE = "https://image.tmdb.org/t/p"

function getPopularMovies(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_TOKEN}`,
        }
      };
      
      return fetch(`${API_ENDPOINT}/movie/popular`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            return response.json();
        })
        .catch(err => {
            throw err;
        });
}



export {getPopularMovies, IMAGE_URL_BASE, API_ENDPOINT };