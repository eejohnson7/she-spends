import React from 'react';
import { FaPiggyBank } from 'react-icons/fa';

function SavingsCard({ label, amount, goal }) {
  const percentage = goal ? Math.min((amount / goal) * 100, 100) : null;

  return (
    <div className="w-[160px] h-[130px] bg-pink-200 border border-pink-300 rounded-md shadow-sm flex flex-col items-center justify-center text-pink-700 text-center px-2 py-3">
      <FaPiggyBank className="text-sm mb-1" />
      <div className="text-xl font-bold leading-tight">
        ${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
      </div>
      <div className="text-xs font-medium mt-1">{label}</div>

      {goal && (
        <div className="w-full mt-2">
          <div className="h-2 bg-pink-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-pink-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="text-[0.65rem] mt-1 font-medium text-pink-600">
            {Math.round(percentage)}% of ${goal.toLocaleString()}
          </div>
        </div>
      )}
    </div>
  );
}

export default SavingsCard;
