import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav>
                <div class="smallnav">
                    <div class="icon"><Link to="/"><i class="fa-solid fa-house-chimney fa-2xl"></i></Link></div>
                    <div class="icon"><Link to="Login"><i class="fa-solid fa-user fa-2xl"></i></Link></div>
                    <div class="icon"><Link to="Explore"><i class="fa-solid fa-fire-burner fa-2xl"></i></Link></div>
                </div>
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