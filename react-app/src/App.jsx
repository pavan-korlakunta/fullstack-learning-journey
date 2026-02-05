import { useState, useEffect } from "react";
import "./App.css";
import ItemList from "./ItemList";
import ActionButton from "./ActionButton";

export default function App() {
  const [items, setItems] = useState(() => {
  const saved = localStorage.getItem("items");
  return saved ? JSON.parse(saved) : [];
});
  const [input, setInput] = useState("");

  function addItem() {
    if (input.trim() === "") return;
    setItems([...items, input.trim()]);
    setInput("");
  }

  function clearItems() {
    setItems([]);
  }

  function removeItem(index) {
  const nextItems = items.filter((_, i) => i !== index);
  setItems(nextItems);
  }

  useEffect(() => {
  localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="app">
      <h1>My React Shopping List</h1>

      <div className="row">
        <input
          type="text"
          placeholder="Add item..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addItem();
          }}
        />
        <ActionButton label="Add" onClick={addItem} />
        <ActionButton label="Clear" onClick={clearItems} type="secondary" />
      </div>

      <ItemList items={items} onRemove={removeItem} />

    </div>
  );
}
