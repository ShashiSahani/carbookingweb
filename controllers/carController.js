// backend/controllers/carController.js

const express =require('express');

const Car=require('../models/carModel');

const router =express.Router();



// router.get('/',async(req,res)=>{
//   try {
//     const cars=await Car.find();
//     console.log(cars,"All the data of data")
//     res.json(cars);
//   } catch (error) {
//     console.log("Error Fetchin Data",error);
//     res.status(500).json({error:"Internal Server Error"})
//   }
// })

// router.get('/:carId',async(req,res)=>{
//   try {
//     const car=await Car.findById(req.params.carId);
//     console.log(car,"car data with id");
//     if(!car){
//       return res.status(404).json({error:"Car not found"})
//     }
    
//     res.json(car)
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({error:"Internal Server Error"})
//   }
// })

// module.exports=router;