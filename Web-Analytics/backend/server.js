const express = require('express');
const app = express();

app.get('/api/visitors', (req, res) => {
  res.json({ count: 12 });
});

app.listen(5000, () => console.log('Analytics backend running'));
