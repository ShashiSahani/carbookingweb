// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const User = require("../models/userModel"); 

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body)
    try {
      const user = await User.findOne({ username ,password});
      if (user) {
        res.send(user);

      } else {
        res.status(400).json({ error: "Invalid username or password" });
      }
      console.log("Login request handled successfully");

    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


  router.post("/register", async (req, res) => {
    try {
      const existingUser=await User.findOne({username:req.body.username})
      if(existingUser){
        return res.status(400).send("User already exists");
      }
      const newuser = new User(req.body);  
      await newuser.save();
      console.log(newuser,"new user data")
      res.send("User Register Successfully")
    
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(400).json(error)
    }
  });



module.exports = router;
