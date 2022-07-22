import { getRecipes } from "../../services/RecipesClient";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import RecipeForm from "./RecipeForm";

export default function RecipeDetails() {
    let {id} = useParams()
    let [recipe, setRecipe] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
          const response = await getRecipes();
          let o = response.data.find(m => m.uuid === id)
          setRecipe(m => o);
        };
        fetchData();
      }, []);

    return(
        <div>
            {
                recipe ? <RecipeForm recipe={recipe}/> : <div>Loading...</div>
            }
        </div>
    )
}