import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="nav">
            <div class="smallnav">
            <div class="icon"><a href="./cc-index.html"><i class="fa-solid fa-house-chimney fa-2xl"></i></a></div>
            <div class="icon"><a href="./cc-login.html"><i class="fa-solid fa-user fa-2xl"></i></a></div>
            <div class="icon"><a href="./cc-explore.html"><i class="fa-solid fa-fire-burner fa-2xl"></i></a></div>
        </div>
        <div class="theicons">
            <div><Link to="/">Home</Link></div>
            <div><Link to="Login">Account</Link></div>
            <div><Link to="Explore">Search Recipes</Link></div>
        </div>
        </div>
    )
}

export default Header;