import styled from "styled-components";
import { useEffect, useState } from "react";
import Square from "../components/Square";
type Player = "X" | "O" | "BOTH" | null;

function Board() {
  // create an array of nine elements
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  // set the winner at an origin value of null.
  const [winner, setWinner] = useState<Player>(null);

  //implementing the reset function.
  function reset() {
    //so I firstly need to reset the square so I will display set squares by default value.
    setSquares(Array(9).fill(null));
    // I need to set winner back to null.
    setWinner(null);
    //I need to choose a new current player.
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
  }

  function setSquareValue(index: number) {
    console.log(index);
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      } else {
        return val;
      }
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  // all the possible winnings.

  function calculateWinner(squares: Player[]) {
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

  useEffect(() => {
    const officialWinner = calculateWinner(squares);
    if (officialWinner) {
      setWinner(officialWinner);
    }

    if (!officialWinner && !squares.filter((square) => !square).length) {
      setWinner("BOTH");
    }
  }, [squares]);

  return (
    <div>
      <PlayerFate>Hey {currentPlayer}, it is your turn</PlayerFate>
      {winner && winner !== "BOTH" && (
        <PlayerFate>Congratulations {winner}</PlayerFate>
      )}
      {winner && winner === "BOTH" && (
        <PlayerFate>Congratulations you are both winners</PlayerFate>
      )}

      <GridStyling>
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
      </GridStyling>
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

const GridStyling = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: 6.3rem 6.3rem 10rem;
  grid-auto-flow: row;
  max-width: 19rem;
  margin-inline: auto;
`;

const RAINBOW_WIDTH = `calc(3em / 35)`;
const WEIGHT_THAT_RAINBOW_FONT = "700";
const RAINBOW_SPACE = `calc(1em / 8)`;
const FONT_COLOR = `white`;
const BACKGROUND_COLOR = `black`;
const RAINBOW_PADDING = `calc(${RAINBOW_WIDTH} / 2)`;

const PlayerFate = styled.p`
  // postcssPresetEnv({ stage: 0 })
  stroke-width: ${RAINBOW_WIDTH};
  font-weight: ${WEIGHT_THAT_RAINBOW_FONT};
  color: ${FONT_COLOR};
  text-align: center;
  font-size: 1.2rem;
  border-radius: 10rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 25rem;
  background-clip: text;
  background-image: linear-gradient(
    to right,
    #09f1b8,
    #00a2ff,
    #ff00d2,
    #fed90f
  );
  font-family: "Capriola", sans-serif;
  letter-spacing: ${RAINBOW_SPACE};
  padding: ${RAINBOW_PADDING};
  -webkit-text-stroke-color: transparent;
  background-color: ${BACKGROUND_COLOR};
`;
function calc(arg0: number, arg1: number) {
  throw new Error("Function not implemented.");
}
