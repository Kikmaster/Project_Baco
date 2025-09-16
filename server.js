require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

// Serve static site
app.use(express.static(path.join(__dirname)));

// Proxy Alpha Vantage
app.get('/api/alpha', async (req, res) => {
  const symbol = req.query.symbol;
  const apikey = process.env.ALPHA_VANTAGE_KEY;
  if(!apikey) return res.status(500).json({ error: 'Server missing ALPHA_VANTAGE_KEY' });
  if(!symbol) return res.status(400).json({ error: 'Missing symbol' });
  try {
    const avSym = symbol.includes(':') ? symbol.split(':')[1] : symbol;
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${avSym}&outputsize=compact&apikey=${apikey}`;
    const r = await axios.get(url);
    res.json(r.data);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
});

// Proxy News (NewsData.io or NewsAPI)
app.get('/api/news', async (req, res) => {
  const q = req.query.q || '';
  const apikey = process.env.NEWSDATA_KEY;
  if(!apikey) return res.status(500).json({ error: 'Server missing NEWSDATA_KEY' });
  try {
    const url = `https://newsdata.io/api/1/news?apikey=${apikey}&language=en&q=${encodeURIComponent(q)}`;
    const r = await axios.get(url);
    res.json(r.data);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, ()=>{
  console.log(`Server running on http://localhost:${PORT}`);
});
