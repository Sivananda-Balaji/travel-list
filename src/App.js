import React, { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  const handleItems = (item) => {
    setItems([...items, item]);
  };

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  const handleUpdate = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  };

  const handleDeleteAll = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete all items ?"
    );
    if (confirm) {
      setItems([]);
    }
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDelete}
        onUpdateItems={handleUpdate}
        onDeleteAll={handleDeleteAll}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
