const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());

app.get('/api/stats', (req, res) => {
  res.json({
    users: 150,
    forecast: 'Positive Growth',
    values: { labels: ['Jan', 'Feb', 'Mar'], data: [50, 60, 80] }
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
