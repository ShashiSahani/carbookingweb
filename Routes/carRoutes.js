const express=require('express');

const router=express.Router();

const Car=require('../models/Car');

router.get('/',async(req,res)=>{
    try {
        const cars=await Car.find({});
        res.json(cars);

    } catch (error) {
        console.error("Error fetching cars:",error);
        res.status(500).json({error:"Internal server Error"});
    }
})

module.exports=router;