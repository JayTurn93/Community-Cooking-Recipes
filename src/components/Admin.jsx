import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [recipeCollection, setRecipeCollection] = useState([]);
  const { _id } = useParams();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const deleteUrl = `${API_BASE_URL}/api/recipes/delete/`;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/recipes`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        const recipes = data.data.recipes;
        setRecipeCollection(recipes);
      })
      .catch(console.error);
  }, [API_BASE_URL]);
  console.log(recipeCollection);

  const deleteRecipe = () => {
    fetch(`${deleteUrl}${_id}`, { method: "DELETE" })
      .then(console.log("successful"))
      .catch(console.log("unsuccessful"));
  };
    const handleLogout = (e) => {
    fetch(`${API_BASE_URL}/auth/logout`, {method: "GET"})
    .then(navigate("/"))
    .catch(console.error)
  }

  return (
    <div>
      <span><button onClick={handleLogout}>Logout</button></span>
      <div className="bigbox">
        <span>
          <Link to="/create">
            <button>PREARE NEW MEAL</button>
          </Link>
        </span>
        <table>
          <thead>
            <tr>
              <th className="adminhead">RECIPE</th>
              <th className="adminhead">EDIT</th>
              <th className="adminhead">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {recipeCollection.map((recipe) => (
              <tr key={recipe._id}>
                <td>{recipe.name}</td>
                <td>
                  <Link to={`/update/${recipe._id}`}>
                    <button class="fa-solid fa-pen-to-square"></button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={deleteRecipe}
                    class="fa-solid fa-trash-can"
                  ></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
