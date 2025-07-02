const express = require('express');
const cors = require('cors'); // ✅ Import CORS
const cookieParser = require('cookie-parser');
const { ServerConfig, DbConfig } = require('./config');
const routes = require('../src/routes');

const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true, 
}));

app.use(cookieParser());
app.use(express.json());

app.use('/api', routes);


// connect server
const connectServer = async () => {
  try {
     console.log(ServerConfig.PORT);

  
    app.listen(ServerConfig.PORT, async () =>
    {
      await DbConfig.connectDataBase();
      console.log(`Server running at http://localhost:${ServerConfig.PORT}`)
    }
    );  
  } catch (error) {
    console.log(" Error starting server:", error);
  }
};

connectServer();
