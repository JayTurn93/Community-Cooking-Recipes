import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Create() {

    const navigate = useNavigate()
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [recipeName, setRecipeName] = useState("");
    const [prepTime, setPrepTime] = useState("");
    const [cookTime, setCookTime] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [notes, setNotes] = useState("");

    const handleRecipeNameChange = (e) => {
        e.preventDefault();
        setRecipeName(e.target.value);
    }
    const handlePrepTimeChange = (e) => {
        e.preventDefault()
        setPrepTime(e.target.value)
    }
    const handleCookTimeChange = (e) => {
        e.preventDefault()
        setCookTime(e.target.value)
    }
    const handleIngredientsChange = (e) => {
      e.preventDefault()
      setIngredients(e.target.value)
    }
    const handleInstructionsChange = (e) => {
        e.preventDefault()
        setInstructions(e.target.value)
    }
    const handleNotesChange = (e) => {
        e.preventDefault()
        setNotes(e.target.value)
    }

    const handleSubmitRecipe = (e) => {
      e.preventDefault()
      console.log("trying to",recipeName, prepTime, cookTime, ingredients, instructions, notes);
      const body = {
        name: e.target.name.value,
        prepTime: e.target.prepTime.value,
        cookTime: e.target.cookTime.value,
        ingredients: e.target.ingredients.value,
        instructions: e.target.instructions.value,
        notes: e.target.notes.value
      }
      
      fetch(`${API_BASE_URL}/api/recipes/create/new`, {method: "POST"})
        .then(JSON.stringify(body))
        .then(navigate, ("/Home"))
        .catch(console.error)
      
    }

    return (
        <div>
        <h2>Create New Recipe</h2>
        <div className="bigbox">
            <form onSubmit={handleSubmitRecipe} method="post">
                <div className="recipeinput">
                    <label htmlFor="">Recipe Name: </label>
                    <input type="text" name="" id="" placeholder="" required  onChange={handleRecipeNameChange}/>
                </div>
                <div className="recipeinput">
                    <label htmlFor="">Prep Time: </label>
                    <input type="text" name="" id="" placeholder="" onChange={handlePrepTimeChange}/>
                </div>
                <div className="recipeinput">
                    <label htmlFor="recipeinput">Cook Time: </label>
                    <input type="text" name="" id="" placeholder="" required onChange={handleCookTimeChange}/>
                </div>
                <div className="bigtextarea">
                    <label htmlFor="">Ingredients: </label>
                    <textarea name="" id="" rows="7" cols="75" required onChange={handleIngredientsChange}></textarea>
                </div>
                <div className="bigtextarea">
                    <label htmlFor="">Instructions: </label>
                    <textarea name="" id="" rows="7" cols="75" required onChange={handleInstructionsChange}></textarea>
                </div>
                <div className="bigtextarea">
                    <label htmlFor="">Notes: </label>
                    <textarea name="" id="" rows="7" cols="75" onChange={handleNotesChange}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    )
}

export default Create;