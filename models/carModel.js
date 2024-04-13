// backend/models/carModel.js
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
  SeatingCapacity: {
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
  rentPerHour: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const Car = mongoose.model('Car', carSchema);

module.exports = Car;

