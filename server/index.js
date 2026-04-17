const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const { testConnection } = require('./config/database');
const contactRouter = require('./routes/index');

const app = express();

// Middleware
app.use(cors()); // optional but safe
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'Node API is working 🎉',
    time: new Date().toISOString(),
  });
});

app.use('/api/contact', contactRouter);

// Fallback (optional)
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

const PORT = process.env.PORT || 5002;

const startServer = async () => {
  try {
    // Enable DB only when your config is ready
     await testConnection();

    app.listen(PORT, () => {
      console.log(`✅ Server running on http://127.0.0.1:${PORT}`);
      console.log(`Environment: ${config.nodeEnv}`);
    });
  } catch (err) {
    console.error('❌ Server startup failed:', err);
    process.exit(1);
  }
};

startServer();
