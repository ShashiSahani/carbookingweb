// routes/imageCarRoutes.js

const express =require('express');
const router=express.Router();

const carImageController=require('../controllers/carImageController');

// Handle image upload
router.post('/up',carImageController.uploadImage);
// Fetch all images
router.get('/up',carImageController.fetchImage);

module.exports=router;