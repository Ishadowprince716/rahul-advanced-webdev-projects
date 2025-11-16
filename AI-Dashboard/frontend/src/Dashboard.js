import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      const response = await fetch('/api/stats');
      const data = await response.json();
      setStats(data);
    }
    fetchStats();
  }, []);

  useEffect(() => {
    if(stats && stats.values){
      const ctx = document.getElementById('statsChart');
      if(ctx){
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: stats.values.labels,
            datasets: [{
              label: 'Data',
              data: stats.values.data,
            }]
          }
        })
      }
    }
  }, [stats]);

  if (!stats) return <div>Loading...</div>;

  return (
    <div>
      <h1>AI Dashboard</h1>
      <p>Users: {stats.users}</p>
      <p>Forecast: {stats.forecast}</p>
      <canvas id="statsChart" width="400" height="100"></canvas>
    </div>
  );
}

export default Dashboard;
