import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Recipes from "./components/recepies/Recipes";
import RecipeDetails from "./components/recepies/RecipeDetails";

export default function App() {
  return (
    <div className="container">
      <nav>
        <Link to="recipes">Recipes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}
