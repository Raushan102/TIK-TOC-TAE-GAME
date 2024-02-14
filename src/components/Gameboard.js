

export default function GameBoard({ buttonClickHAndler, board }) {
  return (
    <ol className="game_board">
      {board.map((row, indexRow) => (
        <li key={indexRow} className="game_board_list">
          <ol className="game_board_list_ol">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex} className="game_board_list_ol_li">
                <button
                  className="game_board_list_ol_li_button"
                  onClick={() => buttonClickHAndler(indexRow, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

