// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-semibold mb-8">Admin Dashboard</h2>
      <ul>
        {/* <li className="mb-4">
          <Link to="/" className="hover:text-gray-400">Dashboard</Link>
        </li> */}
        <li className="mb-4">
          <Link to="/users" className="hover:text-gray-400">Users</Link>
        </li>
        <li className="mb-4">
          <Link to="/reports" className="hover:text-gray-400">Reports</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
