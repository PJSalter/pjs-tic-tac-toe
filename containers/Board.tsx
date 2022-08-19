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

  function setSquareValue(index){

  }
  return (
    <div>
      <p>Hey {currentPlayer}, it is your turn</p>

      {Array(9)
        .fill(null)
        .map((_, i) => {
          return <Square key={i}
          onClick={() => setSquareValue(i)} 
          value={squares[i]/>;
        })}
    </div>
  );
}

export default Board;
