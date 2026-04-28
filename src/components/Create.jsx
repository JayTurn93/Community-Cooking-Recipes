import { useNavigate } from "react-router-dom";

function Create() {
    const navigate = useNavigate()
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const handleSubmitRecipe = (e) => {
      e.preventDefault()
      const body = {
        name: e.target.name.value,
        prepTime: e.target.prepTime.value,
        cookTime: e.target.cookTime.value,
        ingredients: e.target.ingredients.value,
        instructions: e.target.instructions.value,
        notes: e.target.notes.value
      }
      fetch(`${API_BASE_URL}/api/recipes/create/new`, {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(body)})
        .then(() => navigate("/admin"))
        .catch(console.error)
    }

    return (
        <div>
        <h2>Create New Recipe</h2>
        <div className="bigbox">
            <form onSubmit={handleSubmitRecipe}>
                <div className="recipeinput">
                    <label htmlFor="name">Recipe Name: </label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div className="recipeinput">
                    <label htmlFor="prepTime">Prep Time: </label>
                    <input type="text" name="prepTime" id="prepTime" />
                </div>
                <div className="recipeinput">
                    <label htmlFor="cookTime">Cook Time: </label>
                    <input type="text" name="cookTime" id="cookTime" required />
                </div>
                <div className="bigtextarea">
                    <label htmlFor="ingredients">Ingredients: </label>
                    <textarea name="ingredients" id="ingredients" rows="7" cols="75" required></textarea>
                </div>
                <div className="bigtextarea">
                    <label htmlFor="instructions">Instructions: </label>
                    <textarea name="instructions" id="instructions" rows="7" cols="75" required></textarea>
                </div>
                <div className="bigtextarea">
                    <label htmlFor="notes">Notes: </label>
                    <textarea name="notes" id="notes" rows="7" cols="75"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    )
}

export default Create;
