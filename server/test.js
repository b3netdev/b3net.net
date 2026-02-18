const express = require('express');

const app = express();
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'Node API is working 🎉',
    time: new Date().toISOString(),
  });
});

app.post('/api/test', (req, res) => {
  res.json({ success: true, received: req.body });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Test API running on http://127.0.0.1:${PORT}`);
});
