import { useState, useEffect } from "react";
import recipes from  "../data/recipes";


function Explore() {
    const [ingredient, setIngredient] = useState("");
    const [foundRecipes, setFoundRecipes] = useState(recipes);

    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== "") {
            const results = recipes.filter((recipe) => {
                return recipe.name.toLowerCase().startsWith(keyword.toLowerCase());
            })
            setFoundRecipes(results);
        } else {
            setFoundRecipes(recipes);
        }
        setIngredient(keyword)
    }

    return (
        <div>
            <h2>Search Recipes</h2>
                <div className="ingredientBox">
                    <div className="ingredientSelection">
                        Enter some items from the kitchen
                        <input type="text" value={ingredient} onChange={filter} placeholder="Filter" size="30" />
                    </div>
                </div>
            <div className="smallcontainer">
                <div className="smallrectangle">
                    <h2>Recipe Results</h2>
                </div>
                <div className="smallrectangle">
                        <h2>Other Ideas</h2>
                    </div>
                </div>
        </div>
    )
}

export default Explore;