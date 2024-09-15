const express = require('express');
const axios = require('axios');
const Ticker = require('../models/Ticker');
const router = express.Router();

router.get('/fetch', async (req, res) => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    
    const tickers = Object.values(response.data).slice(0, 10);

    
    await Ticker.destroy({ where: {}, truncate: true });

    
    for (let ticker of tickers) {
      await Ticker.create({
        name: ticker.name,
        last: ticker.last,
        buy: ticker.buy,
        sell: ticker.sell,
        volume: ticker.volume,
        base_unit: ticker.base_unit,
      });
    }

    res.status(200).send('Top 10 tickers stored successfully.');

  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});


router.get('/', async (req, res) => {
  try {
    const tickers = await Ticker.findAll();
    res.status(200).json(tickers);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

module.exports = router;
