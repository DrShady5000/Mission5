const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');
const auctionRoutes = require('./routes/auctionRoutes');

dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api/auctions', auctionRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
