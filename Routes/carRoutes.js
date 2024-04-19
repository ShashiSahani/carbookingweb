//backend/Routes/CarRoutes.js

const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const Car = require("../models/carModel");
const { error } = require("console");

// Set up static file serving for images
router.use("/images", express.static(path.join(__dirname, "../upload/images")));

// Set up multer storage
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB file size limit
  },
});
// Error handler for multer errors
function errHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    res.json({
      success: 0,
      message: err.message,
    });
  }
}


// Route to handle image upload
router.post("/upload", upload.single("profile"), (req, res) => {
  res.json({
    success: 1,
    profile_url: `http://localhost:5000/images/${req.file.filename}`,
  });
});


// Get all cars
router.get("/", async (req, res) => {
  try {
    const cars = await Car.find({});
    console.log("Cars", cars);
    res.json(cars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ error: "Internal server Error" });
  }
});

// Get car by ID
router.get("/:carId", async (req, res) => {
  try {
    const car = await Car.findById(req.params.carId);
    console.log("Car details by id:", car);
    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }
    res.json(car);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
});

// Create a new car
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, SeatingCapacity, fuelType, bookedTimeStols, rentPerHour } = req.body;

    const image = req.file.filename;
    const imageUrl = `http://${req.headers.host}/images/${image}`;

    const newCar = new Car({
      name,
      image: imageUrl,
      SeatingCapacity,
      fuelType,
      bookedTimeStols,
      rentPerHour,
    });

    const savedCar = await newCar.save();
    res.status(201).json({ savedCar, imageUrl });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "Internal server Error" });
  }
});

router.delete("/:carId", async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.carId);
    if (!deletedCar) {
      return res.status(404).json({ error: "Car not found" });
    }
    res.json({ message: "Car deleted successfully", deletedCar });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:carId", async (req, res) => {
  try {
    const { name, SeatingCapacity, fuelType, bookedTimeStols, rentPerHour } = req.body;
    const updatedCar = await Car.findByIdAndUpdate(
      req.params.carId,
      {
        name,
        SeatingCapacity,
        fuelType,
        bookedTimeStols,
        rentPerHour,
      },
      { new: true }
    );
    if (!updatedCar) {
      return res.status(404).json({ error: "Car not Found" });
    }
    res.json({ message: "Car updated successfully", updatedCar });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
