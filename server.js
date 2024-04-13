//  to run the server type nodemon server.js or node server.js
// server.js or your main server file

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const db = require("./db");
const userRoutes = require("./Routes/userRoutes");
const carRoutes = require("./Routes/carRoutes");
const path =require('path')
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// API routes
app.use("/api/users", userRoutes);
app.use("/api/cars", carRoutes);

// Serve static files (images)
app.use("/images", express.static(path.join(__dirname, 'upload/images')));

// Default route
app.get("/", (req, res) => {
  res.send("Hello from Server");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
