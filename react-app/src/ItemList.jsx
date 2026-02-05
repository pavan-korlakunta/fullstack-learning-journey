export default function ItemList({ items, onRemove }) {
  if (items.length === 0) {
    return <p className="empty">Your list is empty.</p>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button className="btn secondary" onClick={() => onRemove(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
