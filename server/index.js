const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const campaignRoutes = require("./routes/campaign");
const emailRoutes = require("./routes/email")

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors()); // Enables CORS for all origins

// Routes
app.use('/auth', authRoutes);
app.use("/campaigns", campaignRoutes);
app.use("/users", emailRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
