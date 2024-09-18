const mongoose = require('mongoose');
const Auction = require('../models/auctionItem');
const data = require('../data/auctions.json');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/auctionDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

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
