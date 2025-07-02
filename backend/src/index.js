const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { ServerConfig, DbConfig } = require('./config');
const routes = require('../src/routes');

const app = express();

// ✅ CORS setup
app.use(cors({
  origin: "https://helpdeskassign.netlify.app", // Frontend origin
  credentials: true, // Allow cookies, headers, etc.
}));

// ✅ Middleware
app.use(cookieParser());
app.use(express.json()); // Parse JSON body

// ✅ API routes
app.use('/api', routes);

// ✅ Start server & connect DB
const connectServer = async () => {
  try {
    console.log("Starting server on port:", ServerConfig.PORT);

    app.listen(ServerConfig.PORT, async () => {
      await DbConfig.connectDataBase();
      console.log(`🚀 Server running at http://localhost:${ServerConfig.PORT}`);
    });

  } catch (error) {
    console.error("❌ Error starting server:", error.message);
  }
};

connectServer();
