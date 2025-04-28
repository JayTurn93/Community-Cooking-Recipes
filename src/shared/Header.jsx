function Header() {
    return (
        <div className="nav">
            <div class="smallnav">
            <div class="icon"><a href="./cc-index.html"><i class="fa-solid fa-house-chimney fa-2xl"></i></a></div>
            <div class="icon"><a href="./cc-login.html"><i class="fa-solid fa-user fa-2xl"></i></a></div>
            <div class="icon"><a href="./cc-explore.html"><i class="fa-solid fa-fire-burner fa-2xl"></i></a></div>
        </div>
        <div class="theicons">
            <div><a href="./cc-index.html">HOME</a></div>
            <div><a href="./cc-login.html">Account</a></div>
            <div><a href="./cc-explore.html">Search Recipes</a></div>
        </div>
        </div>
    )
}

export default Header;