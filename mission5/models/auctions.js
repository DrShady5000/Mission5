const mongoose = require('mongoose');

const auctionItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  start_price: { type: Number, required: true },
  reserve_price: { type: Number, required: true }
}, {
  collection: 'auctions', // Explicitly specify the collection name
  versionKey: false // Disable the __v field
});

const AuctionItem = mongoose.model('AuctionItem', auctionItemSchema);

module.exports = AuctionItem;