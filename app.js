const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Docker!</h1>');
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// ✅ FIX: Only run server if NOT in test
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
