function UserProfile() {
    return (
        <div>
             <div className="profilearea">
                <h3>Account Settings</h3>
                <span className="profileleft">
                    <img className="profile-img" src="./public/photos/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector-1343007401.jpg" alt="Profile Picture"/>
                    <button>Edit Photo</button>
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