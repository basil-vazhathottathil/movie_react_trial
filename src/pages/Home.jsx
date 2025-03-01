import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import '../css/Home.css';
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError('Failed to load popular movies.');
            } finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!search.trim() || loading) {
            return;
        }

        setLoading(true);
        try{
            const searchResults = await searchMovies(search);
            setMovies(searchResults);
            setError(null);
        }catch{
            console.log(err);
            setError('Failed to search movies...');
        }finally{
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies"
                    className="search-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? <div className="loading">Loading...</div> : 
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
            }
        </div>
    );
}

export default Home;