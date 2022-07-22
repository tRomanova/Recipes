import { useEffect, useState } from "react";
import { getRecipes } from "../../services/RecipesClient";
import RecipesTable from "./RecipesTable";

export default function Recipes() {
  let [recipies, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRecipes();
      setRecipes(m => response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      <RecipesTable data={recipies}/>
    </div>
  );
}
