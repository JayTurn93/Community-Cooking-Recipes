import { useEffect, useState } from "react";
import recipes from "../data/recipes"


function Home() {
    const [newerRecipe, setNewerRecipe] = useState([]);
    const [discussedRecipe, setDiscussedRecipe] = useState([]);
    
    // const commentAmount = 20;
    console.log(">>>>:::", Object.values(discussedRecipe), newerRecipe)
    useEffect(() => {
        setNewerRecipe(recipes);
        // setDiscussedRecipe(recipes);
        }, []);

        useEffect(() => {
            setDiscussedRecipe(recipes)
    }, [])
    // useEffect(() => {
    //         setDiscussedRecipe(recipes);
    // }, [])

    return (
        <div>
            <h1>Community Cooking Recipes</h1>
            <div className="bigbox">
                <div>
                    <h2>Community Bulletin</h2>
                </div>
                <div>
                <p>Welcome to Community Cooking Recipes. Here all the recipes are user submitted, rated, and discussed. Check out whats new below!</p>
                </div>
                <span>
                    <ul key={newerRecipe.id}>
                        {newerRecipe.map((aRecipe) => 
                        <li>
                            <a href="#">{aRecipe.name}</a>
                        </li>
                        )}
                    </ul>
                </span>
            </div>
            <div className="smallcontainer">
                <div className="smallrectangle">
                    <h2>Most Discussed</h2>
                    <ul key={newerRecipe.id}>
                        {newerRecipe.map((aRecipe) => 
                        <li>
                            <a href="#">{aRecipe.name}</a>
                        </li>
                        )}
                    </ul>
                </div>
                <div className="smallrectangle">
                    <h2>Hall of Fame</h2>
                    <ul key={newerRecipe.id}>
                        {newerRecipe.map((aRecipe) => 
                        <li>
                            <a href="#">{aRecipe.name}</a>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;