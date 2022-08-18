// import Square from "../components/Square";
import { useState } from "react";

function Board() {
  // create an array of nine elements
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "0">(
    Math.round(Math.random() * 1) === 1 ? "X" : "0"
  );
  return (
    <div>
      <p>Hey {currentPlayer}, it\s your turn</p>
      This is the board
    </div>
  );
}

export default Board;
