// server.js or your main server file


// server.js or your main server file

const express = require('express');
const connectDB = require('./db'); // Assuming you have a connectDB function
const userRoutes = require('./Routes/userRoutes'); // Update the path if needed
const carRoutes = require('./Routes/carRoutes');
const imageCarRoutes = require('./Routes/ImageCarRoutes'); // Corrected import
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

// Middleware for parsing JSON
app.use(express.json());

// Connect to MongoDB
connectDB()
  .then(() => {
    console.log('Connected to MongoDB');

    // Define routes
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    // API routes
    app.use('/api', userRoutes);
    app.use('/', carRoutes);

    // Use imageCarRoutes for handling image upload requests
    app.use('/api/cars', imageCarRoutes);

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  });
