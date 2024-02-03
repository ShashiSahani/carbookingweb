//models/ ImageCar.js

const mongoose=require('mongoose')

const ImageCarSchema=mongoose.Schema({
    myFile:{
        data: Buffer, // Use Buffer type for binary data
        contentType: String,
    }
})
const ImageCar=mongoose
.model('ImageCar',ImageCarSchema)
module.exports=ImageCar;


