import React, { useState } from 'react';
import { FaBars, FaCog, FaUserCircle } from 'react-icons/fa';

const TopBar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center bg-pinky-50 px-5 py-3 shadow-card">
        <FaBars 
          className="text-pink-700 text-3xl cursor-pointer" 
          onClick={() => setShowModal(true)}
        />
        <div className="flex itemskcenter gap-4">
          <FaCog
            className="text-pink-700 text-3xl cursor-pointer"
            onClick={() => setShowModal(true)}
          />
          <FaUserCircle 
            className="text-pink-700 text-3xl cursor-pointer" 
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
            <p className="text-sm text-gray-600 mb-6">This is a sample modal popup.</p>
            <button
              className="bg-pink-400 text-white px-4 py-2 rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TopBar;
