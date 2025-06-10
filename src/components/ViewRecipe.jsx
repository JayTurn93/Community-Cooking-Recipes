import recipes from "../data/recipes"

function ViewRecipe() {
  return (
    <div>
      <div className="bigbox">
        <div>
          <ul  key={recipes.id}>
            {recipes.map((thisRecipe) => 
            <ul>
              <h1>{thisRecipe.name}</h1>
                <img className="recipePhoto" src={thisRecipe.imageUrl} alt="Food Photo" />
                <span><h3>Ingredients</h3>{thisRecipe.ingredients}</span>
                <span><h3>Instructions</h3>{thisRecipe.instructions}</span>
                <span><h3>Notes</h3>{thisRecipe.notes}</span>
            </ul>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ViewRecipe;