// import Square from "../components/Square";
import { useState } from "react";
import Square from "../components/Square";

function Board() {
  // create an array of nine elements
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "0">(
    Math.round(Math.random() * 1) === 1 ? "X" : "0"
  );
  // set the winner at an origin value of null.
  const [winner, setWinner] = useState(null);

  //implementing the reset function.
  function reset() {
    //so I firstly need to reset the square so I will display set squares by default value.
    setSquares(Array(9).fill(null));
    // I need to set winner back to null.
    setWinner(null);
    //I need to choose a new current player.
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "0");
  }

  function setSquareValue(index) {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      } else {
        return val;
      }
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "0" : "X");
  }

  return (
    <div>
      <p>Hey {currentPlayer}, it is your turn</p>
      <div className="gridStyling">
        {Array(9)
          .fill(null)
          .map((_, i) => {
            return (
              <Square
                winner={winner}
                key={i}
                onClick={() => setSquareValue(i)}
                value={squares[i]}
              />
            );
          })}
      </div>
      <button className="reset" onClick={reset}>
        RESET
      </button>
    </div>
  );
}

{
  /*disable the square if there is a winner or not once on on-selective.*/
}

export default Board;
