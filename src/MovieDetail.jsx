import { useEffect, useState } from "react";
import "./css/MovieDetail.css"
import movieListData from"./data/movieListData.json"
import { useParams } from 'react-router-dom'

const baseUrl = "https://image.tmdb.org/t/p/w500"

const key = import.meta.env.VITE_TMDB_API_KEY;

function MovieDetail () {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(()=>{
              fetch(`https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,{
                  headers: {
                      accept: "application/json",
                      Authorization: `Bearer ${key}`
                  },
              })
              .then((res)=>res.json())
              .then((data)=>{
                  setMovie(data)
              })
              .catch((err)=>{
                  console.error("영화 상세 정보 요청 실패", err)
              })
          },[id])

          if(!movie) return <div>로딩 중 ...</div>;  //????
    return(
        <>
          <div>
            <div className="Detail-grid">
                <div className="Detail-poster">
                    <img className="Detail-img" src={baseUrl + movie.poster_path}/>
                </div>
                <div className="Detail-detail">
                
                    <div className="Detail-title">
                        {movie.title}
                    </div>
                    <div className="Detail-average">
                        평점 : {movie.vote_average}
                    </div>
                    <div className="Detail-genre">
                        {movie.genres.map((genre)=> genre.name).join(" , ")}
                    </div>
                    <div className="Detail-overviewd">줄거리</div>
                    <div className="Detail-overview">
                        {movie.overview}
                    </div>
                </div>
            </div>
          </div>  
        </>
    )
}

export default MovieDetail;