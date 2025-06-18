import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



function ViewRecipe() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [recipe, setRecipe] = useState({});
  const {_id} = useParams();

  useEffect(() =>{
      fetch(`${API_BASE_URL}/api/recipes/${_id}`, {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data.data.recipe)
      })
      .catch(console.error)
    }, [API_BASE_URL, _id])

  return (
    <div>
      <div className="bigbox">
        <div>
              <h1>{recipe.name}</h1>
                <img className="recipePhoto" src={recipe.imageUrl} alt="Food Photo" />
                <span><h3>Ingredients</h3>{recipe.ingredients}</span>
                <span><h3>Instructions</h3>{recipe.instructions}</span>
                <span><h3>Notes</h3>{recipe.notes}</span>
        </div>
      </div>
    </div>
  )
}

export default ViewRecipe;