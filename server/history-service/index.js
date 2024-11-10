const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const historyRoutes = require('./routes/historyRoutes');

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.DB_URI_HISTORY)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error));

app.use('/history', historyRoutes);


const PORT = process.env.PORT || 3007;
app.listen(PORT, () => console.log(`History Service running on port ${PORT}`));
