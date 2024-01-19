const API_TOKEN = process.env.REACT_APP_TMDB_TOKEN;
const API_ENDPOINT = "https://api.themoviedb.org/3";
console.log(API_TOKEN)

function getPopularMovies(){
    return fetch(`${API_ENDPOINT}/movie/popular`,{
        accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDUzYjM3YjlhYTY4OGI4NDJjZTI4M2I5Mjc2MzI4MSIsInN1YiI6IjY1YWFkMjlmN2NhYTQ3MDEyNTA5OGFiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zaBcy9Fush998QyOjawGEsh4nLe9tiojiqSpBCC1ikk'
    })
    .then((response) => {
        if(!response.ok){
            throw new Error("Network response was not OK")
        }
        return response.json;
    })
    .catch((error)=>{
        throw error;
    });
}

export {getPopularMovies };