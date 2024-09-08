import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/database.js';
import urlRoutes from './routes/urlRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// app.use(express.static('public'));
app.use(cors());

app.use('/api', urlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});