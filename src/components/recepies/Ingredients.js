export default function Ingredients({ ingredients }) {
  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Measurement</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((m, i) => {
            return (
              <tr key={i}>
                <td>
                    {m.name}
                </td>
                <td>{m.measurement}</td>
                <td>{m.amound}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
