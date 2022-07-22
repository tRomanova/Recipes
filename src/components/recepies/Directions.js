export default function Directions({ directions }) {
  return (
    <div>
        <h3>Instructions</h3>
      <p>{directions.map((m, i) => {
        return(
           <p key={i}>{m.instructions}</p> 
        )
      })}</p>
         {/* <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Instructions</th>
                </tr>
            </thead>
            <tbody>
            {directions.map((m, i) => {
            return (
              <tr key={i}>
                <td>{m.instructions}</td>
              </tr>
            );
          })}
            </tbody>
         </table> */}
      
          {/* {directions.map((m, i) => {
            return (
              <tr key={i}>
                <td>{m.instructions}</td>
              </tr>
            );
          })} */}
     
    </div>
  );
}
