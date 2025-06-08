import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <div className="nav">
                <div class="smallnav">
                    <div class="icon"><a href="./cc-index.html"><i class="fa-solid fa-house-chimney fa-2xl"></i></a></div>
                    <div class="icon"><a href="./cc-login.html"><i class="fa-solid fa-user fa-2xl"></i></a></div>
                    <div class="icon"><a href="./cc-explore.html"><i class="fa-solid fa-fire-burner fa-2xl"></i></a></div>
                </div>
            </div>
            <nav>
                <div className="theicons">
                    <Link to="/">Home </Link>
                    <Link to="Login">Account </Link>
                    <Link to="Explore">Search Recipes </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header;