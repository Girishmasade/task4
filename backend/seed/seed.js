import mongoose from 'mongoose';
import Product from '../models/product'
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const products = [
      { name: 'Gold Ring', price: 500, description: 'A beautiful gold ring.', imageUrl: '/images/gold-ring.jpg' },
      { name: 'Silver Necklace', price: 300, description: 'A stunning silver necklace.', imageUrl: '/images/silver-necklace.jpg' },
      { name: 'Diamond Earrings', price: 1500, description: 'Elegant diamond earrings.', imageUrl: '/images/diamond-earrings.jpg' },
    ];

    await Product.insertMany(products);
    console.log('Products seeded!');
    mongoose.connection.close();
  })
  .catch(err => console.error(err));