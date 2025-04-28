import { useState } from "react";

function Create() {

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
      
    }

    return (
        <div>
        <h2>Create New Recipe</h2>
        <div className="bigbox">
            <form onSubmit={handleSubmitRecipe}>
                <div className="recipeinput">
                    <label htmlFor="">Recipe Name: </label>
                    <input type="text" name="" id="" placeholder="" onChange={handleRecipeNameChange}/>
                </div>
                <div className="recipeinput">
                    <label htmlFor="">Prep Time: </label>
                    <input type="text" name="" id="" placeholder="" onChange={handlePrepTimeChange}/>
                </div>
                <div className="recipeinput">
                    <label htmlFor="recipeinput">Cook Time: </label>
                    <input type="text" name="" id="" placeholder="" onChange={handleCookTimeChange}/>
                </div>
                <div className="bigtextarea">
                    <label htmlFor="">Ingredients: </label>
                    <textarea name="" id="" rows="7" cols="75" onChange={handleIngredientsChange}></textarea>
                </div>
                <div className="bigtextarea">
                    <label htmlFor="">Instructions: </label>
                    <textarea name="" id="" rows="7" cols="75" onChange={handleInstructionsChange}></textarea>
                </div>
                <div className="bigtextarea">
                    <label htmlFor="">Notes: </label>
                    <textarea name="" id="" rows="7" cols="75" onChange={handleNotesChange}></textarea>
                </div>
                <button>Submit</button>
            </form>
            <div>
                <button >Upload Photo</button>
                <input type="file" name="" id="" />
            </div>
        </div>
    </div>
    )
}

export default Create;