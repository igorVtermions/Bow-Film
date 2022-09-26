import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Moviecard } from "../components/Moviecard"

const SearchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import './MoviesGrid.css'
import '../Styles/responsive.css'

export function Search(){

    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([])
    const query = searchParams.get('q')
    const getSearchedMovies = async (url)=>{
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
    }
    useEffect(()=>{
        const SearchWithQueryURL = `${SearchURL}?${apiKey}&query=${query}`
        getSearchedMovies(SearchWithQueryURL)
    }, [query]);

    return(
        <div className="container">
            <h2 className="title">
                resultados para: <span className="query-text">{query}</span>
            </h2>
            <div className="movies-container">
                {Moviecard.length > 0 && movies.map((movie) => <Moviecard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}