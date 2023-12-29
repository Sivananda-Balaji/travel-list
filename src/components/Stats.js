import React from "react";

const Stats = ({ items }) => {
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </p>
    );
  }
  const numItems = items.length;
  const packedItems = items.reduce((acc, curr) => {
    if (curr.packed) {
      acc += 1;
    }
    return acc;
  }, 0);
  const percentage = Math.floor((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        💼 You have {numItems} items on the list, and you already packed{" "}
        {packedItems} ({!percentage ? 0 : percentage}%)
      </em>
    </footer>
  );
};

export default Stats;
