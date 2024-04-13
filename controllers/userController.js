// controllers/userController.js


const user=require('../models/userModel');


exports.getAllUser=async(req,res)=>{
    try {
        const user=await user.findById(req.params.userId);

        if (user.length === 0) {
            return res.status(404).json({ message: 'No user found in the database.' });
          }
          res.json(user);
    } catch (error) {
       console.error(error);
       res.status(500).json({error:"Internal Server error"})
    }
}