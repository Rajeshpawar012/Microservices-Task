const express = require('express');
const app = express();
const PORT = 3000;

app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }]);
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
