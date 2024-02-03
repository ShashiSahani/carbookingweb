// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const User = require("../models/User"); // Change variable name to "User"

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (user && (await user.comparePassword(password))) {
        res.json(user);
      } else {
        res.status(400).json({ error: "Invalid username or password" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username }); // Use "User" model
    if (existingUser) {
      res.status(400).json({ error: "Username already exists" });
    } else {
      const newUser = new User(req.body); // Use "User" model
      await newUser.save();
      res.json({ message: 'User registered successfully!' });
    }
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
