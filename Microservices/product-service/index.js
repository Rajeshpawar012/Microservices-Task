const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/products', (req, res) => {
  res.json([
    { id: 101, name: 'Laptop', price: 1200 },
    { id: 102, name: 'Smartphone', price: 800 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});

