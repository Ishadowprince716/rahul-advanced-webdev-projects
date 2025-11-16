import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      // Example fetch from local backend
      const response = await fetch('/api/stats');
      const data = await response.json();
      setStats(data);
    }
    fetchStats();
  }, []);

  if (!stats) return <div>Loading...</div>;

  return (
    <div>
      <h1>AI Dashboard</h1>
      <p>Users: {stats.users}</p>
      <p>Forecast: {stats.forecast}</p>
    </div>
  );
}

export default Dashboard;
