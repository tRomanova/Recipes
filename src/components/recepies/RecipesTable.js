import {Link } from "react-router-dom";

export default function RecipesTable({ data }) {
  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((m, i) => {
            return (
                <tr key={i}>
                  <td><Link to={`/recipe/${m.uuid}`}>{m.title}</Link></td>
                  <td>{m.description}</td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
