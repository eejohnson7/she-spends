import React from 'react';
import { FaFilm, FaBolt } from 'react-icons/fa'; // Example icons

function getCategoryIcon(category) {
  switch (category) {
    case 'Entertainment':
      return <FaFilm className="text-pink-600 text-sm mr-1" />;
    case 'Utilities':
      return <FaBolt className="text-pink-600 text-sm mr-1" />;
    default:
      return null;
  }
}

function BillCard({ category, name, amount }) {
  return (
    <div className="w-[160px] h-[60px] border border-pink-300 bg-pink-200 rounded-md px-2 py-1 flex flex-col justify-between text-pink-600 text-xs">
      <div className="leading-tight flex items-center">
        {getCategoryIcon(category)}
        <div className="font-medium truncate">{category}</div>
      </div>
      <div className="text-[0.65rem] truncate">{name}</div>
      <div className="text-right text-sm font-semibold">
        ${amount.toFixed(2)}
      </div>
    </div>
  );
}

export default BillCard;
