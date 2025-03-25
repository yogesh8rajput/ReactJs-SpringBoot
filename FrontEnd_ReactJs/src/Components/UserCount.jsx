// src/components/UserCount.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserCount = () => {
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user count from the API
    axios.get('http://localhost:8090/user/count') 
      .then(response => {
        setUserCount(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user count', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='grid place-items-center h-1/4 border-2'>

    <div className="bg-white shadow-lg p-6 rounded-lg h-fit grid place-items-center w-fit">
      <h3 className="text-xl font-medium">Total Users</h3>
      {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
            <p className="text-3xl font-semibold text-blue-600">{userCount}</p>
        )}
        </div>
    </div>
  );
};

export default UserCount;
