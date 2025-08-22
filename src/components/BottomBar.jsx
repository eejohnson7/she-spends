import React from 'react';
import { FaPlus } from 'react-icons/fa';

const BottomBar = () => {
    
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-pink-100 py-4 shadow-card flex justify-center">
        <button 
            className="border-2 border-pink-700 text-pink-700 text-1xl p-3 rounded-xl"
            onClick={() => console.log("Plus button clicked.")}
            >
            <FaPlus />
        </button>
        </div>
    );
};

export default BottomBar;
