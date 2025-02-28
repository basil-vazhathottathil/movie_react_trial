import MovieCard from "../components/MovieCard";
import { useState } from "react";


function Home(){

    const [search,setSearch]=useState('');

    const movies=[
        { id: 1, title: 'The Dark Knight', release_date: '2008' },
        { id: 2, title: 'Inception', release_date: '2010' },
        { id: 3, title: 'Interstellar', release_date: '2014' },
        { id: 4, title: 'The Prestige', release_date: '2006' },
    ];

    const handleSearch=(e)=>{
        e.preventDefault(); 
        alert(search);
    }

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="search for movies" className="search-input" value={search} onChange={(e)=>setSearch(e.target.value)} />
                <button className="search-button"> search </button>
            </form>

            <div className="movies-grid">
                {movies.map(movie=>(
                    movie.title.toLowerCase().startsWith(search.toLowerCase()) &&
                    <MovieCard movie={movie} key={movie.id}/>
            ))}
            </div>
        </div>
    )
}

export default Home;