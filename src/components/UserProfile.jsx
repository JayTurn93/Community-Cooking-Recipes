import { useState } from "react";

function UserProfile() {
    const [profilePhoto, setProfilePhoto] = useState();
    const photoSelection = (e) => {
        setProfilePhoto(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div>
             <div className="profilearea">
                <h3>Account Settings</h3>
                <span className="profileleft">
                    <img className="profile-img" src={profilePhoto}/>
                    <input type="file" onChange={photoSelection} />
                </span>
                    <span className="profileright">
                        <span className="aboutuser">
                            <p>Username: ChefCooksAlot</p>
                            <p>About the chef: I love to cook and I cook a lot.</p>
                            <p>Favorite Ingredient: Onions!</p>
                            <p>Best Meal Ever: Beef Tartar @ Mushulu</p>
                        </span>
                    </span>
            </div>
            <div className="smallcontainer">
                <div className="smallrectangle">
                    <h3>Recipe Comments</h3>
                    <div>
                        <ul>
                            <li><a href="#">Simple But Delicious Meatloaf</a></li>
                            <li><a href="#">Cheesey Broccoli Chicken and Rice</a></li>
                            <li><a href="#">Chicken Fried Rice</a></li>
                        </ul>
                    </div>
                </div>
                <div className="smallrectangle">
                    <h3>Rated Recipes</h3>
                    <div>
                        <ul>
                            <li><a href="#">Simple But Delicious Meatloaf</a></li>
                            <li><a href="#">Cheesey Broccoli Chicken and Rice</a></li>
                            <li><a href="#">Chicken Fried Rice</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;