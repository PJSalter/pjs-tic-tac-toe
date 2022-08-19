type Player = "X" | "0" | null;
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
    return <button onClick={onClick} disabled={Boolean(winner)} />;
  }
  // the button now refers to value
  return <button disabled>{value}</button>;
}

export default Square;
