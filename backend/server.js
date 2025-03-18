import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './Dabase/DB.js';
import pricesRoute from './routes/prices.js'
import authRoute from './routes/auth.js'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB()
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use('/api/auth', authRoute); 
app.use('/api/prices', pricesRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});