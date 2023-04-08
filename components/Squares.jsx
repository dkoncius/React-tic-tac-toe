export default function Square({ value, onSquareClick, className }) {
  console.log(value)
  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  );
}
