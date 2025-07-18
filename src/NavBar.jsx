import { createSearchParams, Link, useNavigate } from "react-router-dom"
import "./css/NavBar.css"
import { useEffect, useState } from "react";
import useDebounce from "./Hooks/useDebounce";

function NavBar(){
        const [input, setInput] = useState("");
        const debounceInput = useDebounce(input, 500);
        const navigate = useNavigate();
    useEffect(() => {
    if (debounceInput.trim()) {
      navigate({
        pathname: "/search",
        search: createSearchParams({ query: debounceInput }).toString(),
      });
    }
  }, [debounceInput]);


    return(
        <div className="NavBar-grid">
            
            <Link className="OZmovie" to="/">OZ 무비</Link>
            <input 
            type="text" 
            className="input"
            value={input}
            onChange={(e)=>setInput(e.target.value)}/>
            <div className="button">
                <button className="login">로그인</button>
                <button className="signUp">회원가입</button>
            </div>
        </div>
    )
}

export default NavBar;