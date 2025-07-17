import "./css/MovieDetail.css"
import movieListData from"./data/movieListData.json"
import { useParams } from 'react-router-dom'

const baseUrl = "https://image.tmdb.org/t/p/w500"

function MovieDetail () {
    const params = useParams()
    console.log(params.id)

    const movie = movieListData.results.find((el)=>el.id === Number(params.id))
    console.log(movie)
    return(
        <>
          <div>
            <div className="Detail-grid">
                <div className="Detail-poster">
                    <img className="Detail-img" src={baseUrl + movie.poster_path}/>
                </div>
                <div className="Detail-detail">
                    <div className="Detail-title-average">
                        <div className="Detail-title">
                            {movie.title}
                        </div>
                        <div className="Detail-average">
                            평점 : {movie.vote_average}
                        </div>
                    </div>
                    <div className="Detail-genre">
                        장르 보류
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