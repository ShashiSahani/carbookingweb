const mongoose = require('mongoose');

function connectDB() {
  const dbURI = 'mongodb://127.0.0.1:27017/sheycars'; // Update with your MongoDB database name

  return mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log('MongoDB connection successfully!');
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err.message);
    throw err; // Re-throw the error to propagate it to the calling code
  });
}

module.exports = connectDB;
