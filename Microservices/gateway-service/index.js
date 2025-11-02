const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3003;

// Read service URLs from environment variables
const USER_SERVICE_URL = process.env.USER_SERVICE_URL || 'http://localhost:3000';
const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL || 'http://localhost:3001';
const ORDER_SERVICE_URL = process.env.ORDER_SERVICE_URL || 'http://localhost:3002';

app.use(express.json());

// Proxy to User Service
app.get('/gateway/users', async (req, res) => {
  try {
    const response = await axios.get(`${USER_SERVICE_URL}/users`);
    res.json(response.data);
  } catch (error) {
    console.error('Error contacting User Service:', error.message);
    res.status(500).json({ error: 'User Service unavailable' });
  }
});

// Proxy to Product Service
app.get('/gateway/products', async (req, res) => {
  try {
    const response = await axios.get(`${PRODUCT_SERVICE_URL}/products`);
    res.json(response.data);
  } catch (error) {
    console.error('Error contacting Product Service:', error.message);
    res.status(500).json({ error: 'Product Service unavailable' });
  }
});

// Proxy to Order Service
app.get('/gateway/orders', async (req, res) => {
  try {
    const response = await axios.get(`${ORDER_SERVICE_URL}/orders`);
    res.json(response.data);
  } catch (error) {
    console.error('Error contacting Order Service:', error.message);
    res.status(500).json({ error: 'Order Service unavailable' });
  }
});

app.listen(PORT, () => {
  console.log(`Gateway Service running on port ${PORT}`);
});
