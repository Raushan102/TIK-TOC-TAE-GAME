

export default function Log({ turns }) {
    return (
      <ol className="footer_ol">
        {turns.map((ele) => (
          <li key={`${ele.square.row} . ${ele.square.col}`} id="footer_ol_li">
            {ele.square.row} {''} {ele.square.col} {'selected'} {ele.player}
          </li>
        ))}
      </ol>
    );
  }
  
