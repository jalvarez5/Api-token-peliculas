const mongoose = require('mongoose');
const dotenv = require('dotenv');
const MONGO_URI='mongodb+srv://<jalvarez54>:<1234jose>@cluster0.lqbuj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
dotenv.config({ path: './config.env' });

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
