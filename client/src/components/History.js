import React, { useState, useEffect } from 'react';
import axios from 'axios';

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch the history from your API
    axios.get('/api/history')
      .then((response) => {
        setHistory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // The empty array causes this effect to only run on mount

  return (
    <div>
      <h2>Monitoring History</h2>
      {/* Render your history items here */}
    </div>
  );
}

export default History;
