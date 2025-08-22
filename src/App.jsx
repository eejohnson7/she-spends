import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddTransaction from './pages/AddTransaction';
import Settings from './pages/Settings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add" element={<AddTransaction />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
  );
}

export default App;
