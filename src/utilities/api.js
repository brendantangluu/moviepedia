const API_TOKEN = process.env.REACT_APP_TMDB_TOKEN; 
const API_ENDPOINT = "https://api.themoviedb.org/3";
const IMAGE_URL_BASE = "https://image.tmdb.org/t/p";
const SEARCH_BASE =  "&include_adult=false&language=en-US&page=1";

// fetch Popular Movies
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

// fetch Top Rated Movies
function getTopRatedMovies(){
  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
      }
    };
    
    return fetch(`${API_ENDPOINT}/movie/top_rated`, options)
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

// fetch Upcoming Movies
function getUpcomingMovies(){
  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
      }
    };
    
    return fetch(`${API_ENDPOINT}/movie/upcoming`, options)
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

// fetch Now Playing Movies
function getNowPlayingMovies(){
  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
      }
    };
    
    return fetch(`${API_ENDPOINT}/movie/now_playing`, options)
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

// fetch Trailers
function fetchTrailers(movieId){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`
    }
  };
  
  return fetch(`${API_ENDPOINT}/movie/${movieId}/videos`, options)
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

// fetch Single Movie Details
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

// fetch Credits
function getCreditDetails(movieId) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    }
  };

  return fetch(`${API_ENDPOINT}/movie/${movieId}/credits`, options)
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

// fetch Reviews
function getReviews(movieId){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    }
  };

  return fetch(`${API_ENDPOINT}/movie/${movieId}/reviews`, options)
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


function discoverMovies(search){
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    }
  };
  return fetch(`${API_ENDPOINT}/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
    .then(response => {
      if (!response.ok) {
        console.log(`${API_ENDPOINT}/${search}${SEARCH_BASE}`)
        throw new Error(`${API_ENDPOINT}/${search}${SEARCH_BASE}`);
      }
      return response.json();
    })
    .catch(err => {
      throw err;
    });

}

// fetch('https://api.themoviedb.org/3/search/movie?query=pizza&include_adult=false&language=en-US&page=1', options)

export {getPopularMovies, getTopRatedMovies, getUpcomingMovies, getNowPlayingMovies, fetchTrailers, getMovieDetails, getCreditDetails, getReviews, discoverMovies, IMAGE_URL_BASE, API_ENDPOINT };