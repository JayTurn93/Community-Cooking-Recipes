import { Link } from "react-router-dom";


function Footer() {
    return (
        <div>
            <footer>
                <div className="smallnav">
                    <div className="icon">
                        <Link to="/"><i className="fa-solid fa-house-chimney fa-2xl"></i></Link>
                    </div>
                    <div className="icon">
                        <Link to="Contact"><i className="fa-solid fa-envelope fa-2xl"></i></Link>
                    </div>
                </div>
                <div className="largefoot">
                    <div>
                        <div><Link to="/">Home</Link></div>
                    </div>
                    <div>
                        <div><Link to="/contact">Contact</Link></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;