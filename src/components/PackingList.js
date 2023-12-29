import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItems, onUpdateItems, onDeleteAll }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }
  if (sortBy === "packed") {
    sortedItems = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );
  }
  const renderItems = sortedItems.map((item) => {
    return (
      <Item
        item={item}
        key={item.id}
        onDeleteItems={onDeleteItems}
        onUpdateItems={onUpdateItems}
      />
    );
  });
  return (
    <div className="list">
      <ul>{renderItems}</ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed</option>
        </select>
        <button onClick={onDeleteAll}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
