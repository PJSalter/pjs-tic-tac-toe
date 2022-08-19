// defining the props
function Square({
  value,
  onClick,
  winner,
}: {
  winner: string | null;
  value: string | null;
  onClick: () => void;
}) {
  if (!value) {
    return <button disabled={Boolean(winner)} />;
  }
  return <button>This is a square</button>;
}

export default Square;
