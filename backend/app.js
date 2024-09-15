const sequelize = require('../database');
const express = require('express');
const { Sequelize } = require('sequelize');
const axios = require('axios');
const Ticker = require('./models/Ticker');
const tickerRoutes = require('./routes/tickerRoutes');


const app = express();

app.use(express.json());
app.use(express.static('frontend'));


app.use('/api/tickers', tickerRoutes);


sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Database sync error:', err));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

