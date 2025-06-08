import { Link } from "react-router-dom";


function Footer() {
    return (
        <div>
            <div className="smallnav">
                <div className="icon">
                    <a href="./cc-index.html"><i className="fa-solid fa-house-chimney fa-2xl"></i></a>
                </div>
                <div className="icon">
                    <a href="gcdcflag185@hotmail.com"><i className="fa-solid fa-envelope fa-2xl"></i></a>
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
        </div>
    )
}

export default Footer;