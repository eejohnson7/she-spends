import React from 'react';
import BillCard from './BillCard';

function BillDateCard({ date, bills }) {
  const d = new Date(date);
  const day = d.getDate();
  const weekday = d.toLocaleDateString('en-US', { weekday: 'short' });
  const month = d.toLocaleDateString('en-US', { month: 'short' });

  return (
    <div className="flex bg-pink-100 rounded-xl shadow-md p-4 w-fit gap-4 items-center">
      {/* Date Section */}
    <div className="flex flex-col items-center justify-center w-16 text-pink-600">
        <div className="text-5xl font-bold leading-none">{day}</div>
            <div className="text-sm text-center mt-1 font-semibold">
            <div>{weekday}</div>
            <div>{month}</div>
        </div>
    </div>

      {/* BillCards Grid */}
      <div className="grid grid-cols-2 gap-2">
        {bills.map((bill, index) => (
          <BillCard
            key={index}
            category={bill.category}
            name={bill.service}
            amount={bill.amount}
          />
        ))}
      </div>
    </div>
  );
}

export default BillDateCard;
