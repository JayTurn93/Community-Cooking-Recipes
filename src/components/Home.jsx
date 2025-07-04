import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import recipes from "../data/recipes"

function Home() {
  const [recipeCollection, setRecipeCollection] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/recipes`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        const recipes = data.data.recipes;
        setRecipeCollection(recipes);
      })
      .catch(console.error);
  }, [API_BASE_URL]);

  return (
    <div>
      <h1>Community Cooking Recipes</h1>
      <div className="bigbox">
        <div>
          <h2>Community Bulletin</h2>
        </div>
        <div>
          <p>
            Welcome to Community Cooking Recipes. Here all the recipes are user
            creted, tested, and approved. Check out whats new below! Sign up to
            show us your skills.
          </p>
        </div>
        <span>
          <ul key={recipeCollection._id}>
            {recipeCollection.map((aRecipe) => (
              <li>
                <Link to={`/viewrecipe/${aRecipe._id}`}>{aRecipe.name}</Link>
              </li>
            ))}
          </ul>
        </span>
      </div>
      <div className="smallcontainer">
        <div className="smallrectangle">
          <h2>Most Discussed</h2>
          <ul key={recipeCollection._id}>
            {recipeCollection.map((aRecipe) => (
              <li>
                <a href="#">{aRecipe.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="smallrectangle">
          <h2>Hall of Fame</h2>
          <ul key={recipeCollection._id}>
            {recipeCollection.map((aRecipe) => (
              <li>
                <a href="#">{aRecipe.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
