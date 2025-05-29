import { useState, useEffect } from "react";


function Explore() {
    const [protein, setProtein] = useState(null);
    const [vegetable, setVegetable] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (e) => {
        setIsChecked(!isChecked);
    };

    

    console.log(isChecked)
    return (
        <div>
            <h2>Search Recipes</h2>
                <div className="ingredientBox">
                    <div className="ingredientSelection">
                        <span>
                            <h3>Proteins</h3>
                            <form action="#" checked={isChecked} onChange={handleCheckboxChange}>
                                <input type="checkbox" name="protein" id="protein" value="Chicken"/>
                                <label className="explore" htmlFor="protein1">Chicken</label> 
                                <input type="checkbox" name="protein" id="protein" value="Ground Beef"/>
                                <label className="explore" htmlFor="protein2">Ground Beef</label> 
                                <input type="checkbox" name="protein" id="protein" value="Steak"/>
                                <label className="explore" htmlFor="protein3">Steak</label> 
                            </form>
                        </span>
                        <span>
                            <h3>Vegetables</h3>
                            <form action="#">
                                <input type="checkbox" name="vegetable1" id="vegetable1" value="Broccoli"/>
                                <label className="explore" htmlFor="vegetable1">Broccoli</label> 
                                <input type="checkbox" name="vegetable2" id="vegetable2" value="Peppers"/>
                                <label className="explore" htmlFor="vegetable2">Peppers</label> 
                                <input type="checkbox" name="vegetable3" id="vegetable3" value="Onions"/>
                                <label className="explore" htmlFor="vegetable3">Onions</label>
                            </form>
                        </span>
                        <span>
                            <h3>Dry Items</h3>
                            <form action="#">
                                <input type="checkbox" name="dry1" id="dry1" value="Rice"/>
                                <label className="explore" htmlFor="dry1">Rice</label> 
                                <input type="checkbox" name="dry2" id="dry2" value="Potatoes"/>
                                <label className="explore" htmlFor="dry2">Potatoes</label> 
                                <input type="checkbox" name="dry3" id="dry3" value="Noodles"/>
                                <label className="explore" htmlFor="dry3">Noodles</label> 
                            </form>
                        </span>
                        <span>
                            <h3>Dairy</h3>
                            <form action="#">
                                <input type="checkbox" name="dairy1" id="dairy1" value="Eggs"/>
                                <label className="explore" htmlFor="dairy1">Eggs</label> 
                                <input type="checkbox" name="dairy2" id="dairy2" value="Milk"/>
                                <label className="explore" htmlFor="dairy2">Milk</label> 
                                <input type="checkbox" name="dairy3" id="dairy3" value="Butter"/>
                                <label className="explore" htmlFor="dairy3">Butter</label> 
                            </form>
                        </span>
                    </div>
                </div>
            <div className="smallcontainer">
                <div className="smallrectangle">
                    <h2>Recipe Results</h2>
                </div>
                <div className="smallrectangle">
                        <h2>Other Ideas</h2>
                    </div>
                </div>
        </div>
    )
}

export default Explore;