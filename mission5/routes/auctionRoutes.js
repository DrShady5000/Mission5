const express = require('express');
const router = express.Router();
const {
  getAllAuctionItems,
  searchAuctionItems,
  addAuctionItem,
  deleteAuctionItem
} = require('../controllers/auctionController');

// Routes
router.get('/', getAllAuctionItems);
router.get('/search', searchAuctionItems);
router.post('/', addAuctionItem);
router.delete('/:id', deleteAuctionItem);

module.exports = router;
