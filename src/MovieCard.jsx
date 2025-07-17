import { Link } from "react-router-dom";
// import movieListData from "../src/data/movieListData.json"
import "./css/MovieCard.css"
import { useEffect, useState } from "react";

const baseUrl = "https://image.tmdb.org/t/p/w500"

const key = import.meta.env.VITE_TMDB_API_KEY;


function MovieCard () {
  const [movieList, setMovieList] = useState([])

  useEffect(()=>{
          fetch("https://api.themoviedb.org/3/movie/popular",{
              headers: {
                  accept: "application/json",
                  Authorization: `Bearer ${key}`
              },
          })
          .then((res)=>res.json())
          .then((data)=>{
            const filtered = data.results.filter((movie)=> movie.adult === false);
              setMovieList(filtered)
          })
          .catch((err)=>{
              console.error("TMDb API요청 실패", err)
          })
      },[])

    return(
        <>
          <div>
            <div className="ingison">인기순</div>
            <div className="MovieCard-grid">
              {movieList.slice(0,20).map((el)=>
                <Link key={el.id} to={`/detail/${el.id}`}>
                  <div  className='movie-card'>
                  <img className="img" src={baseUrl + el.poster_path}/>
                  <div className="title">{el.title}</div>
                  <div className="average">평점 : {el.vote_average}</div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </>
    )
}


export default MovieCard;