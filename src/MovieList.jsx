import { useEffect, useState } from "react";

const key = import.meta.env.VITE_TMDB_API_KEY;

const baseUrl = "https://image.tmdb.org/t/p/w500";


function MovieList () {
    const [movieList, setMovieList] = useState([])

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular",{
            headers: {
                accept: "application/json"
                Authorization: `Bearer ${key}`
            },
        })
        .then((res)=>res.json())
        .then((data)=>{
            setMovieList(data.results)
        })
        .catch((err)=>{
            console.error("TMDb API요청 실패", err)
        })
    },[])
    return(

    )
}