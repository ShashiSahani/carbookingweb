
// controllers/carImageController.js


const CarImage =require('../models/CarImage')

exports.uploadImage=async(req,res)=>{
    try {
        
        const {imageUrl}=req.body;
        const newImage=new CarImage({imageUrl});
        const savedImage=await newImage.save();
        res.status(201).json(savedImage);
    } catch (error) {
        console.error("Error uploading image:",error);
        res.status(500).json({error :'Internal Server Error'})
    }
};

exports.fetchImage=async(req,res)=>{
    try {
        const images=await CarImage.find();
        res.status(200).json(images);        
    } catch (error) {
        console.log("Error fetching image",error);
        res.status(500).json({error:'Internal Server Error'});
    }
}