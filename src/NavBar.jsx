import { Link } from "react-router-dom"
import "./css/NavBar.css"

function NavBar(){
    return(
        <div className="NavBar-grid">
            
            <Link className="OZmovie" to="/">OZ 무비</Link>
            <input type="text" className="input"/>
            <div className="button">
                <button className="login">로그인</button>
                <button className="signUp">회원가입</button>
            </div>
        </div>
    )
}

export default NavBar;