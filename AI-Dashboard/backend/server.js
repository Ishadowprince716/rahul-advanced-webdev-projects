const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/stats', (req, res) => {
  res.json({ users: 150, forecast: 'Positive Growth' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
