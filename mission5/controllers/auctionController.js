const AuctionItem = require('../models/auctions');

// Get all auction items
exports.getAllAuctionItems = async (req, res) => {
  try {
    const items = await AuctionItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search auction items by title
exports.searchAuctionItems = async (req, res) => {
  const searchTerm = req.query.title || '';
  try {
    const items = await AuctionItem.find({ title: new RegExp(searchTerm, 'i') });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new auction item
exports.addAuctionItem = async (req, res) => {
  const newItem = new AuctionItem({
    title: req.body.title,
    description: req.body.description,
    start_price: req.body.start_price,
    reserve_price: req.body.reserve_price
  });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an auction item
exports.deleteAuctionItem = async (req, res) => {
  try {
    const result = await AuctionItem.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Item not found' });
    } else {
      res.status(204).end();
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
