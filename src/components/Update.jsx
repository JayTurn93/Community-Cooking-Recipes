import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const {_id} = useParams();
  const navigate = useNavigate(); 
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [recipe, setRecipe] = useState({});

  useEffect(() =>{
    fetch(`${API_BASE_URL}/api/recipes/${_id}`, {method: "GET"})
    .then((response) => response.json())
    .then((data) => {
      setRecipe(data.data.recipe)
    })
    .catch(console.error)
  }, [API_BASE_URL, _id])

  const handleSubmitUpdate = (e) => {
    const body = {
      name: e.target.name.value,
      prepTime: e.target.prepTime.value,
      cookTime: e.target.cookTime.value,
      ingredients: e.target.ingredients.value,
      instructions: e.target.instructions.value,
      notes: e.target.instructions.value
    }
    fetch(`${API_BASE_URL}/api/recipes/update/:_id`, {method: "PUT", body: JSON.stringify(body)})
    .then(result => console.log(result))
    .then(data => setRecipe(data))
    .then(navigate("/admin"))
    .catch(error => console.log(error))
  }
  console.log(recipe.name, recipe.ingredients);

  return (
    <div>
      <div className="bigbox">
        <h1>UPDATE RECIPE</h1>
        <form onSubmit={handleSubmitUpdate}>
          <span>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={recipe.name} />
          </span> <br />
          <span>
            <label htmlFor="prepTime"> Prep Time</label>
            <input type="text" id="prepTime" value={recipe.prepTime} />
          </span> <br />
          <span>
            <label htmlFor="cookTime">Cook Time</label>
            <input type="text" id="cookTime" value={recipe.cookTime} />
          </span> <br />
          <span>
            <label htmlFor="ingredients">Ingredients</label>
            <input type="text" id="ingredients" value={recipe.ingredients} />
          </span> <br />
          <span>
            <label htmlFor="instructions">Instructions</label>
            <input type="text" id="instructions" value={recipe.instructions} />
          </span> <br />
          <span>
            <label htmlFor="notes">Notes</label>
            <input type="text" id="notes" value={recipe.notes} />
          </span>
        </form>
      </div>
    </div>
  )
}

export default Update;