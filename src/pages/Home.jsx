import { useEffect, useState } from "react"
import { Moviecard } from '../components/Moviecard'
import './MoviesGrid.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;



export function Home(){
    const [topMovies, setTopMovies] = useState([]);
    const getTopRatedMovies = async (url) =>{
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
    }

    useEffect(() =>{
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
        getTopRatedMovies(topRatedUrl);
    }, ([]));


    return(
        <div className="container">
            <h2 className="title">Melhores Filmes:</h2>
            <div className="movies-Container">
                {topMovies.length > 0 &&
                 topMovies.map((movie) => <Moviecard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}