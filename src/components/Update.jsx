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
    e.preventDefault()
    const body = {
      name: e.target.name.value,
      prepTime: e.target.prepTime.value,
      cookTime: e.target.cookTime.value,
      ingredients: e.target.ingredients.value,
      instructions: e.target.instructions.value,
      notes: e.target.instructions.value
    }
    console.log(body)
    
    fetch(`${API_BASE_URL}/api/recipes/update/${_id}`, {method: "PUT", headers: {"Content-Type":"application/json"}, body: JSON.stringify(body)})
    .then(result => console.log(result))
    // .then(data => setRecipe(data))
    .then(navigate("/admin"))
    .catch(error => console.log(error))
  }
  // console.log(recipe.name, recipe.ingredients);

  return (
    <div>
      <div className="bigbox">
        <h1>UPDATE RECIPE</h1>
        <form onSubmit={handleSubmitUpdate}>
          <span>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" defaultValue={recipe.name} />
          </span> <br />
          <span>
            <label htmlFor="prepTime"> Prep Time</label>
            <input type="text" id="prepTime" defaultValue={recipe.prepTime} />
          </span> <br />
          <span>
            <label htmlFor="cookTime">Cook Time</label>
            <input type="text" id="cookTime" defaultValue={recipe.cookTime} />
          </span> <br />
          <span>
            <label htmlFor="ingredients">Ingredients</label>
            <input type="text" id="ingredients" defaultValue={recipe.ingredients} />
          </span> <br />
          <span>
            <label htmlFor="instructions">Instructions</label>
            <input type="text" id="instructions" defaultValue={recipe.instructions} />
          </span> <br />
          <span>
            <label htmlFor="notes">Notes</label>
            <input type="text" id="notes" defaultValue={recipe.notes} />
          </span> <br />
          <span>
            <button type="submit">UPDATE</button>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Update;