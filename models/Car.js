// backend/models/Car.js
const mongoose = require('mongoose'); // Adjust the path if needed

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
  },
  fuelType: {
    type: String,
  },
  bookedTimeStols: [
    {
      from: { type: String, required: true },
      to: { type: String, required: true }
    }
  ],
  rentPerHou: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
