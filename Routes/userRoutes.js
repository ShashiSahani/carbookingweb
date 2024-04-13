// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const User = require("../models/userModel"); 

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (user) {
        res.send(user);
      } else {
        res.status(400).json({ error: "Invalid username or password" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


  router.post("/register", async (req, res) => {
    try {
      const newuser = new User(req.body);  
      await newuser.save();
      res.send("User Register Successfully")
    
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(400).json(error)
    }
  });



module.exports = router;
