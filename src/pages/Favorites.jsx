import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favorites() {
    const { favorites } = useMovieContext();

    return (
        <div className="favorites">
            {favorites.length === 0 ? (
                <div className="favorites-empty">
                    <h3>No favorites yet</h3>
                    <p>Add movies to favorites....</p>
                </div>
            ) : (
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;