


export default function GameOver({winner,clickHandler}) {
  return (
    <div className='game-over'>
      <h1>GameOver !</h1>
     {winner && <h3>{winner.toUpperCase()} won!</h3>}
     {!winner && <h3>it&apos;s a draw!</h3>}
      
      <button onClick={clickHandler}>rematch</button>
    </div>
  );
}

