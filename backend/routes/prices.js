import express from 'express';
import axios from 'axios';

const pricesRoute = express.Router();

pricesRoute.get('/', async (req, res) => {
  try {
    const response = await axios.get(`https://www.goldapi.io/api/XAU/INR`, {
      headers: {
        'x-access-token': process.env.GOLD_API_KEY
      }
    });
    res.json({ gold: response.data.price, silver: response.data.silver });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch prices' });
  }
});

export default pricesRoute;