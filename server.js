//  to run the server type nodemon server.js or node server.js
// server.js or your main server file
// server.js

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const path = require('path');
const bodyParser = require('body-parser');
const db = require("./db"); // Make sure db.js handles database connection
const userRoutes = require("./Routes/userRoutes");
const carRoutes = require("./Routes/carRoutes");
const booking=require('./Routes/bookingsRoute')
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API routes
app.use("/api/users/", userRoutes);
app.use("/api/cars/", carRoutes);
app.use("/api/booking",booking);
// Serve static files (images)
app.use("/images", express.static(path.join(__dirname, 'upload/images')));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("An error occurred:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Default route
app.get("/", (req, res) => {
  res.send("Hello from Server");
});

// Start server
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Server is shutting down...');
  server.close(() => {
    console.log('Server has been gracefully terminated.');
    process.exit(0);
  });
});
