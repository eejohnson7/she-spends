import React from 'react';
import { FaDollarSign } from 'react-icons/fa';

function SummaryCard({ label, amount }) {
  return (
    <div className="w-[160px] h-[100px] bg-pink-200 border border-pink-300 rounded-md shadow-sm flex flex-col items-center justify-center text-pink-700 text-center px-2 py-3">
      <FaDollarSign className="text-sm mb-1" />
      <div className="text-xl font-bold leading-tight">${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
      <div className="text-xs font-medium mt-1">{label}</div>
    </div>
  );
}

export default SummaryCard;
