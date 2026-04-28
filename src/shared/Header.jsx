import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav>
                <div className="smallnav">
                    <div className="icon"><Link to="/"><i className="fa-solid fa-house-chimney fa-2xl"></i></Link></div>
                    <div className="icon"><Link to="/login"><i className="fa-solid fa-user fa-2xl"></i></Link></div>
                    <div className="icon"><Link to="/explore"><i className="fa-solid fa-fire-burner fa-2xl"></i></Link></div>
                </div>
                <div className="theicons">
                    <Link to="/">Home </Link>
                    <Link to="/login">Account </Link>
                    <Link to="/explore">Search Recipes </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header;