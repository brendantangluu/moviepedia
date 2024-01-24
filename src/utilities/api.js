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

function fetchTrailers({movieData}){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDUzYjM3YjlhYTY4OGI4NDJjZTI4M2I5Mjc2MzI4MSIsInN1YiI6IjY1YWFkMjlmN2NhYTQ3MDEyNTA5OGFiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zaBcy9Fush998QyOjawGEsh4nLe9tiojiqSpBCC1ikk'
    }
  };
  
  return fetch(`${API_ENDPOINT}/movie/${movieData.id}/videos`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

function getMovieDetails(movieId) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    }
  };

  return fetch(`${API_ENDPOINT}/movie/${movieId}`, options)
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


export {getPopularMovies, fetchTrailers, getMovieDetails, IMAGE_URL_BASE, API_ENDPOINT };