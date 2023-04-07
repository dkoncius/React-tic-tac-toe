export default function ToggleButtons({currentMove, setCurrentMove, history}) {
  return (
    <div className="toggle-buttons">
        <button onClick={() => currentMove > 0 && setCurrentMove(currentMove - 1)}>
            ← Undo
        </button>
        <button onClick={() => currentMove < history.length - 1 && setCurrentMove(currentMove + 1)}>
            Redo →
        </button>
    </div>
  )
}
