import { useState, useEffect } from "react";
// import recipes from  "../data/recipes";
import { Link } from "react-router-dom";


function Explore() {
    const [ingredient, setIngredient] = useState([""]);
    const [recipes, setRecipes] = useState([]);
    const [foundRecipes, setFoundRecipes] = useState("");
     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/recipes`, {method: "GET"})
            .then(response => response.json())
            .then((data) => {
                const recipeslist = data.data.recipes
                setRecipes(recipeslist)
            })
            .catch(console.error)
},[API_BASE_URL])

    const filter = (e) => {
        e.preventDefault()
        const keyword = e.target.value;
        const terms = keyword.split(",")
        if (keyword !== "") {
            const results = recipes.filter((recipe) => {
                return recipe.ingredients.toLowerCase().includes(keyword.toLowerCase());
            })
            setFoundRecipes(results);
        } else {
            setFoundRecipes(recipes);
        }
        setIngredient(terms)
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
                    <div className="recipe-results">
                        {foundRecipes && foundRecipes.length > 0 ? (
                          foundRecipes.map((recipe) =>(
                            <ul key={recipe._id} className="recipe">
                                <span className="recipe-name">
                                    <Link to={`/viewrecipe/${recipe._id}`}>{recipe.name}</Link>
                                </span>
                            </ul>
                          ))
                        ) : (
                            <p>Nothing Cooking Here</p>
                        )}
                    </div>
                </div>
                <div className="smallrectangle">
                        <h2>Other Ideas</h2>
                        <ul key={recipes._id}>{recipes.map((recipe) =>
                         <li>
                            <Link to={`/viewrecipe/${recipe._id}`}>{recipe.name}</Link>
                         </li>
                         )}
                         </ul>
                    </div>
                </div>
        </div>
    )
}

export default Explore;