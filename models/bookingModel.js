const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cars',
  },
  totalHours: {
    type: Number,
  }, 
  totalAmout: {
    type: Number,
  },
  driverRequired: {
    type: Boolean,
  },
  transactionId: {
    type: String,
  },
  bookTimeSlots: [
  {  from: {
      type: String,
    },
    to: {
      type: String,
    }}
  ]
}, { timestamps: true });

// Use mongoose.model to define the model
const bookingModel = mongoose.model('booking', bookingSchema); // Make sure 'booking' matches your collection name in the database

module.exports = bookingModel;
