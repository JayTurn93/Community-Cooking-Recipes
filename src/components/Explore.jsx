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