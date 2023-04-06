export default function Square({handleClick, value, index, winner}) {
    return (
      <button className={winner ? 'square winner' : 'square'} onClick={() => handleClick(index)}>
        <span className={value && 'active'}>{value}</span>
      </button>
    )
  }