import styled, { keyframes } from "styled-components";
type Player = "X" | "O" | "BOTH" | null;
// defining the props
function Square({
  value,
  onClick,
  winner,
}: {
  winner: Player;
  value: Player;
  onClick: () => void;
}) {
  if (!value) {
    // now this has a value for the user to click on the square once they select it.
    return (
      <PressTheSquare
        className="square"
        onClick={onClick}
        disabled={Boolean(winner)}
      />
    );
  }
  // the button now refers to value
  return (
    <PressTheSquare
      // className={`square_${value.toLowerCase}`}
      as={LowerLetter}
      disabled
    >
      {value}
    </PressTheSquare>
  );
}

export default Square;

const LowerLetter = (value: any) => (
  <PressTheSquare {...value}>{value.children.toLowerCase()}</PressTheSquare>
);

const PressTheSquare = styled.button`
  width: 100px;
  height: 100px;
  font-size: 5rem;
  color: #ffc0cb;
  background-color: #ae388b;
  border: solid 5px #b19cd9;
  /* padding: 1rem; */
  display: grid;
  place-items: center;

  &::before {
    content: "";
    display: block;
    grid-area: 1 / 1 / 2 / 2;
  }
`;
