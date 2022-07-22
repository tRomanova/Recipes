import { useForm } from "react-hook-form";
import Ingredients from "./Ingredients";
import Directions from "./Directions";

export default function RecipeForm({ recipe }) {
  const { register } = useForm({
    defaultValues: recipe,
  });

  return (
    <div>
      <h1>Recipe details</h1>
      <form>
        <div className="mb-3">
        <img src={`http://localhost:3001/${recipe.images.medium}`}></img>          
        </div>

        <div className="mb-3">
          <label htmlFor="title">Title:</label>
          <input
            className="form-control"
            type="text"
            {...register("title", { required: true })}
            placeholder="recipe title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description">Description:</label>
          <input
            className="form-control"
            type="text"
            {...register("description", { required: true })}
            placeholder="recipe description"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="servings">Servings:</label>
          <input
            className="form-control"
            type="text"
            {...register("servings", { required: true })}
            placeholder="servings"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="prepTime">Preparation Time:</label>
          <input
            className="form-control"
            type="text"
            {...register("prepTime", { required: true })}
            placeholder="prepTime"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cookTime">Cooking Time:</label>
          <input
            className="form-control"
            type="text"
            {...register("cookTime", { required: true })}
            placeholder="cookTime"
          />
        </div>

        <div className="mb-3">
            <Ingredients ingredients={recipe.ingredients}/>
        </div>

        <div className="mb-3">
            <Directions directions={recipe.directions}/>
        </div>
      </form>
    </div>
  );
}
