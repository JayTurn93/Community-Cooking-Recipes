function Create() {
    return (
        <div>
        <h2>Create New Recipe</h2>
        <div className="bigbox">
            <form>
                <div className="recipeinput">
                    <label htmlFor="">Recipe Name: </label>
                    <input type="text" name="" id="" placeholder=""/>
                </div>
                <div className="recipeinput">
                    <label htmlFor="">Prep Time: </label>
                    <input type="text" name="" id="" placeholder=""/>
                </div>
                <div className="recipeinput">
                    <label htmlFor="recipeinput">Cook Time: </label>
                    <input type="text" name="" id="" placeholder=""/>
                </div>
                <div className="bigtextarea">
                    <label htmlFor="">Ingredients: </label>
                    <textarea name="" id="" rows="7" cols="75"></textarea>
                </div>
                <div className="bigtextarea">
                    <label htmlFor="">Instructions: </label>
                    <textarea name="" id="" rows="7" cols="75"></textarea>
                </div>
                <div className="bigtextarea">
                    <label htmlFor="">Notes: </label>
                    <textarea name="" id="" rows="7" cols="75"></textarea>
                </div>
                <button>Submit</button>
            </form>
            <div>
                <button>Upload Photo</button>
            </div>
        </div>
    </div>
    )
}

export default Create;