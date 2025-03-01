// const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const API_KEY = import.meta.env.VITE_IMDB_MOVIE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch popular movies
export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log("Popular Movies API Response:", data);  // Debugging
        return data.results || [];
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return [];
    }
};

// Search movies by query
export const searchMovies = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log("Search API Response:", data);  // Debugging
        return data.results || [];
    } catch (error) {
        console.error("Error searching movies:", error);
        return [];
    }
};
