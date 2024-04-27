//routes/bookingRoute.js

const express = require("express");
const router = express.Router();

const Booking = require("../models/bookingModel");

router.post("/bookcar", async (req, res) => {
  req.body.transactionId = "1234"; // Hardcoded transactionId

  try {
    const booking = new Booking(req.body);
    console.log(booking, "booking");
    await booking.save();
    res.status(200).json({ message: "Booking successful" });
  } catch (error) {
    console.log("Booking failed", error);
    res.status(500).json({ message: "Booking failed" });
  }
});
module.exports = router;