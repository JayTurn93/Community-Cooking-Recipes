function Home() {
    return (
        <div>
            <h1>Community Cooking Recipes</h1>
            <div className="bigbox">
                <h2>Community Bulletin</h2>
                <p>Welcome to Community Cooking Recipes. Here all the recipes are user submitted, rated, and discussed. Check out whats new below!</p>
                <span>
                    <ul>
                        <li><a href="#">Rice Cooker Rice and Chicken</a></li>
                        <li><a href="#">Simple Burritos</a></li>
                        <li><a href="#">Amazing Applebutter Chicken</a></li>
                    </ul>    
                </span>
            </div>
            <div className="smallcontainer">
                <div className="smallrectangle">
                    <h2>Most Discussed</h2>
                </div>
                <div className="smallrectangle">
                    <h2>Hall of Fame</h2>
                </div>
            </div>
        </div>
    )
}

export default Home;