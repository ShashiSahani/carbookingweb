// models/CarImage.js


const mongoose=require('mongoose');


const carImageSchema=new mongoose.Schema({
    imageUrl:{
        type:String,
        require:true
    }
});


const CarImage=mongoose.model('CarImage',carImageSchema);

module.exports=CarImage;

