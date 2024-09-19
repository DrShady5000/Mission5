const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Auction = require('../models/auctionItem');
const data = require('../data/auctions.json');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB using URI from environment variables
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('Error connecting to MongoDB:', err));

// Seed data into MongoDB
const seedData = async () => {
  try {
    await Auction.deleteMany(); // Clear existing data
    await Auction.insertMany(data); // Insert seed data
    console.log('Data seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

seedData();

