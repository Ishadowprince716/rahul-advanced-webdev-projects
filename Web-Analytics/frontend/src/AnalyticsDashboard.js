import React, { useEffect, useState } from 'react';

function AnalyticsDashboard() {
  const [visitors, setVisitors] = useState(null);

  useEffect(() => {
    async function fetchAnalytics() {
      const res = await fetch('/api/visitors');
      const data = await res.json();
      setVisitors(data.count);
    }
    fetchAnalytics();
  }, []);

  return (
    <div>
      <h1>Web Analytics Dashboard</h1>
      <p>Current Visitors: {visitors ?? 'Loading...'}</p>
    </div>
  );
}

export default AnalyticsDashboard;
