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

  // function setSquareValue(index) {
  //   console.log(index);
  //   const newData = squares.map((val, i) => {
  //     if (i === index) {
  //       return currentPlayer;
  //     } else {
  //       return val;
  //     }
  //   });
  //   setSquares(newData);
  //   setCurrentPlayer(currentPlayer === "X" ? "0" : "X");
  // }

  // all the possible winnings.

  function calculateWinner(squares) {
    // this shows all the possible wins from a player.
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      // then getting each property from each line.
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
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
