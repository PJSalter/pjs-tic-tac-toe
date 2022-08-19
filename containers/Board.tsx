// import Square from "../components/Square";
import { useState } from "react";

function Board() {
  // create an array of nine elements
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "0">(
    Math.round(Math.random() * 1) === 1 ? "X" : "0"
  );
  // set the winner at an origin value of null.
  const [winner, setWinner] = useState(null);
  return (
    <div>
      <p>Hey {currentPlayer}, it is your turn</p>
      This is the board
    </div>
  );
}

export default Board;
