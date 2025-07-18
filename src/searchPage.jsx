import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./css/searchPage.css"
const key = import.meta.env.VITE_TMDB_API_KEY;
const baseUrl = "https://image.tmdb.org/t/p/w500";

export default function SearchPage() {
  const [params] = useSearchParams();
  const query = params.get("query");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return;

    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&language=ko-KR`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${key}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setResults(data.results || []));
  }, [query]);

  return (
    <div>
      <h2>"{query}" 검색 결과</h2>
      <div className="movie-grid-c">
        {results.slice(0, 20).map((movie) => (
          <div key={movie.id} className="movie-card-c">
            <img src={baseUrl + movie.poster_path} alt={movie.title} className="img-c"/>
            <p className="title-c">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}