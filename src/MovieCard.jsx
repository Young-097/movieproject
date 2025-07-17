import { Link } from "react-router-dom";
import movieListData from "../src/data/movieListData.json"
import "./css/MovieCard.css"

const baseUrl = "https://image.tmdb.org/t/p/w500"


function MovieCard () {
    return(
        <>
          <div>
            <div className="ingison">인기순</div>
            <div className="MovieCard-grid">
              {movieListData.results.slice(0.20).map((el)=>
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