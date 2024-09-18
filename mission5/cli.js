const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

// MongoDB connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'auctionDB';

// Load the data file
const dataFilePath = path.join(__dirname, 'data', 'auctions.json');

async function seedData() {
    try {
        // Connect to MongoDB
        const client = new MongoClient(url);
        await client.connect();
        console.log('Connected to MongoDB');
        
        const db = client.db(dbName);
        const collection = db.collection('auctions');
        
        // Read data from file
        const data = fs.readFileSync(dataFilePath);
        const items = JSON.parse(data);

        // Insert data into MongoDB
        await collection.insertMany(items);
        console.log('Data seeded successfully');

        // Close the connection
        await client.close();
    } catch (error) {
        console.error('Error seeding data:', error);
    }
}

async function deleteData() {
    try {
        // Connect to MongoDB
        const client = new MongoClient(url);
        await client.connect();
        console.log('Connected to MongoDB');
        
        const db = client.db(dbName);
        const collection = db.collection('auctions');

        // Delete all data from the collection
        await collection.deleteMany({});
        console.log('Data deleted successfully');

        // Close the connection
        await client.close();
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}

// Command-line arguments
const command = process.argv[2];

if (command === 'seed') {
    seedData();
} else if (command === 'delete') {
    deleteData();
} else {
    console.log('Usage: node cli.js [seed|delete]');
}
