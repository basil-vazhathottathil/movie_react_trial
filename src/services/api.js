const API_KEY= movie_api_key;
const Base_URL= 'https://api.themoviedb.org/3';
const IMG_URL= 'https://image.tmdb.org/t/p/w500';


export const getPopularMovies= async ()=>{
    const response= await fetch(`${Base_URL}/movie/popular?api_key=${API_KEY}`);
    const data= await response.json();
    return data.results;
};


export const searchMovies= async (query)=>{
    const response= await fetch(`${Base_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data= await response.json();
    return data.results;
};