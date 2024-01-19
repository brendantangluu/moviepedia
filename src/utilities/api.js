const API_TOKEN = process.env.REACT_APP_TMDB_TOKEN;
const API_ENDPOINT = "https://api.themoviedb.org/3";
console.log(API_TOKEN)

function getPopularMovies(){
    // return fetch(`${API_ENDPOINT}/movie/popular`,{
    //     Accept: 'application/json',
    //     Authorization: `Bearer ${API_TOKEN}`
    // })
    // .then((response) => {
    //     if(!response.ok){
    //         throw new Error("Network response was not OK")
    //     }
    //     return response.json();
    // })
    // .catch((error)=>{
    //     throw error;
    // });
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_TOKEN}`,
        }
      };
      
      return fetch(`${API_ENDPOINT}/movie/popular?language=en-US&page=1`, options)
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

export {getPopularMovies };