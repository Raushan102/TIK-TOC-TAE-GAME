import "./App.css";
import Players from "./components/Player";
import GameBoard from "./components/Gameboard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/wining";
import GameOver from "./components/GameOver";

function deriveGameTurns(previousTurn) {
  let cPlayer = "X";

  if (previousTurn.length > 0 && previousTurn[0].player === "X") {
    cPlayer = "O";
  }

  return cPlayer;
}

let initGameBoardArray = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [players, setPlayers] = useState({
    X: "player 1",
    O: "player 2",
  });

  const [gameTurns, setGameTurn] = useState([]);

  let gameBoard = [...initGameBoardArray.map((ele) => [...ele])];

  for (let turn of gameTurns) {
    let { square, player } = turn;
    let { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winPlayer;

  for (let combination of WINNING_COMBINATIONS) {
    let firstCombination = gameBoard[combination[0].row][combination[0].column];
    let secondCombination =
      gameBoard[combination[1].row][combination[1].column];
    let thirdCombination = gameBoard[combination[2].row][combination[2].column];

    if (
      firstCombination &&
      firstCombination === secondCombination &&
      secondCombination === thirdCombination
    ) {
      winPlayer = players[firstCombination];
    }
  }

  let isActive = deriveGameTurns(gameTurns);

  let isDraw = gameTurns.length === 9 && !winPlayer;

  function onClickHandler(rowIndex, colIndex) {
    setGameTurn((prevTurn) => {
      let currentPlyer = deriveGameTurns(prevTurn);

      let corrTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlyer },
        ...prevTurn,
      ];

      return corrTurn;
    });
  }

  function rematchHandler() {
    setGameTurn([]);
  }

  function player_Name_Handler(symbol, newName) {
    setPlayers((prePlayers) => {
      console.log(symbol, newName);
      return {
        ...prePlayers,
        [symbol]: newName,
      };
    });
  }
  return (
    <>
      <main id="main">
        <div id="Player_detail_container">
          <ul className="players_order_list">
            <Players
              name="player 1"
              symbol="X"
              isActive={isActive === "X"}
              onChangePlayerName={player_Name_Handler}
            />
            <Players
              name="player 2"
              symbol="O"
              isActive={isActive === "O"}
              onChangePlayerName={player_Name_Handler}
            />
          </ul>
        </div>

        {(winPlayer || isDraw) && (
          <GameOver winner={winPlayer} clickHandler={rematchHandler} />
        )}

        <GameBoard
          buttonClickHAndler={onClickHandler}
          active_Player_Symbol={isActive}
          board={gameBoard}
        />
      </main>
      <footer className="footer_squareAllDetail">
        <Log turns={gameTurns} />
      </footer>
    </>
  );
}

export default App;
