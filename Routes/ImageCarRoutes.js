//Routes/imageCarRoutes.js


const express = require('express');
const multer = require('multer');
const ImageCar = require('../models/ImageCar');

const router = express.Router();
const upload = multer();

// Route to handle image file upload
router.get('/up', async (req, res) => {
  console.log('GET /api/cars/up route hit');
  try {
    // Fetch cars from the database
    const cars = await ImageCar.find();
    res.status(200).json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
router.post('/up', upload.single('myFile'), async (req, res) => {
  console.log('POST /api/cars/up route hit');
  console.log("Requested file:",req.file);
  try {
    const { originalname, buffer } = req.file;

    // Create a new ImageCar document
    const newImageCar = new ImageCar({ 
      myFile: 
      {data:buffer,
       contentType: req.file.mimetype,
       },
       });

    // Save the document to the database
    await newImageCar.save();

    res.status(201).json({ message: 'Image Uploaded successfully' });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
